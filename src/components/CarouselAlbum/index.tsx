import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { ms_album } from "@/services/apiService";
import { AlbumModel } from "@/models/AlbumModel";
import Card from "../Card";

interface Props {
  onClick: (album: AlbumModel) => void;
}

export default function CarouselAlbum({ onClick }: Props) {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);

  useEffect(() => {
    const userToken = localStorage.getItem("@User.Token");
    const searchDefault = "rock";
    ms_album.defaults.headers.common.Authorization = `Basic ${userToken}`;
    ms_album.get(`/albums/all?searchText=${searchDefault}`).then((resp) => {
      setAlbums(resp.data);
      console.log(resp);
    });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1661 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1661, min: 1260 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 1260, min: 924 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile2: {
      breakpoint: { max: 924, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="parent px-[10%] pt-[2%]">
      <Carousel
        arrows={false}
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {albums?.map((album, index) => (
          <Card
            key={index}
            onClick={() => onClick(album)}
            urlAlbum={album.externalUrls.externalUrls.spotify}
            imgAlbum={album.images[0].url}
          >
            {album.name}
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
