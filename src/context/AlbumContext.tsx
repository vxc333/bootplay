import { AlbumModel } from "@/models/AlbumModel";
import { ReactNode, createContext, useCallback, useState } from "react";
import { ms_album } from "@/services/apiService";

interface AlbumContextModel {
  albumData: AlbumModel[];
  albumCollection: AlbumModel[];
  searchAlbum: (searchText: string) => Promise<void>;
  buyAlbum: (
    name?: string,
    idSpotify?: string,
    artistName?: string,
    imageUrl?: string,
    value?: number
  ) => Promise<void>;
  getUserCollection: () => Promise<void>;
}

export const AlbumContext = createContext<AlbumContextModel>({
  albumData: [],
  albumCollection: [],
  searchAlbum: () => Promise.resolve(),
  buyAlbum: () => Promise.resolve(),
  getUserCollection: () => Promise.resolve(),
});

interface Props {
  children: ReactNode;
}

export const AlbumProvider: React.FC<Props> = ({ children }) => {
  const [albumData, setAlbumData] = useState<AlbumModel[]>([]);
  const [albumCollection, setAlbumCollection] = useState<AlbumModel[]>([]);

  // APAGAR
  const searchAlbum = useCallback(async (searchText: string) => {
    try {
      const resp = await ms_album.get(`/albums/all?search=${searchText}`);
      setAlbumData(resp.data);
    } catch (error) {
      console.error("Erro ao buscar álbuns:", error);
    }
  }, []);

  //

  const buyAlbum = useCallback(
    async (
      name?: string,
      idSpotify?: string,
      artistName?: string,
      imageUrl?: string,
      value?: number
    ) => {
      try {
        await ms_album.post("/albums/sale", {
          name,
          idSpotify,
          artistName,
          imageUrl,
          value,
        });
      } catch (error) {
        console.error("Erro ao comprar álbum:", error);
      }
    },
    []
  );

  const getUserCollection = useCallback(async () => {
    try {
      const resp = await ms_album.get("/albums/my-collection");
      setAlbumCollection(resp.data);
    } catch (error) {
      console.error("Erro ao obter coleção de álbuns do usuário:", error);
    }
  }, []);

  return (
    <AlbumContext.Provider
      value={{
        albumData,
        albumCollection,
        searchAlbum,
        buyAlbum,
        getUserCollection,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
