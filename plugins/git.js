const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wdYhaBH.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*LILLY_MWOLE CREATED BY CARLOX_MASS-SER*
*Creator number : http://wa.me/918078073223?text=Hi%20Mass%20Ser.%20*

*CARLOX INSTAGRAM : https://instagram.com/__.carlox.__?utm_medium=copy_link

*MASS INSTAGRAM  :    https://instagram.com/mass.ff?utm_medium=copy_link

*Githublink (Setup)  :    https://github.com/Carlox-ser-mass-ser/Lilly-mwol*

*LILLY MWOLE IS HERE .UPDATE=FOR CHECK UPDATES*

*For More Updates follow carlox & mass in instagram*
`}) 

}));
