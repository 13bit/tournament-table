var {app, BrowserWindow, ipcMain} = require('electron');
let win;
let wintwo;

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

  wintwo = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });

  /* Dev Mode */
  // win.loadURL('http://localhost:4200');
  // wintwo.loadURL('http://localhost:4200/#/main');
  // win.webContents.openDevTools()
  // wintwo.webContents.openDevTools()

  /* PROD Mode */
  win.loadURL(`file:///${__dirname}/dist/index.html`);
  wintwo.loadURL(`file:///${__dirname}/dist/index.html#/main`);


  // Event when the window is closed.
  win.on('closed', function () {
    win = null;
    wintwo = null;
  })

  ipcMain.on('openTournamentTable', () => {
    // wintwo.maximize();
    wintwo.setFullScreen(true);
    wintwo.setAutoHideMenuBar(true);
    wintwo.show();
  })

  ipcMain.on('quit', () => {
    app.quit();
  });

  wintwo.on('close', function (event) {
    wintwo = null;
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
  if (win === null || wintwo == null) {
    createWindow()
  }
})
