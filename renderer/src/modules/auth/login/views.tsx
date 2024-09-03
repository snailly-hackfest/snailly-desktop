import React from "react";

import { Heading, Paragraph } from "@/typography";
import { Link, Input, Button } from "@/components";

import { LoginViewProps } from "./types";
import { sLogin, sLoginForm, sLoginButton } from "./styles";

const LoginView = ({
  data,
  isLoading,
  formOnSubmit,
  inputFormOnChange,
}: LoginViewProps) => {
  return (
    <form onSubmit={formOnSubmit} className={sLogin}>
      <Heading type="h5" variant="xs" white>
        Masuk
      </Heading>
      <div className={sLoginForm}>
        <Input
          type="email"
          name="email"
          label="Email"
          value={data.email}
          onChange={inputFormOnChange}
          placeholder="Tulis email di sini"
          disabled={isLoading}
          isLabelWhite
          required
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={data.password}
          onChange={inputFormOnChange}
          placeholder="Tulis password di sini"
          disabled={isLoading}
          isLabelWhite
          required
        />
      </div>
      <div className={sLoginButton}>
        <Button type="submit" disabled={isLoading}>
          Masuk
        </Button>
        <Paragraph variant="xs" white>
          Belum punya akun? <Link href="/auth/register">Daftar</Link>
        </Paragraph>
      </div>
    </form>
  );
};

export default LoginView;
