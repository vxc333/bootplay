import Input from "../../components/Input/index";
import { FormEvent, useState } from "react";
import RedirectLink from "../../components/RedirectLink";
import MainBackground from "@/components/MainBackground";
import AuthForm from "@/components/AuthForm";
import ButtonCustom from "@/components/custom/ButtonCustom";
import { useAuth } from "@/hooks/UseAuth";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const _navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    login(email, password)
      .then(() => {
        toast.success("Login efetuado com sucesso!");
        _navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Erro ao efetuar login!");
      });
  }

  return (
    <>
      {isAuthenticated && <Navigate to="/dashboard" />}
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
    </>
  );
}
