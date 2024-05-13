import logo from "../../assets/logoName.svg";
import { useNavigate } from "react-router-dom";
import DropdownMenuCustom from "../custom/DropdownMenuCustom";

export default function NavDashboard() {
  const _navigate = useNavigate();

  return (
    <nav className="flex justify-between px-[10%] bg-white bg-opacity-30 h-[4.688rem] text-xl items-center  backdrop-blur-md">
      <div>
        <img src={logo} alt="logo" className="h-{2.313rem}" />
      </div>
      <div className="flex justify-end gap-[3rem] items-center">
        <a
          className="text-white rounded-xl text-base  hover:font-extrabold "
          onClick={(e) => {
            e.preventDefault();
            _navigate("/myRecords");
          }}
        >
          Meus Discos
        </a>
        <a
          className="text-white rounded-xl text-base  hover:font-extrabold"
          onClick={(e) => {
            e.preventDefault();
            _navigate("/");
          }}
        >
          Carteira
        </a>

        <DropdownMenuCustom />
      </div>
    </nav>
  );
}
