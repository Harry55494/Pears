const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    backgroundColor: 'whitesmoke',
    titleBarStyle: 'hidden',
    movable: true,
    trafficLightPosition: {
      x: 15,
      y: 15,
    },
    minWidth: 1200,
    minHeight: 900,
    width: 1200,
    height: 900,
  });
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
  mainWindow.loadFile(path.join(__dirname, "public/index.html")).then(r => {}).catch(e => { console.log(e) });
  //mainWindow.webContents.openDevTools();
});