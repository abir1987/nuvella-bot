const TelegramBot = require("node-telegram-bot-api");

// Your Bot Token here
const token = "8267372192:AAEKv_ajn7JHouNcNVWp6WNWrRjQ5NR4tQY";
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 NUVELLA TECHNOLOGY Bot is running...");

// /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const welcomeMessage =
    "🌟 Welcome to *NUVELLA TECHNOLOGY* 🌟\n\n" +
    "We provide modern software solutions and digital services.\n" +
    "Thank you for visiting us! 🚀\n\n" +
    "👉 You can contact us anytime at:\n" +
    "📧 *nuvella.kolkata@gmail.com*\n" +
    "📞 9804024746";

  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  bot.sendMessage(chatId, welcomeMessage, { parse_mode: "Markdown" });
  bot.sendAudio(chatId, musicUrl, {
    caption: "🎶 A warm welcome tune from NUVELLA TECHNOLOGY",
  });
});

// Any other message
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text !== "/start") {
    bot.sendMessage(
      chatId,
      "🙏 Thank you for contacting *NUVELLA TECHNOLOGY*.\n\nWe will reach out to you very soon.\nMeanwhile, you can also email us at: 📧 nuvella.kolkata@gmail.com",
      { parse_mode: "Markdown" }
    );
  }
});