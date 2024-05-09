import React from "react";

interface Props {
  children: React.ReactNode;
  type: string;
  required?: boolean;
  style?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function input({ children, type, required, style, onChange }: Props) {
  return (
    <>
      <label className={`${style} flex flex-col text-gray-600 `}>
        {children}
        <input
          type={type}
          required={required}
          onChange={onChange}
          className={`${style} ring-1 ring-gray-300 rounded-md h-9`}
        />
      </label>
    </>
  );
}
