import NavDashboard from "@/components/NavDashboard";

import { useWallet } from "@/hooks/useWallet";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CardWallet from "@/components/custom/CardWallet";

export default function MyWallet() {
  const { getWallet, walletData, addCredit } = useWallet();
  const [ammount, setAmmount] = useState(0);

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getWallet();
      } catch (error) {
        toast.error("Erro ao buscar os dados da carteira");
        console.error("Erro ao buscar os dados da carteira:", error);
      }
    };

    fetchData();
  }, [getWallet]);

  async function handleCreditAdition(value: number) {
    if (!ammount) {
      toast.error("Adicione um valor");
      return;
    }

    if (ammount < 0) {
      toast.error("Não é possível adicionar um valor negativo");
      return;
    }
    try {
      await addCredit(value);
      await getWallet();
      setAmmount(0);
      toast.success("Valor creditado com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar, verifique se o valor esta no formato");
    }
  }

  return (
    <main className="h-screen">
      <NavDashboard styleWallet="font-extrabold text-[15px]" />
      <h1 className="px-[10%] pt-[10%] font-lato font-bold text-G25 text-5xl text-left">
        Minha Carteira
      </h1>

      <CardWallet
        onChange={(e) => setAmmount(parseFloat(e.target.value))}
        submit={() => handleCreditAdition(ammount)}
        balance={walletData?.balance}
        points={walletData?.points}
      />
    </main>
  );
}
