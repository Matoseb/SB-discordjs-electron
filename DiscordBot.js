const { Client } = require("discord.js");

function delay(millis = 0) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

class DiscordBot {
  constructor(token, win) {
    this.win = win;
    this.winLog("Bot Start");

    this.client = new Client();
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    this.client.login(token);
  }

  winLog(msg) {
    console.log(msg);
    this.win.webContents.send("DiscordBot", msg);
  }

  onMessage(message) {
    if (message.content.startsWith("run")) {
      this.winLog(message.content);
      this.runChat(message);
    }
  }

  async runChat(msg) {
    await delay(2000);
    this.firstBot(msg, "hello");

    await delay(2000);
    this.secondBot(msg, "hey");

    await delay(2000);
    this.firstBot(msg, "you suck");

    await delay(4000);
    this.secondBot(msg, "ok");

    await delay(2000);
    this.firstBot(msg, "bye");

    await delay(2000);
    this.secondBot(msg, "bye");
  }

  firstBot(msgObject, description, options = {}) {
    const embed = {
      color: 0x0099ff,
      description,
      ...options,
    };

    this.sendEmbed(msgObject, embed);
  }

  secondBot(msgObject, description, options = {}) {
    const embed = {
      color: 0xff00ff,
      description,
      ...options,
    };

    this.sendEmbed(msgObject, embed);
  }

  sendEmbed(message, embed = {}) {
    message.channel.send({ embed });
  }

  onReady() {
    this.winLog("ready");
  }
}

module.exports = { DiscordBot };
