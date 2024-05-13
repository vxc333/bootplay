import NavDashboard from "@/components/NavDashboard";

export default function MyRecords() {
  return (
    <main className="h-screen">
      <NavDashboard styleRecords="font-extrabold text-[15px]" />
      <h1 className="px-[10%] pt-[10%] font-lato font-bold text-G25 text-5xl text-left">
        Meus Discos
      </h1>
    </main>
  );
}
