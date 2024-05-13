import * as Avatar from "@radix-ui/react-avatar";
import { useAuth } from '@/hooks/UseAuth';
import { getInitials } from "@/utils/getInitials";

export default function AvatarCustom() {
  const { name } = useAuth();
  
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
