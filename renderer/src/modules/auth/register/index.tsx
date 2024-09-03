import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { ChangeEvent, useState } from "react";

import { axiosPost, displayErrorMessage } from "@/utils";
import { Heading, Paragraph } from "@/typography";
import { Link, Input, Button } from "@/components";

import RegisterView from "./views";
import { RegisterForm } from "./types";
import { sRegister, sRegisterForm, sRegisterButton } from "./styles";

const RegisterModule = () => {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const defaultRegisterForm: RegisterForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<RegisterForm>({
    ...defaultRegisterForm,
  });

  const inputFormOnChange = (element: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = element.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const formOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      enqueueSnackbar("Password tidak cocok", { variant: "error" });

      setIsLoading(false);

      return;
    }

    enqueueSnackbar("Mendaftarkan akun Anda", { variant: "info" });

    try {
      const response = await axiosPost(
        "/auth/register",
        {
          ...data,
        },
        {}
      );

      const responseData = response.data;

      setData({ ...data, ...defaultRegisterForm });

      enqueueSnackbar(responseData.message, {
        variant: "success",
      });

      router.push("/auth/login");
    } catch (error) {
      displayErrorMessage(error, enqueueSnackbar);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterView
      data={data}
      isLoading={isLoading}
      formOnSubmit={formOnSubmit}
      inputFormOnChange={inputFormOnChange}
    />
  );
};

export default RegisterModule;
