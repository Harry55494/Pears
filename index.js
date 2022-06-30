const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    backgroundColor: 'whitesmoke',
    titleBarStyle: 'hidden',
    movable: true,
    trafficLightPosition: {
      x: 17,
      y: 32,
    },
    minHeight: 450,
    minWidth: 500,
    width: 1200,
    height: 900,
  });
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  //mainWindow.webContents.openDevTools();
});