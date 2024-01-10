import LogsIcon from '@/assets/logs'
import { HomeIcon, KidsIcon, LockIcon, About, Settings } from '@/assets'

import { RouteProps } from './route/types'

export const Routes: RouteProps[] = [
    {
        path: '/dashboard',
        icon: <HomeIcon />,
        children: 'Dashboard',
    },
    {
        path: '/home',
        icon: <LockIcon />,
        children: 'Lock',
    },
]
