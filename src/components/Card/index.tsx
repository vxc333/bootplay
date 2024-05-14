import React from "react";

interface Props {
  children: React.ReactNode;
  imgAlbum?: string;
  urlAlbum?: string;
  onClick?: () => void;
  key: number;
}

export default function Card({ children, imgAlbum, onClick, key }: Props) {
  return (
    <div
      key={key}
      style={
        {
          "--bg-card": `url(${imgAlbum})`,
        } as React.CSSProperties
      }
      className="bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-64 h-64 rounded-md"
    >
      <div
        onClick={onClick}
        className="flex h-full justify-center items-center cursor-pointer backdrop-brightness-50"
      >
        <h1 className="font-bold text-[2rem] font-lato text-white text-center   ">{children}</h1>
      </div>
    </div>
  );
}
// [16.499rem]
// [17.845rem]
