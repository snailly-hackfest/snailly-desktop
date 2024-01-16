import React from "react";

import { PageWrapper } from "@/layout";
import { AboutModule } from "@/modules";

const about = () => {
  return (
    <PageWrapper layoutType="base" title="Tentang">
      <AboutModule />
    </PageWrapper>
  );
};

export default about;
