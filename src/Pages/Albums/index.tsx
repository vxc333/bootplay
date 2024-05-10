import Card from "@/components/Card";
import { AlbumModel } from "@/models/AlbumModel";
import { ms_album } from "@/services/apiService";
import { useEffect, useState } from "react";

export default function Albums() {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  useEffect(() => {
    ms_album.defaults.headers.common.Authorization =
      "Basic dml0b3J4YXZpZXI0NEBnbWFpbC5jb206JDJhJDEwJHQyYXR0Z3o3MG9iOThrL1ZxdTRqVU9nTEw5RmhncTZ1bjFRbmppTy9lZmRyT2xoaGN3VDJ5";
    ms_album.get("/api/albums/all?searchText= alessandro").then((resp) => {
      setAlbums(resp.data);
      console.log(resp);
    });
  }, []);

  return (
    <main className="flex flex-col items-center h-screen">
      <h1>Albums</h1>
      {/* FAZER CAMPO DE PESQUISA */}

      <section className="flex gap-5">
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
