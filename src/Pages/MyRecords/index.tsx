import NavDashboard from "@/components/NavDashboard";
import toast from "react-hot-toast";
import { useAlbum } from "@/hooks/useAlbum";
import { useEffect } from "react";
import logoMoney from "../../assets/logoMoney.svg";
import logoPlay from "../../assets/logoPlay.svg";
import { CardAlbum } from "@/components/CardAlbum";
import Card from "@/components/Card";

export default function MyRecords() {
  const { albumCollection, getUserCollection } = useAlbum();
  // const navigate = useNavigate();
  const albumsInCollection = albumCollection?.length;
  const totalValueInvested = albumCollection?.reduce(
    (acc, currentItem) => acc + (currentItem?.value||0),
    0
  );
  // function handleSpotifyLink(albumUrl: string) {
  //   window.open(albumUrl, "_blank");
  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUserCollection();
      } catch (error) {
        toast.error("Erro ao buscar os albums");
        console.error("Erro ao buscar coleção:", error);
      }
    };

    fetchData();
  }, [getUserCollection]);

  return (
    <main className="h-screen">
      <NavDashboard styleRecords="font-extrabold text-[15px]" />
      <h1 className="px-[10%] pt-[10%] font-lato font-bold text-G25 text-5xl text-left">
        Meus Discos
      </h1>
      <div className="flex gap-5 px-[10%] pt-[2%]">
        <CardAlbum label={albumsInCollection} img={logoPlay}>
          Total de Albums
        </CardAlbum>
        <CardAlbum label={`R$ ${totalValueInvested}`} img={logoMoney}>
          Valor investido
        </CardAlbum>
      </div>
      <div className="px-[10%] px:20 pt-[2%] pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {albumCollection.map((album, index) => (
          <Card
            key={index}
            imgAlbum={album.imageUrl}
          >
            {album.name}
          </Card>
        ))}
      </div>
    </main>
  );
}
