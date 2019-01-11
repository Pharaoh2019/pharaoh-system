const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
     if (message.content === "%help") {
message.channel.sendMessage("**اوامر البوت**" + `  **
『League | League <3』 『League』
true
『مصمم البوت ℳ𝒜ℰ𝒮𝒯ℛ𝒪♕💎♕ ᵖʰᵃʳᵃᵒʰˢ#0447』
true
『%help^』:kissing_heart:『اذا تبي جميع الاوامر مع اوامر اضافية』:dizzy_face:
true
『%ping^^』:ghost:『اذا تريد معرفة سرعة نتك』:flushed:
true
『%id^^^』:open_mouth:『اذا تريد معرفة  ايدي』:thermometer_face:
true
『%added^^^』:open_mouth:『لمعرفة كام شخص قمت بدعوته』:thermometer_face:
『%لوخيروك^^^』^^^』:open_mouth:『للالعاب』:thermometer_face:
true
『%pubg^^^』^^^』:open_mouth:『للالعاب』:thermometer_face:
true
『%image^^^』:open_mouth:『لمعرفة صورة السيرفر』:thermometer_face:
『:%server:』『لمعرفة معلومات سيرفر  』『:wink:』
true
『:money_mouth:』『قريبا سوف نضيف المزيد و المزيد من الاوامر 』『:wink:』
true
**`);
    }
});
