import React from "react";

import { PageWrapper } from "@/layout";
import { LoginModule } from "@/modules";

const login = () => {
  return (
    <PageWrapper
      layoutType="auth"
      title="Selamat Datang!"
      caption="Daftar di sini untuk memantau anak-anak."
    >
      <LoginModule />
    </PageWrapper>
  );
};

export default login;
