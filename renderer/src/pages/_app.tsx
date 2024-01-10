import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import type { AppProps } from 'next/app';

import { Global } from '@/styles';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import { ipcMain, ipcRenderer } from 'electron';
import { zustand } from '@/services';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const {setFcmToken} = zustand()

    useEffect(() => {
        ipcRenderer.send('getFCMToken')
    }, [])
    
    useEffect(() => {
        ipcRenderer.on('get-fcm-token', (e, data) => {
            setFcmToken(data);
        })
    }, []);


    return (
        <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Global />
                <Component {...pageProps} />
            </LocalizationProvider>
        </SnackbarProvider>
    );
};

export default MyApp;
