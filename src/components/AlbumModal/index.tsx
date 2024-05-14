import { removeDecimal } from "@/utils/removeDecimal";

import { Button } from "../ui/button";
import logoClose from "../../assets/logoClose.svg";

interface AlbumContentProps {
  image?: string;
  name?: string;
  artists?: string;
  releaseDate?: string;
  value?: number;
  onClose: () => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onOpenLink: () => void;
}

export default function AlbumModal({
  image,
  name,
  artists,
  releaseDate,
  value,
  onClose,
  onClick,
  onOpenLink,
}: AlbumContentProps) {
  return (
    <div className="flex flex-1">
      <div
        style={
          {
            "--bg-fundoAuth": `url(${image})`,
          } as React.CSSProperties
        }
        className="bg-[image:var(--bg-fundoAuth)] bg-cover bg-no-repeat w-40 md:w-72 h-[300px] rounded-l-2xl cursor-pointer"
        onClick={onOpenLink}
      ></div>
      <div className="px-4 flex flex-col justify-evenly">
        <div className="flex w-[200px] md:w-[312px]">
          <h1 className="grow text-xl md:text-3xl font-black text-center self-end">{name}</h1>
          <div className="bg-lightGray rounded-2xl  p-1 self-start">
            <img src={logoClose} onClick={onClose} className="bg-[#F4F4F4] rounded-full cursor-pointer w-5 h-5"></img>
          </div>
        </div>
        <h2 className="text-sm md:text-base">Artista: {artists}</h2>
        <p className="text-sm md:text-base">Lançando em: {releaseDate}</p>
        <p className="text-sm md:text-base">
          Valor: <span className="font-black">{removeDecimal(value)} R$</span>
        </p>
        <Button onClick={onClick} className="w-full">
          Comprar{" "}
        </Button>
      </div>
    </div>
  );
}
