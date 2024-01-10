import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sBase = css`
    width: 100%;
    height: 100%;

    position: fixed;

    display: flex;
`

export const sBaseNavigation = css`
    width: 100%;
    max-width: 250px;

    height: 100%;

    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px 10px;

    background-color: ${theme.color.primary.darkGreen};
`

export const sBaseNavigationContent = css`
    width: 100%;

    display: flex;
    gap: 60px;
    flex-direction: column;
`

export const sBaseNavigationLogo = css`
    width: 100%;
    display: flex;
    justify-content: center; 
`

export const sBaseNavigationList = css`
    width: 100%;

    display: flex;
    gap: 6px;
    flex-direction: column;
`

export const sBaseNavigationFooter = css`
    width: 100%;

    text-align: center;
`

export const sBaseHeader = css`
    width: 100%;
    padding: 20px;
    box-shadow: 0px 1px 4px 0px #0000001F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

export const sBaseContent = css`
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const sBaseHeaderTitle = css`
    color: ${theme.color.primary.darkGreen};
`

export const sBaseChildrenWrapper = css`
    width: 100%;
    height: 100%;

    overflow: auto;

    padding: 24px 50px;
`
