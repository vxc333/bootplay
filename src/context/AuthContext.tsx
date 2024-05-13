import { UserModel } from "@/models/UserModel";
import { ms_user } from "@/services/apiService";
import { createContext, useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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
  const [userData, setUserData] = useState<UserModel>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const data: UserModel = JSON.parse(localStorage.getItem("@Auth.Data") || "{}");
    if (data.id) {
      setIsAuthenticated(true);
      setUserData(data);
    }
    Logout();
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

    localStorage.setItem("@Auth.Data", JSON.stringify(respUserInfo.data));
    setUserData(respUserInfo.data);
    setIsAuthenticated(true);
  }, []);

  const Logout = useCallback(() => {
    localStorage.removeItem("@Auth.Data");
    setUserData(undefined);
    setIsAuthenticated(false);
    return <Navigate to="/login" />;
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuthenticated, ...userData, login: Login, logout: Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
