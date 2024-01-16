import React from "react";

import { PageWrapper } from "@/layout";
import { SettingModule } from "@/modules";

const setting = () => {
  return (
    <PageWrapper layoutType="base" title="Settings">
      <SettingModule />
    </PageWrapper>
  );
};

export default setting;
