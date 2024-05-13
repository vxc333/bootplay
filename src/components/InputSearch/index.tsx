import { Input } from "../ui/input";
import search from "../../assets/search.svg";
import { ChangeEvent } from "react";
import { Button } from "../ui/button";

interface Props {
  inputValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
}

export default function InputSearch({ inputValue, onChange, onSubmit }: Props) {
  return (
    <div className="flex w-screen flex-col items-center">
      <form onSubmit={onSubmit} className="relative py-7 flex ">
        <Input
          placeholder=""
          type="text"
          value={inputValue}
          onChange={onChange}
          className="h-14 w-[28rem] text-2xl font-bold border-G300 rounded-xl text-white"
        />
        <Button
          type="submit"
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-5 transform -translate-y-1/2 h-6 w-6 border-none hover:bg-none"
        >
          <img src={search} alt="" />
        </Button>
      </form>
    </div>
  );
}
