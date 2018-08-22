const TelegramBot = require('node-telegram-bot-api');

const TOKKEN = '607358569:AAG5B4UN08H3Sqkjw0HhVIOnYO4JGFdZl5g';

const bot = new TelegramBot(TOKKEN,{polling:true});

bot.on('message',msg=>{
    if (msg.text=="/start") {
        bot.sendMessage(msg.chat.id,'Привет '+msg.from.first_name);
    }
    if (msg.text=="/finish") {
        bot.sendMessage(msg.chat.id,'Пока');
    }
});
