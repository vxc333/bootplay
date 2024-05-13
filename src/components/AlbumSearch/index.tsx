import { AlbumModel } from "@/models/AlbumModel";
import { ms_album } from "@/services/apiService";
import { useEffect, useState } from "react";
import Card from "../Card";

interface Props {
  search?: string;
}

export default function Albums({ search }: Props) {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  useEffect(() => {
    const searchDefault = "rock";
    ms_album.defaults.headers.common.Authorization =
      "Basic dml0b3J4YXZpZXI0NEBnbWFpbC5jb206JDJhJDEwJHQyYXR0Z3o3MG9iOThrL1ZxdTRqVU9nTEw5RmhncTZ1bjFRbmppTy9lZmRyT2xoaGN3VDJ5";
    ms_album.get(`/albums/all?searchText= ${search || searchDefault}`).then((resp) => {
      setAlbums(resp.data);
      console.log(resp);
    });
  }, [search]);
  return (
    <main className=" flex w-screen flex-col items-center h-screen pt-[2.313rem]">
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
