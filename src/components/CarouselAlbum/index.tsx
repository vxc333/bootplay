import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { ms_album } from "@/services/apiService";
import { AlbumModel } from "@/models/AlbumModel";

export default function CarouselAlbum() {
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
      breakpoint: { max: 3000, min: 1390 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1390, min: 768 },
      items: 5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="parent px-[5%]">
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
        {albums.map((album, index) => {
          return (
            <div className="slider" key={index}>
              <img src={album.images[0].url} alt="music" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
