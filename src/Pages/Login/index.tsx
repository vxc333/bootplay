import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { ms_user } from "../../services/apiService";
import { useState } from "react";
import RedirectLink from "../../components/RedirectLink";

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
    <main className="flex justify-center items-center min-h-screen bg-bottomImg">
      <div className="flex flex-col bg-white rounded-3xl h-full max-w-[544px] items-center p-12">
        <h1 className="text-[32px]/[41px] pb-6 font-medium">Acesse sua conta</h1>
        <form onSubmit={handleLogin} className="flex w-[28.438rem] flex-col gap-[0.875rem]">
          <Input type="email" required onChange={(event) => setEmail(event.target.value)}>
            Email
          </Input>

          <Input type="password" required onChange={(event) => setPassword(event.target.value)}>
            Password
          </Input>

          <Button type="submit" styled="h-11">
            Entrar
          </Button>
          <RedirectLink linkText="Inscrever-se" redirectTo="/signup">
            Ainda não tem uma conta?
          </RedirectLink>
        </form>
      </div>
    </main>
  );
}
