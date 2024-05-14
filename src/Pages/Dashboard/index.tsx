import AlbumModal from "@/components/AlbumModal";
import AlbumSearch from "@/components/AlbumSearch";
import CarouselAlbum from "@/components/CarouselAlbum";
import InputSearch from "@/components/InputSearch";
import NavDashboard from "@/components/NavDashboard";
import { useAlbum } from "@/hooks/useAlbum";
import { AlbumModel } from "@/models/AlbumModel";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumModel>();
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { albumSale, albumCollection, getUserCollection } = useAlbum();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  function handleAlbumClick(album: AlbumModel) {
    setSelectedAlbum(album);
    setShowModal(true);
  }

  function handleLink(url?: string) {
    window.open(url, "_blank");
  }

  function handleClose() {
    setShowModal(false);
  }

  async function handleAlbumSale(
    name?: string,
    idSpotify?: string,
    artistName?: string,
    imageUrl?: string,
    value?: number
  ) {
    try {
      
      const albumExistsInCollection = albumCollection.find(
        (album) => album.id === selectedAlbum?.id
      );

      if (albumExistsInCollection) {
        toast.error("Este álbum já está em sua coleção.");
        setShowModal(false);
        return;
      }
      await albumSale(name, idSpotify, artistName, imageUrl, value);
      toast.success(`Álbum ${name} comprado!`);

      setShowModal(false);
      await getUserCollection();
    } catch (err) {
      toast.error("Erro ao comprar o álbum");
      console.error(err);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      {inputValue ? (
        <AlbumSearch onClick={(album) => handleAlbumClick(album)} search={inputValue} />
      ) : (
        <CarouselAlbum onClick={(album) => handleAlbumClick(album)} />
      )}

      {showModal && selectedAlbum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl w-[350px] md:w-[600px] h-[300px] ">
            <AlbumModal
              onOpenLink={() => handleLink(selectedAlbum.externalUrls.externalUrls.spotify)}
              onClose={handleClose}
              image={selectedAlbum.images[0].url}
              name={selectedAlbum.name}
              artists={selectedAlbum.artists[0].name}
              releaseDate={selectedAlbum.releaseDate}
              value={selectedAlbum.value}
              onClick={() =>
                handleAlbumSale(
                  selectedAlbum.name,
                  selectedAlbum.id,
                  selectedAlbum.artists[0].name,
                  selectedAlbum.images[0].url,
                  selectedAlbum.value
                )
              }
            />
          </div>
        </div>
      )}
    </main>
  );
}
