import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  linkText: string;
  redirectTo: string;
}

export default function RedirectLink({ children, linkText, redirectTo }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <p className="pt-8 text-base text-G500 flex justify-center">
        {children}
        <a
          className="font-semibold text-base text-G900 underline"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate(`${redirectTo}`);
          }}
        >
          {linkText}
        </a>
      </p>
    </>
  );
}
