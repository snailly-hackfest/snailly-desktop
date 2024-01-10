import { promisify } from 'util'
import child_process, {spawn, spawnSync} from 'child_process'
import path from 'path'
import { initializingDangerousWebsite } from './dangerous-website'
import {
    screen,
    BrowserWindow,
    BrowserWindowConstructorOptions,
    app,
} from 'electron'
import Store from 'electron-store'

const exec = promisify(child_process.exec)

export default (
    windowName: string,
    options: BrowserWindowConstructorOptions
): BrowserWindow => {
    const key = 'window-state'
    const name = `window-state-${windowName}`
    const store = new Store({ name })
    const defaultSize = {
        width: options.width,
        height: options.height,
    }
    let state = {}
    let win : BrowserWindow

    const restore = () => store.get(key, defaultSize)

    const getCurrentPosition = () => {
        const position = win.getPosition()
        const size = win.getSize()
        return {
            x: position[0],
            y: position[1],
            width: size[0],
            height: size[1],
        }
    }

    const windowWithinBounds = (windowState, bounds) => {
        return (
            windowState.x >= bounds.x &&
            windowState.y >= bounds.y &&
            windowState.x + windowState.width <= bounds.x + bounds.width &&
            windowState.y + windowState.height <= bounds.y + bounds.height
        )
    }

    const resetToDefaults = () => {
        const bounds = screen.getPrimaryDisplay().bounds
        return Object.assign({}, defaultSize, {
            x: (bounds.width - defaultSize.width!) / 2,
            y: (bounds.height - defaultSize.height!) / 2,
        })
    }

    const ensureVisibleOnSomeDisplay = (windowState) => {
        const visible = screen.getAllDisplays().some((display) => {
            return windowWithinBounds(windowState, display.bounds)
        })
        if (!visible) {
            // Window is partially or fully not visible now.
            // Reset it to safe defaults.
            return resetToDefaults()
        }
        return windowState
    }

    const saveState = () => {
        if (!win.isMinimized() && !win.isMaximized()) {
            Object.assign(state, getCurrentPosition())
        }
        store.set(key, state)
    }

    state = ensureVisibleOnSomeDisplay(restore())

    const browserOptions: BrowserWindowConstructorOptions = {
        show: false,
        minWidth: 1024,
        minHeight: 768,
        ...options,
        ...state,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            ...options.webPreferences,
        },
    }
    win = new BrowserWindow(browserOptions)

     // create the splash screen window
    const splash = new BrowserWindow({
        minWidth: 1024,
        minHeight: 768,
        transparent: true,
        frame: false,
        alwaysOnTop: false,
    });
    
    // center the splash screen both horizontally and vertically
    const screenSize = screen.getPrimaryDisplay().workAreaSize;
    const splashSize = splash.getSize();
    const x = Math.floor((screenSize.width - splashSize[0]) / 2);
    const y = Math.floor((screenSize.height - splashSize[1]) / 2);
    splash.setPosition(x, y);

    const splashFile  = path.join(app.getAppPath(), 'resources', 'splash.html')

    splash.loadFile(splashFile);

    // add mitmproxy to the trusted root certificates when splash screen is shown
    splash.once('ready-to-show', async () => {
        try {
            const isProd: boolean = process.env.NODE_ENV === 'production'
            const initProxyPath = path.join(app.getAppPath(), isProd ? '../../': '', 'bin', 'init_proxy', 'init_proxy.exe')
            const certInstallationPath = path.join(app.getAppPath(), isProd ? '../../' : '','bat', 'install-ca.ps1')
            
            // run proxy first
            await exec(initProxyPath)
            // run powershell script to install the certificate
            await exec('powershell.exe Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted')
            console.log('success command 1')
            await exec(`powershell.exe -ExecutionPolicy Bypass -File ${certInstallationPath}`)
            console.log('success command 2')
            // await initializingDangerousWebsite()
            // console.log('success command 3')
        } catch (error) {
            console.error(error)
        } finally {
            console.log('loading complete')
            splash.destroy()
            win.show()
        }
    })

    // load the main content after a delay
    win.once('ready-to-show', () => {
        splash.on('closed', () => {
            splash.destroy()
        })  
    });
    // win.loadFile('index.html');

    win.on('close', saveState)
    win.removeMenu()

    return win
}
