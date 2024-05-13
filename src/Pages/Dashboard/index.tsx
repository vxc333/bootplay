import Albums from "@/components/Albums";
// import { useNavigate } from "react-router-dom";
import InputSearch from "@/components/InputSearch";
import NavDashboard from "@/components/NavDashboard";

export default function Dashboard() {
  // const _navigate = useNavigate();

  return (
    <main className="bg-G800 h-screen">
      <div className="bg-imgDashboard h-2/4 bg-cover bg-no-repeat ">
        <div className="h-full  bg-gradient-to-t to-transparent from-G800">
          <NavDashboard />
        </div>
      </div>
      <InputSearch />
      <h1 className="font-lato font-bold text-5xl px-[10%] pb-[2.313rem] text-G25">Trends</h1>
      <Albums />
    </main>
  );
}
