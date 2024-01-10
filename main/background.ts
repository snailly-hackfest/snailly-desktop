import path from 'path'
import serve from 'electron-serve'
import { app, Tray, ipcMain, BrowserWindow, ipcRenderer } from 'electron'

import { createWindow } from './helpers'
import { ChildProcess, exec, execFile, execSync, spawn } from 'child_process'

import Store from 'electron-store'
import {setup as setupPushReceiver} from 'electron-push-receiver'

import child from "child_process"
import { captureRejectionSymbol } from 'events'
import { writeDangerousWebsite } from './helpers/dangerous-website'

const store = new Store()

let tray: Tray | null = null
let mainWindow: BrowserWindow | null  = null
let proxySpawner: ChildProcess | null = null

const appIcon = path.join(app.getAppPath(), 'resources', 'icon.ico')
const isProd: boolean = process.env.NODE_ENV === 'production'

// Proxy Executable File
const proxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bin', 'snaily_proxy', 'snaily_proxy.exe')
// Proxy Batch Files
const setupproxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bat', 'setupproxy.bat')
const enableproxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bat', 'enableproxy.bat')
const resetproxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bat', 'resetproxy.bat')

if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
}

if (isProd) {
    serve({ directory: 'app' })
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`)
}

(async () => {
    await app.whenReady()

    mainWindow = createWindow('main', {
        width: 1000,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: false,
        }
    })

    setupPushReceiver(mainWindow.webContents)

    if (isProd) {
        await mainWindow.loadURL('app://./home.html')
    } else {
        const port = process.argv[2]
        await mainWindow.loadURL(`http://localhost:${port}/home`)

        mainWindow.webContents.openDevTools()
    }
})()

app.on('window-all-closed', () => {
    const resetproxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bat', 'resetproxy.bat')
    exec(resetproxyPath)
    app.quit()
})

app.on('will-quit', () => {
    const resetproxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bat', 'resetproxy.bat')
    exec(resetproxyPath)
})

ipcMain.on("storeFCMToken", (e, token) => {
    console.log("try to store fcm token")
    store.set('fcm_token', token);
    e.sender.send('getFCMTokenState', token)
});

ipcMain.on("getFCMToken", async (e) => {
    const token = await store.get('fcm_token')
    console.log("try to get fcm token", token)
    e.sender.send('get-fcm-token', token)
});


ipcMain.on('systemTray', async (_, data, payload: {token: string, child_id: string}, websites: string[]) => {
    await writeDangerousWebsite(websites)
    if (data === 'show') {
        mainWindow?.hide()

        if (tray !== null) {
            return
        }

        try {
            tray = new Tray(appIcon)

            tray.setToolTip('Snailly Desktop')

            console.log('Starting proxy...')


            proxySpawner = execFile(proxyPath, [payload.token, payload.child_id], (error, stdout, stderr) => {
                if(error) {
                    console.log(`exec error: ${error}`)
                }
                if(stdout) {
                    console.log(`stdout: ${stdout}`)
                }
                if(stderr) {
                    console.log(`stderr: ${stderr}`)
                }
            })

            proxySpawner.on('spawn', () => {
                setTimeout(() => {
                    execSync(setupproxyPath)
                    execSync(enableproxyPath)
                }, 5000)
            })
            

            tray.on('click', async () => {
                console.log('Stopping proxy...')
                execSync(resetproxyPath)
                mainWindow?.show()
                proxySpawner?.kill()
                tray?.destroy()
                tray = null
            })
        } catch (error) {
            console.log(error)
        }
    }
})
