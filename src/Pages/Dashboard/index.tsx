import AlbumSearch from "@/components/AlbumSearch";
import CarouselAlbum from "@/components/CarouselAlbum";
// import { useNavigate } from "react-router-dom";
import InputSearch from "@/components/InputSearch";
import NavDashboard from "@/components/NavDashboard";
import { useState } from "react";

export default function Dashboard() {
  // const _navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Valor do input:", inputValue);
  };

  return (
    <main className="bg-G800 h-screen">
      <div className="bg-imgDashboard h-2/4 bg-cover bg-no-repeat ">
        <div className="h-full  bg-gradient-to-t to-transparent from-G800">
          <NavDashboard />
        </div>
      </div>
      <InputSearch onSubmit={handleSubmit} inputValue={inputValue} onChange={handleInputChange} />
      <h1 className="font-lato font-bold text-5xl px-[10%] text-G25">Trends</h1>
      {inputValue ? <AlbumSearch search={inputValue} /> : <CarouselAlbum />}
    </main>
  );
}
