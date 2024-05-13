import logo from "../../assets/logoName.svg";
import { useNavigate } from "react-router-dom";
import DropdownMenuCustom from "../custom/DropdownMenuCustom";

interface Props {
  styleRecords ?: string
  styleWallet ?: string
}

export default function NavDashboard({styleRecords,styleWallet}:Props) {
  const _navigate = useNavigate();

  return (
    <nav className="flex justify-between w-full px-[10%] bg-white bg-opacity-30 h-[4.688rem] text-xl items-center  backdrop-blur-md fixed">
      <div>
        <a className="cursor-pointer" onClick={(e) => {
             e.preventDefault();
            _navigate("/dashboard");
          }}>
          <img src={logo} alt="logo" className="h-{2.313rem}" />
        </a>
      </div>
      <div className="flex justify-end gap-[3rem] items-center">
        <a
          className={`text-white text-base hover:font-extrabold hover:text-[15px] ${styleRecords}`}
          onClick={(e) => {
            e.preventDefault();
            _navigate("/myRecords");
          }}
        >
          Meus Discos
        </a>
        <a
      
          className={`text-white text-base hover:font-extrabold hover:text-[15px] ${styleWallet}`}
          onClick={(e) => {
            e.preventDefault();
            _navigate("/mywallet");
          }}
        >
          Carteira
        </a>

        <DropdownMenuCustom />
      </div>
    </nav>
  );
}
