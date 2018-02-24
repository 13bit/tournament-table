var { app, BrowserWindow, ipcMain } = require('electron');
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 1000,
    backgroundColor: '#ffffff',
    webPreferences: {
      webSecurity: false
    }
  })

  const wintwo = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });

  wintwo.loadURL(`file:///${__dirname}/dist/index.html#/main`);
  // wintwo.loadURL('http://localhost:4200/main');
  wintwo.webContents.openDevTools()

  // win.loadURL('http://localhost:4200');

    win.loadURL(`file:///${__dirname}/dist/index.html`);


  //// uncomment below to open the DevTools.
  win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })

  ipcMain.on('openTournamentTable', () => {
    wintwo.show();
  })

  wintwo.on('close', function (event) {
    wintwo.hide();
    event.preventDefault();
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
