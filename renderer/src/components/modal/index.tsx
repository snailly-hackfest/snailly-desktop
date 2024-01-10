import React from 'react'
import { cx } from '@emotion/css'

import { Cross, WarningIcon } from '@/assets'
import { Paragraph } from '@/typography'

import { ModalProps } from './types'
import { getSizeStyles } from './helpers'
import { sModal, sModalContent, sModalHeader, sModalExit, sDeleteType, sDeleteTypeContent, sDeleteName } from './styles'

const Modal = ({ size, title, isOpen, isDeleteType, isGrantAccessType, onClose, children, name }: ModalProps) => {
    return (
         <>
        {isOpen && (
            <>
            {isDeleteType ? (
                <>
                    <div className={sModal}>
                        <div
                            className={cx(
                            sModalContent,
                            { [getSizeStyles('small')]: size === 'small' },
                            { [getSizeStyles('medium')]: size === 'medium' },
                            { [getSizeStyles('large')]: size === 'large' }
                            )}
                        >
                            <div className={sDeleteType}>
                                <WarningIcon />
                                <div className={sDeleteTypeContent}>
                                    <Paragraph variant='l' weight='bold'>
                                        {title}
                                    </Paragraph>
                                    <Paragraph variant='s'>
                                        Data dengan nama <span className={sDeleteName}>{name}</span> akan dihapus secara permanen
                                    </Paragraph>        
                                </div>        
                            </div>
                            <div>{children}</div>
                        </div>
                    </div>
                </>
            ) : isGrantAccessType ? (
                 <>
                    <div className={sModal}>
                        <div
                            className={cx(
                            sModalContent,
                            { [getSizeStyles('small')]: size === 'small' },
                            { [getSizeStyles('medium')]: size === 'medium' },
                            { [getSizeStyles('large')]: size === 'large' }
                            )}
                        >
                            <div className={sDeleteType}>
                                <WarningIcon />
                                <div className={sDeleteTypeContent}>
                                    <Paragraph variant='l' weight='bold'>
                                        {title}
                                    </Paragraph>
                                    <Paragraph variant='s'>
                                        Data dengan url <span className={sDeleteName}>{name}</span>
                                    </Paragraph>        
                                    <Paragraph> akan diubah aksesnya </Paragraph>  
                                </div>        
                            </div>
                            <div>{children}</div>
                        </div>
                    </div>
                </>
            ) : (
                <div className={sModal}>
                    <div
                        className={cx(
                        sModalContent,
                        { [getSizeStyles('small')]: size === 'small' },
                        { [getSizeStyles('medium')]: size === 'medium' },
                        { [getSizeStyles('large')]: size === 'large' }
                        )}
                    >
                        <div className={sModalHeader}>
                            <Paragraph variant='l' weight='bold'>
                                {title}
                            </Paragraph>
                        <div className={sModalExit} onClick={() => onClose()}>
                            <Cross />
                        </div>
                        </div>
                        {children}
                    </div>
                </div>
            )}
            </>
        )}
    </>
    )
}

export default Modal
