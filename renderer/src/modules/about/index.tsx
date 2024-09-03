import { sAbout, sAboutLogo, sAboutDodo } from "./styles";

import { LogoSnailyGreen } from "@/assets";
import { Paragraph } from "@/typography";
import { DodoLoginSmall } from "@/assets";

const AboutModule = () => {
  return (
    <>
      <div className={sAbout}>
        <div className={sAboutLogo}>
          <LogoSnailyGreen />
        </div>
        <Paragraph variant="s" weight="normal" darkGreen>
          Snailly: Safe browsing for the children <br />
          version 1.0 &copy;
          <br />
          Copyright 2024 UNIKOM CODELABS. <br />
          All rights reserved. <br />
        </Paragraph>
        <Paragraph variant="s" weight="normal" darkGreen>
          Snailly adalah sebuah aplikasi untuk para orang tua mengontrol dan
          mengawasi aktivitas anak-anak mereka dalam menggunakan internet, di
          mana anak-anak dapat mengeksplorasi dunia internet dengan aman dan
          orang tua tidak akan merasa khawatir tentang bahaya dari internet.
        </Paragraph>
        <div className={sAboutDodo}>
          <DodoLoginSmall />
        </div>
      </div>
    </>
  );
};

export default AboutModule;
