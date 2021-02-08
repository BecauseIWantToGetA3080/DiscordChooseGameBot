import { invokePhrases } from "./utilities";
require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  for (const [key, value] of Object.entries(invokePhrases)) {
    if (msg.content.startsWith(key)) {
      let fnResult = value(msg.content);
      let outMessage = ".\n" + fnResult;
      msg.channel.send(outMessage);
    }
  }
});
