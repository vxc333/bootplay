import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export default function input({ children, style, ...rest }: Props) {
  return (
    <>
      <label className={`${style} flex flex-col text-G600 `}>
        {children}
        <input {...rest} className={`${style} ring-1 ring-gray-300 rounded-lg h-10`} />
      </label>
    </>
  );
}
