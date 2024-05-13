import NavDashboard from "@/components/NavDashboard";

export default function MyWallet() {
  return (
    <main className="h-screen">
        <NavDashboard styleWallet="font-extrabold text-[15px]"/>
        <h1 className="px-[10%] pt-[10%] font-lato font-bold text-G25 text-5xl text-left">Minha Carteira</h1>
    </main>
  );
}
