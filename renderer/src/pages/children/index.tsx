import React from 'react'

import { PageWrapper } from '@/layout'
import { ChildrenModule } from '@/modules'

const children = () => {
    return (
        <PageWrapper layoutType='base' title='Data Anak'>
            <ChildrenModule />
        </PageWrapper>
    )
}

export default children
