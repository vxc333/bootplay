import Input from "../../components/Input/index";
import { ms_user } from "../../services/apiService";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import RedirectLink from "../../components/RedirectLink";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import MainBackground from "@/components/MainBackground";
import AuthForm from "@/components/AuthForm";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent) {
    setLoading(true);
    event.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    await ms_user
      .post("/api/users/create", data)
      .then((resp) => {
        console.log(resp.data);
        toast.success("Conta criada com sucesso!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Erro ao criar a conta...");
        setLoading(false);
      });
  }

  return (
    <MainBackground>
      <AuthForm>
        <h1 className="text-[2rem]/[2.563rem] text-G900 pb-6 font-medium">Criar conta</h1>
        <form onSubmit={handleSignup} className="flex w-[25rem] flex-col gap-[0.875rem]">
          <Input type="text" required onChange={(event) => setName(event.target.value)}>
            Nome Completo
          </Input>

          <Input type="email" required onChange={(event) => setEmail(event.target.value)}>
            Email
          </Input>

          <Input type="password" required onChange={(event) => setPassword(event.target.value)}>
            Password
          </Input>

          {loading ? (
            <Button disabled className="bg-G800 font-medium text-white h-16 rounded-3xl text-[1.375rem]">
              <Loader2 className="mr-2 h-4 w-4 animate-spin " />
              Carregando...
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={false}
              className="bg-G800 font-medium text-white h-16 rounded-3xl text-[1.375rem]"
            >
              Criar conta
            </Button>
          )}

          <RedirectLink linkText="Entrar" redirectTo="/login">
            Já tem uma conta?
          </RedirectLink>
        </form>
      </AuthForm>
    </MainBackground>
  );
}
