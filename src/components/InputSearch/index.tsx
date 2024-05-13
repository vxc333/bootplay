import React from "react";
import { Input } from "../ui/input";
import search from "../../assets/search.svg";

export default function InputSearch() {
  return (
    <div className="flex w-screen flex-col items-center">
      <div className="relative py-7 flex ">
        <Input
          placeholder=""
          type="text"
          className="h-14 w-[28rem] text-2xl font-bold border-G300 rounded-xl text-white"
        />
        <img
          src={search}
          alt=""
          className="absolute top-1/2 right-5 transform -translate-y-1/2 h-6 w-6"
        />
      </div>
    </div>
  );
}
