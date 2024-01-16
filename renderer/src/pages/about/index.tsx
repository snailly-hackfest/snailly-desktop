import React from "react";

import { PageWrapper } from "@/layout";
import { AboutModule } from "@/modules";

const about = () => {
  return (
    <PageWrapper layoutType="base" title="About">
      <AboutModule />
    </PageWrapper>
  );
};

export default about;
