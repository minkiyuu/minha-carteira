import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";

import { Container, Logo, Form, FormTitle } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img
          src={logoImg}
          alt="logo minha-carteira, com um símbolo de cifrão em um quadrado laranja"
        ></img>
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input
          type="email"
          placeholder="e-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
