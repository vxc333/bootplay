import { Button } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonCustom({ children, ...rest }: Props) {
  return (
    <Button
      {...rest}
      disabled={false}
      className="bg-G800 font-medium text-white h-16 rounded-[2.5rem] text-[1.375rem]"
    >
      {children}
    </Button>
  );
}
