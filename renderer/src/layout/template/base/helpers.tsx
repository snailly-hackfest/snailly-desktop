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
        path: '/log-activity',
        icon: <LogsIcon />,
        children: 'Log Aktivitas',
    },
    {
        path: '/children',
        icon: <KidsIcon />,
        children: 'Data Anak',
    },
    {
        path: '/home',
        icon: <LockIcon />,
        children: 'Lock',
    },
    {
        path: '/about',
        icon: <About />,
        children: 'Tentang',
    },
    {
        path: '/setting',
        icon: <Settings />,
        children: 'Pengaturan',
    }
]