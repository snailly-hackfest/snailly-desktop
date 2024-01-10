import React from 'react'

import { sTable, sTableChild, sTableWrapper } from './styles'
import { TableProps } from './types'
import { useRouter } from 'next/router'

const Table = ({ children }: TableProps) => {
    const { route } = useRouter()
    const sTableClassName = route === "/children" ? sTableChild : sTable;

    return (
        <div className={sTableWrapper}>
            <table className={sTableClassName}>{children}</table>
        </div>
    )
}

export default Table
