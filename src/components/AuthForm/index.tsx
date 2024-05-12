import React from "react";
import logo from "../../assets/Logo.svg";

interface Props {
  children: React.ReactNode;
}
export default function AuthForm({ children }: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen backdrop-brightness-50 backdrop-blur-md">
      <div className="flex flex-col bg-G25 rounded-3xl h-full max-w-[544px] items-center px-12 pt-12 pb-5">
        <img src={logo} alt="logo" className="h-12 mb-4" />
        {children}
      </div>
    </div>
  );
}
