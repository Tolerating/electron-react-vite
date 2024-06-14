import { app, BrowserWindow, Menu } from  "electron";
const path = require("path");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = path.join(__dirname, "../dist", "index.html");
const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1300,
    height: 720,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  Menu.setApplicationMenu(null);
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(url as string);
    // 打开控制台
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }
};
// 创建窗口
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 关闭窗口
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
