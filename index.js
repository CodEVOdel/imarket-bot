const TelegramBot = require('node-telegram-bot-api');

const TOKKEN = '659086755:AAGcmbR58dLvUQplYvCczJ-ZWG4jpxXRJOM';

const bot = new TelegramBot(TOKKEN,{polling:true});

const optional = {
    parse_mode : "markdown",
    disable_web_page_preview:false,
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text:'Телефон',callback_data:'ph'},
            {text:'Умные часы',callback_data:'sw'}]
        ]
    })
};


bot.on('message',msg=>{
    if (msg.text=="sw") {
        bot.sendMessage(msg.chat.id,'Привет '+msg.from.first_name);
    }
    if (msg.text=="ph") {
        bot.sendMessage(msg.chat.id,'Пока'+msg.from.first_name);
    }
    if (msg.text=="/btm") {
        bot.sendMessage(msg.chat.id,'Кнопка',optional);
    }
});
