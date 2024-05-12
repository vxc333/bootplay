import React from "react";

interface Props {
  children: React.ReactNode;
  imgAlbum?: string;
  urlAlbum: string;
  key: number;
}

export default function Card({ children, imgAlbum, urlAlbum, key }: Props) {
  function handleLink(url: string) {
    window.open(url, "_blank");
  }
  return (
    <div
      key={key}
      style={
        {
          "--bg-card": `url(${imgAlbum})`,
        } as React.CSSProperties
      }
      className="bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-72 h-72 rounded-md"
    >
      <div
        onClick={() => handleLink(urlAlbum)}
        className="flex h-full justify-center items-center cursor-pointer"
      >
        <h1 className="font-bold text-[2.347rem] font-lato text-white flex justify-center text-center items-center w-full h-full backdrop-brightness-50">
          {children}
        </h1>
      </div>
    </div>
  );
}
// [16.499rem]
// [17.845rem]
