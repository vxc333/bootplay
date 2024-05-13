import { WalletModel } from "@/models/WalletModel";
import { ms_user } from "@/services/apiService";
import { ReactNode, createContext, useCallback, useState } from "react";

interface WalletContextModel extends WalletModel {
  getWallet: () => Promise<string | void>;
  addCredit: (amount: number) => Promise<string | void>;
  walletData?: WalletModel;
}

export const WalletContext = createContext({} as WalletContextModel);

interface Props {
  children: ReactNode;
}

export const WalletProvider: React.FC<Props> = ({ children }) => {
  const [walletData, setWalletData] = useState<WalletModel>();

  const getWallet = useCallback(async () => {
    try {
      const userToken = getUserToken();
      ms_user.defaults.headers.common.Authorization = `Basic ${userToken}`;
      const respUserWallet = await ms_user.get<WalletModel>("/wallet");
      setWalletData(respUserWallet.data);
    } catch (error) {
      console.error("Erro ao obter carteira:", error);
      throw new Error("Erro ao obter carteira.");
    }
  }, []);

  const addCredit = useCallback(async (amount: number) => {
    try {
      const userToken = getUserToken();

      ms_user.defaults.headers.common.Authorization = `Basic ${userToken}`;
      const respCreditValueWallet = await ms_user.post<WalletModel>(`/wallet/credit/${amount}`);
      console.log(respCreditValueWallet.data);
    } catch (error) {
      console.error("Erro ao adicionar crédito à carteira:", error);
      throw new Error("Erro ao adicionar crédito à carteira.");
    }
  }, []);

  const getUserToken = (): string => {
    const userToken = localStorage.getItem("@User.Token");

    if (!userToken) {
      throw new Error("Token de usuário ausente no armazenamento local.");
    }

    return userToken;
  };

  return (
    <WalletContext.Provider value={{ walletData, getWallet, addCredit }}>
      {children}
    </WalletContext.Provider>
  );
};
