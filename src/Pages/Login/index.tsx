import Input from "../../components/Input/index";
import { FormEvent, useEffect, useState } from "react";
import RedirectLink from "../../components/RedirectLink";
import MainBackground from "@/components/MainBackground";
import AuthForm from "@/components/AuthForm";
import ButtonCustom from "@/components/custom/ButtonCustom";
import { useAuth } from "@/hooks/UseAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }, [isAuthenticated]);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await Login(email, password);
  }

  return (
    <MainBackground>
      <AuthForm>
        <h1 className="text-[2rem]/[2.563rem] text-G900 pb-6 font-medium">Acesse sua conta</h1>

        <form onSubmit={handleLogin} className="flex w-[28.438rem] flex-col gap-[0.875rem]">
          <Input type="email" required onChange={(event) => setEmail(event.target.value)}>
            Email
          </Input>
          <Input type="password" required onChange={(event) => setPassword(event.target.value)}>
            Password
          </Input>
          <ButtonCustom type="submit">Entrar</ButtonCustom>
          <RedirectLink linkText="Inscrever-se" redirectTo="/signup">
            Ainda não tem uma conta?
          </RedirectLink>
        </form>
      </AuthForm>
    </MainBackground>
  );
}
