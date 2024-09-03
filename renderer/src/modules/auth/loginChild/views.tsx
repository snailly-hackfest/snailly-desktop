import React from "react";

import { Paragraph } from "@/typography";
import { Link, Button } from "@/components";
import { KidsIcon, DodoTextLogo, LoadingIcon } from "@/assets";

import { ChildrenViewsProps } from "./types";
import {
  sLoginChild,
  sLoginAsParent,
  sLoginChildLogo,
  sLoginChildHeader,
  sLoginChildContent,
  sLoginChildAccount,
  sLoginChildAccountWrapper,
  sLoadingContainer,
} from "./styles";
import { zustand } from "@/services";

const LoginChildViews = ({
  childrenList,
  childAccountButtonHandler,
  isLoading,
}: ChildrenViewsProps) => {
  const user = zustand((zustandState) => zustandState.user);
  return (
    <div className={sLoginChild}>
      <div className={sLoginChildContent}>
        <div className={sLoginChildLogo}>
          <DodoTextLogo />
        </div>
        {isLoading && (
          <div className={sLoadingContainer}>
            <LoadingIcon size="s" />
          </div>
        )}
        {!isLoading && childrenList.length > 0 && (
          <>
            <div className={sLoginChildHeader}>
              <Paragraph variant="l" weight="bold" white>
                Siapakah Kamu?
              </Paragraph>
              <Paragraph variant="xs" white>
                Pilih salah satu akun anak dan klik untuk melanjutkan.
              </Paragraph>
            </div>
            <div className={sLoginChildAccountWrapper}>
              {childrenList.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={sLoginChildAccount}
                    onClick={() => {
                      childAccountButtonHandler({
                        child_id: item.id,
                        token: user.accessToken,
                      });
                    }}
                  >
                    <KidsIcon />
                    <Paragraph white>{item.name}</Paragraph>
                  </button>
                );
              })}
            </div>
          </>
        )}
        {!isLoading && childrenList.length === 0 && (
          <div className={sLoginAsParent}>
            <Paragraph variant="l" weight="bold" white>
              Silakan login sebagai orang tua terlebih dahulu.
            </Paragraph>
            <Link href="/auth/login">
              <Button>Masuk sebagai Orang Tua</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginChildViews;
