import { css } from '@emotion/css'

export const sModal = css`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    position: fixed;
    top: 0;
    left: 0;

    padding: 20px;

    background-color: rgba(0, 0, 0, 0.5);
`

export const sModalContent = css`
    width: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;

    border-radius: 6px;

    background-color: white;
    padding: 20px;
`

export const sModalHeader = css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
`

export const sModalExit = css`
    cursor: pointer;

    display: grid;
    place-items: center;
`

export const sModalContentSmall = css`
    max-width: 400px;
`

export const sModalContentMedium = css`
    max-width: 700px;
`

export const sModalContentLarge = css`
    max-width: 900px;
`

export const sDeleteType = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 16px;
    text-align: center;
`

export const sDeleteTypeContent = css`
    padding-top: 16px;
    max-width: 34ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;



export const sDeleteName = css`
    font-weight: 600;
`
