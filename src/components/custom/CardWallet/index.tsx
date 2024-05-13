import React, { ChangeEvent } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/UseAuth";

interface Props {
  value?: number;
  balance?: number;
  points?: number;
  submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CardWallet({ balance, points, submit, onChange }: Props) {
  const { name } = useAuth();
  return (
    <div className="px-[35%] pt-[2%]">
      <Card className=" w-">
        <CardHeader>
          <CardTitle>{`Olá ${name}`} </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="amount">{`Saldo Atual: R$ ${balance}`}</Label>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="points">{`Pontos: ${points}`}</Label>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Valor</Label>
                <Input
                  className=""
                  onChange={onChange}
                  type="number"
                  id="number"
                  placeholder="00.00"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={submit}>Depositar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
