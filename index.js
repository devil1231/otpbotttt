const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather.
const bot = new TelegramBot('6615004526:AAHcFqT_JgptHp1GICLeKHLK4dlj7vDWEGo', { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /start command with a welcome message
  const welcomeMessage = 
👋Hello! Welcome To Venom OTP Bot🙌


😈 》 Please Contact Owner To Buy Subscription Of this Bot - @King_9279 

🔐 》 One Day Key Price -   20$

🔐 》 One Week Key Price -  70$

🔐 》 One Month Key Price - 180$

🔐 》 LifeTime Key Price -  300$

👉 》 Click On Help Command To see all Commands - /help

❣️ 》 24/7 Coustomer Support


💯 》 If Anyone Want Code of this Bot DM - @King_9279

🙏 》 Join Our Group  -  @Venom_Otp_Bot_Chat 

❣️ 》 Join Our Channel - @Venom_OTP_Bot09
  ;

  bot.sendMessage(chatId, welcomeMessage);
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /help command with help information
  const helpMessage = 
  MADOTP

👤 User Commands

🔐 》 /redeem - Redeem Key To Receive Your Subscription
⏰ 》 /checktime - (Check Subscription Remaining Time)

☎️ Call Commands

📲 》 /call - Any code Ex: Paypal, Venmo, Coinbase, Cashapp
💳 》 /cvv - Capture cvv code from any credit card
💰 》 /crypto - Capture ANY OTP code with advanced crypto script.
📦 》 /amazon - Get a victim to approve a amazon approval link.
📨 》 /email - Get victim to readout ANY OTP Code.
💬 》 /remind - Sends a SMS to remind victim to pick up.
🏦 》 /bank - Capture bank OTP code.

✨ Custom Commands

🔐 》 /createscript - Create a script with 3 parts!
🔐 》 /script - Returns what the script is
🔐 》 /customcall - Just like /call but with your script.
🔐 》 /customvoice - Set your language just like /customcall.

  ;

  bot.sendMessage(chatId, helpMessage);
});

bot.onText(/\/call/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});

bot.onText(/\/cvv/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});



bot.onText(/\/crypto/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});


bot.onText(/\/amazon/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});


bot.onText(/\/email/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});


bot.onText(/\/remind/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});

bot.onText(/\/bank/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});

bot.onText(/\/createscript/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});

bot.onText(/\/script/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});

bot.onText(/\/customcall/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});


bot.onText(/\/customvoice/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, '🛒 Buy bot here - @King_9279');
});


bot.onText(/\/redeem/, (msg) => {
  const chatId = msg.chat.id;

  // Respond to the /hello command
  bot.sendMessage(chatId, 'invalid reddem code \n MADOTP-XX-XX-XXX \n enter this formate');
});
