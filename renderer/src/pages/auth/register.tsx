import React from "react";

import { PageWrapper } from "@/layout";
import { RegisterModule } from "@/modules";

const register = () => {
  return (
    <PageWrapper
      layoutType="auth"
      title="Selamat Datang!"
      caption="Daftar di sini untuk memantau anak-anak."
    >
      <RegisterModule />
    </PageWrapper>
  );
};

export default register;
