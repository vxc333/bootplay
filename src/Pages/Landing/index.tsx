import MainBackground from "@/components/MainBackground";
import logo from "../../assets/logoName.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <MainBackground>
      <div className="flex flex-col h-screen backdrop-brightness-50">
        <nav className="flex justify-between px-[6.25rem] bg-white bg-opacity-30 h-[4.688rem] text-xl items-center">
          <div>
            <img src={logo} alt="logo" className="h-{2.313rem}" />
          </div>
          <div className="flex gap-3">
            <Button className="bg-[#010B0F] text-white rounded-3xl py-[0.531rem] w-[12.5rem] text-xl " onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}>
              Entrar
            </Button>
            <Button
              className="bg-sysmap_ligth text-black rounded-3xl py-[0.531rem] w-[12.5rem] text-xl "
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
            >
              Inscrever-se
            </Button>
          </div>
        </nav>

        <div className="pl-[6.25rem] mt-auto mb-auto">
          <h1 className="text-white font-semibold text-[4rem]">
            A história da música <br /> não pode ser <br /> esquecida!
          </h1>
          <p className="text-white text-2xl pb-8">
            Crie já sua conta e curta os sucessos que <br /> marcaram os tempos no Vinil.
          </p>
          <Button
            className="bg-sysmap_ligth text-black rounded-[2rem] h-16  w-[16.813rem] text-xl "
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            Inscrever-se
          </Button>
        </div>
      </div>
    </MainBackground>
  );
}
