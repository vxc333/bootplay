import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  styled?: string;
}
export default function index({ children, styled, type }: Props) {
  return (
    <>
      <button
        className={`${styled} ring-1 ring-gray-800 font-medium bg-gray-800 rounded-3xl h-9 text-white `}
        type={type}
      >
        {children}
      </button>
    </>
  );
}
