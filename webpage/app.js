const { ipcRenderer } = require("electron");

class App {
  constructor() {
    console.log("LOG depuis page html");
    this.initListeners();
  }

  initListeners() {
    ipcRenderer.on("DiscordBot", (event, message) => {
      console.log(message);
    });
  }
}

window.onLoad = () => {
  new App();
};
