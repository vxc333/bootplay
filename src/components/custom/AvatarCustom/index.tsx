import * as Avatar from "@radix-ui/react-avatar";
import { useAuth } from '@/hooks/UseAuth';


export default function AvatarCustom() {
  const { name } = useAuth();

  function getInitials(username: string): string {
    const words: string[] = username.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return `${words[0].charAt(0).toUpperCase()}${words[1].charAt(0).toUpperCase()}`;
  }

  const initial = getInitials(`${name}`);
  return (
    <>
      <Avatar.Root className="bg-blackA1 inline-flex h-[3.125rem] w-[3.125rem] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium">
          {initial}
        </Avatar.Fallback>
      </Avatar.Root>
    </>
  );
}
