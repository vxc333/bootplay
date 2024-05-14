import { AlbumModel } from "@/models/AlbumModel";
import { FC, ReactNode, createContext, useCallback, useState } from "react";
import { ms_album, ms_user } from "@/services/apiService";

interface AlbumContextModel extends AlbumModel {
  albumCollection: AlbumModel[];
  albumSale: (
    name?: string,
    idSpotify?: string,
    artistName?: string,
    imageUrl?: string,
    value?: number
  ) => Promise<string | void>;
  getUserCollection: () => Promise<string | void>;
}

export const AlbumContext = createContext({} as AlbumContextModel);

interface Props {
  children: ReactNode;
}

export const AlbumProvider: FC<Props> = ({ children }) => {
  const [albumCollection, setAlbumCollection] = useState<AlbumModel[]>([]);

  const AlbumSale = useCallback(
    async (
      name?: string,
      idSpotify?: string,
      artistName?: string,
      imageUrl?: string,
      value?: number
    ) => {
      const userToken = localStorage.getItem("@User.Token");

      try {
        ms_user.defaults.headers.common.Authorization = `Basic ${userToken}`;
        ms_album.defaults.headers.common.Authorization = `Basic ${userToken}`;
        const respSelectedAlbum = await ms_album.post("/albums/sale", {
          name,
          idSpotify,
          artistName,
          imageUrl,
          value,
        });

        console.log(respSelectedAlbum.data);
      } catch (error) {
        console.error("Erro ao comprar o álbum:", error);
      }
    },
    []
  );

  const GetUserCollection = useCallback(async () => {
    const authData = localStorage.getItem("@Auth.Data");
    const userToken = localStorage.getItem("@User.Token");

    if (authData) {
      try {
        ms_album.defaults.headers.common.Authorization = `Basic ${userToken}`;
        const respUserCollection = await ms_album.get("/albums/my-collection");
        setAlbumCollection(respUserCollection.data);
        console.log("colection useEffect", albumCollection);
        console.log(respUserCollection.data);
      } catch (err) {
        console.error("Erro ao procurar os albums", err);
      }
    }
  }, []);

  return (
    <AlbumContext.Provider
      value={{
        albumCollection,
        albumSale: AlbumSale,
        getUserCollection: GetUserCollection,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
