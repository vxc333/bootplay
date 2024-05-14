import * as React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
  img: string;
  label?: string | number;
}

export function CardAlbum({ children, img, label }: Props) {
  return (
    <div>
      <Card className="w-[min-350px] flex items-center pl-[5%]">
        <img className="rounded-full bg-black p-2 border h-14" src={img} />
        <CardHeader>
          <CardTitle className="">{children}</CardTitle>
          <label className="text-[1.625rem]" htmlFor="">
            {label}
          </label>
        </CardHeader>
      </Card>
    </div>
  );
}
