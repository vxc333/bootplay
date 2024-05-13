import { UserModel } from "@/models/UserModel";
import { ms_album, ms_user } from "@/services/apiService";
import { createContext, useCallback, useEffect, useState } from "react";

interface AuthContextModel extends UserModel {
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextModel);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserModel | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUserData: UserModel | null = JSON.parse(
      localStorage.getItem("@Auth.Data") || "null"
    );
    if (storedUserData) {
      setIsAuthenticated(true);
      setUserData(storedUserData);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const respAuth = await ms_user.post("/users/auth", { email, password });
      const token = respAuth.data.token;

      ms_user.defaults.headers.common.Authorization = `Basic ${token}`;
      ms_album.defaults.headers.common.Authorization = `Basic ${token}`;

      const respUserInfo = await ms_user.get<UserModel>(`/users/${respAuth.data.id}`);
      const userInfo = respUserInfo.data;

      localStorage.setItem("@Auth.Data", JSON.stringify(userInfo));
      localStorage.setItem("@User.Token", respAuth.data.token);
      setUserData(userInfo);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Erro ao fazer login.");
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("@Auth.Data");
    localStorage.removeItem("@User.Token");
    setUserData(undefined);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, ...userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
