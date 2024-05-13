import ButtonCustom from "@/components/custom/ButtonCustom";
import { useAuth } from "@/hooks/UseAuth";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div>
      <ButtonCustom onClick={() => logout()}>Sair</ButtonCustom>
    </div>
  );
}
