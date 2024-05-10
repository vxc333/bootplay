import Input from "../../components/Input/index";
import { ms_user } from "../../services/apiService";
import { useState } from "react";
import RedirectLink from "../../components/RedirectLink";
import { Button } from "@/components/ui/button";
import MainBackground from "@/components/MainBackground";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const data = {
      email,
      password,
    };

    await ms_user.post("/api/users/auth", data);
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
          <Button
            type="submit"
            disabled={false}
            className="bg-G800 font-medium text-white h-16 rounded-3xl text-[1.375rem]"
          >
            Entrar
          </Button>
          <RedirectLink linkText="Inscrever-se" redirectTo="/signup">
            Ainda não tem uma conta?
          </RedirectLink>
        </form>
      </AuthForm>
    </MainBackground>
  );
}
