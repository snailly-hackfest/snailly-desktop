import React from 'react'

import { Heading, Paragraph } from '@/typography'
import { Link, Input, Button } from '@/components'

import { RegisterViewProps } from './types'
import { sRegister, sRegisterForm, sRegisterButton } from './styles'

const RegisterView = ({
    data,
    isLoading,
    formOnSubmit,
    inputFormOnChange,
}: RegisterViewProps) => {
    return (
        <form onSubmit={formOnSubmit} className={sRegister}>
            <Heading type='h5' variant='xs' white>
                Registrasi Akun
            </Heading>
            <div className={sRegisterForm}>
                <Input
                    type='text'
                    name='name'
                    label='Nama'
                    value={data.name}
                    onChange={inputFormOnChange}
                    placeholder='Tulis nama Anda di sini'
                    disabled={isLoading}
                    isLabelWhite
                    required
                />
                <Input
                    type='email'
                    name='email'
                    label='Email'
                    value={data.email}
                    onChange={inputFormOnChange}
                    placeholder='Tulis email di sini'
                    disabled={isLoading}
                    isLabelWhite
                    required
                />
                <Input
                    type='password'
                    name='password'
                    label='Password'
                    value={data.password}
                    onChange={inputFormOnChange}
                    placeholder='Tulis password di sini'
                    disabled={isLoading}
                    isLabelWhite
                    required
                />
                <Input
                    type='password'
                    name='confirmPassword'
                    label='Konfirmasi Password'
                    value={data.confirmPassword}
                    onChange={inputFormOnChange}
                    placeholder='Tulis password di sini'
                    disabled={isLoading}
                    isLabelWhite
                    required
                />
            </div>
            <div className={sRegisterButton}>
                <Button type='submit' disabled={isLoading}>
                    Daftar
                </Button>
                <Paragraph variant='xs' white>
                    Sudah punya akun? <Link href='/auth/login'>Masuk</Link>
                </Paragraph>
            </div>
        </form>
    )
}

export default RegisterView
