import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { ms_user } from "../../services/apiService";
import { useState } from "react";
import toast from "react-hot-toast";
import RedirectLink from "../../components/RedirectLink";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const data = {
      name,
      email,
      password,
    };

    await ms_user.post("/api/users/create", data).then((resp) => {
      console.log(resp.data);
      toast.success("Conta criada com sucesso!");
    });
  }

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col bg-white rounded-3xl h-full max-w-[544px] items-center p-12">
        <h1 className="text-[32px]/[41px] pb-6 font-medium">Criar conta</h1>
        <form onSubmit={handleSignup} className="flex w-[28.438rem] flex-col gap-[0.875rem]">
          <Input type="text" required onChange={(event) => setName(event.target.value)}>
            Nome Completo
          </Input>

          <Input type="email" required onChange={(event) => setEmail(event.target.value)}>
            Email
          </Input>

          <Input type="password" required onChange={(event) => setPassword(event.target.value)}>
            Password
          </Input>

          <Button type="submit" styled="h-11">
            Criar conta
          </Button>

          <RedirectLink linkText="Entrar" redirectTo="/login">
            Já tem uma conta?
          </RedirectLink>
        </form>
      </div>
    </main>
  );
}
