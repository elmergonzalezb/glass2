const { app, BrowserWindow } = require("electron")
const path = require("path")
const url = require("url")
const fs = require("fs")

let win

let startup = () => {
    win = new BrowserWindow({
        width: 1280,
        height: 720
    })

    win.loadURL(`file://${__dirname}/render/startup.html`)
    //win.webContents.openDevTools()
  
    win.on("closed", () => {
        win = null
    })
}

app.on("ready", startup)
app.on("window-all-closed", () => app.quit())

app.on("activate", () => {
    if (win === null) startup()
})
