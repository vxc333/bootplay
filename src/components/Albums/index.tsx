import { AlbumModel } from "@/models/AlbumModel";
import { ms_album } from "@/services/apiService";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../Card";
import "./style.css";

export default function Albums() {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  useEffect(() => {
    ms_album.defaults.headers.common.Authorization =
      "Basic dml0b3J4YXZpZXI0NEBnbWFpbC5jb206JDJhJDEwJHQyYXR0Z3o3MG9iOThrL1ZxdTRqVU9nTEw5RmhncTZ1bjFRbmppTy9lZmRyT2xoaGN3VDJ5";
    ms_album.get("/albums/all?searchText= rock").then((resp) => {
      setAlbums(resp.data);
      console.log(resp);
    });
  }, []);
  // const _navegate = useNavigate();
  return (
    <main className=" flex w-screen flex-col items-center h-screen">

      {/* <section className="carousel-home mt-20 absolute gap-5 left-0 flex">
        {albums?.map((album, index) => (
          <Card
            key={index}
            urlAlbum={album.externalUrls.externalUrls.spotify}
            imgAlbum={album.images[0].url}
          >
            {album.name}
          </Card>
        ))}
      </section> */}

      <section className="flex flex-wrap justify-center h-full gap-5 bg-G800 px-[10%]">
        {albums?.map((album, index) => (
          <Card
            key={index}
            urlAlbum={album.externalUrls.externalUrls.spotify}
            imgAlbum={album.images[0].url}
          >
            {album.name}
          </Card>
        ))}
      </section>
    </main>
  );
}
