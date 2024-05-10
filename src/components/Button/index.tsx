import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styled?: string;
}
export default function index({ children, styled, ...rest }: Props) {
  return (
    <>
      <button
        {...rest}
        className={`${styled} ring-1 ring-gray-800 font-medium bg-gray-800 rounded-3xl h-9 text-white `}
      >
        {children}
      </button>
    </>
  );
}
