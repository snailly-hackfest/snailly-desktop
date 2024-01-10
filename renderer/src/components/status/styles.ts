import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sStatus = css`
    font-size: ${theme.font.size[14]};

    padding: 6px 8px;
    border-radius: 999px;
    white-space: nowrap;
    align-items: center;
    display: inline-flex;
`

export const sStatusPositive = css`
  background-color: #33aa5b26;
  color: #33aa5b;
`;

export const sStatusNegative = css`
  background-color: #ff3d3d26;
  color: #ff3d3d;
`;

export const sStatusNotLabelling = css`
  background-color: #fcba0326;
  color: #fcba03;
`;