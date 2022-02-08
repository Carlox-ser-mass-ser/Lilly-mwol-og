const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://github.com/Carlox-ser-mass-ser/Lilly-mwol", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Lilly_Mwole created by mass_ser & carlox*
*Creator number : CARLOX= wa.me/917356835535.MASS-SER wa.me/918078073223 =?text=Hi%20LILLY%20MWOL.%20*

*MASS-SER INSTAGRAM :-https://instagram.com/mass.ff?utm_medium=copy_link*

*CARLOX INSTAGRAM :-https://instagram.com/__.carlox.__?utm_medium=copy_link*

*Githublink (Setup)  : https://github.com/Carlox-ser-mass-ser/Lilly-mwol*

LILLY MWOLE IS ..........

*For More Updates FOLLOW OUR IN INSTAGRAM *
`}) 

}));
