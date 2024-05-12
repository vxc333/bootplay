import { UserModel } from "@/models/UserModel";
import { ms_user } from "@/services/apiService";
import { createContext, useCallback, useEffect, useState } from "react";

interface AuthContextModel extends UserModel {
  Login: (email: string, password: string) => Promise<string | void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextModel);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserModel>();

  useEffect(() => {
    const data: UserModel = JSON.parse(localStorage.getItem("@Auth.Data") || "{}");
    setUserData(data);
  }, []);

  const Login = useCallback(async (email: string, password: string) => {
    const respAuth = await ms_user.post("/users/auth", { email, password });

    if (respAuth instanceof Error) {
      return respAuth.message;
    }

    ms_user.defaults.headers.common.Authorization = `Basic ${respAuth.data.token}`;
    const respUserInfo = await ms_user.get(`/users/${respAuth.data.id}`);

    if (respUserInfo instanceof Error) {
      return respUserInfo.message;
    }

    setUserData(respUserInfo.data);

    localStorage.setItem("@Auth.Data", JSON.stringify(respUserInfo.data));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!userData, ...userData, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Logout , outra tela , verificar se ta logado
