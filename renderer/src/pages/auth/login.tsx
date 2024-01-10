import React from 'react'

import { PageWrapper } from '@/layout'
import { LoginModule } from '@/modules'

const login = () => {
    return (
        <PageWrapper
            layoutType='auth'
            title='Selamat Datang!'
            caption='Mohon untuk mengisi email dan password anda untuk melanjutkan.'
        >
            <LoginModule />
        </PageWrapper>
    )
}

export default login
