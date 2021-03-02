const { app, BrowserWindow } = require("electron");
const DISCORD_TOKEN =
  "your api key";

// let win = null;
// app.on("activate", () => {
//   if (!BrowserWindow.getAllWindows().length) {
//     // createWindow();
//   }
// });

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  win.loadFile("webpage/index.html");
  // win.setFullScreen(true);
  // win.maximize();
  return win;
}

function initBot(token, win) {
  const { DiscordBot } = require("./DiscordBot");
  new DiscordBot(token, win);
}

app.whenReady().then(() => {
  const win = createWindow();
  initBot(DISCORD_TOKEN, win);
});
