import React from "react";
import { Input } from "../ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export default function input({ children, style, ...rest }: Props) {
  return (
    <>
      <label className={`${style} flex flex-col text-G600 `}>
        {children}
        <Input {...rest} className={`${style} ring-1 ring-gray-300 rounded-lg h-10`} />
      </label>
    </>
  );
}
