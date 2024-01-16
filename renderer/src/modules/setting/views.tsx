import React from 'react'

import { DodoLoginSmall } from "@/assets";
import { Paragraph } from '@/typography'
import { Input, Button } from '@/components'

import { SettingViewProps } from './types'
import { sSetting, sSettingDodo, sSettingHeading, sSettingForm, sSettingButton } from "./styles";
import PageTitle from '@/components/pagetitle';

const SettingView = ({
    data,
    isLoading,
    formOnSubmit,
    inputFormOnChange,
    currentUser,
}: SettingViewProps) => {
    return (
      <div>        
        <div className={sSettingHeading}>
            <PageTitle title="Pengaturan" />
            <Paragraph variant="m" lightGreen>
                Anda dapat mengubah password akun di sini
            </Paragraph>
        </div>
        <form onSubmit={formOnSubmit} className={sSetting}>
            <div className={sSettingForm}>
                    <Input
                        type="password"
                        name="oldPassword"
                        label="Password Lama"
                        value={data.oldPassword}
                        onChange={inputFormOnChange}
                        placeholder="Ketik password lama di sini"
                        disabled={isLoading}
                        required
                        />
                    <Input
                        type="password"
                        name="newPassword"
                        label="Password Baru"
                        value={data.newPassword}
                        onChange={inputFormOnChange}
                        placeholder="Ketik password baru di sini"
                        disabled={isLoading}
                        required
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        label="Konfirmasi Password"
                        value={data.confirmPassword}
                        onChange={inputFormOnChange}
                        placeholder="Ketik password baru di sini"
                        disabled={isLoading}
                        required
                    />
                <div className={sSettingButton}>
                    <Button type="submit" disabled={isLoading} fullWidth>
                     Simpan
                    </Button>
                </div>
            </div>
            <div className={sSettingDodo}>
                <DodoLoginSmall />
            </div>
        </form>
      </div>
  );
}

export default SettingView