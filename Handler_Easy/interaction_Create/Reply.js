const wait = require('node:timers/promises').setTimeout;
const config = require("../../config/config.json")
const db = require('pro.db')
let lang = config.config_bot.lang
const tax = require("probot-tax");

module.exports = async (client) => {

    client.on('interactionCreate', async interaction => {
		if (!interaction.isChatInputCommand()) return;
		const { commandName } = interaction;
        
        await interaction.deferReply();
        await wait(config.time.timer);

	
		if (commandName === 'ping') {
            await interaction.followUp({content : `> 🏓 **Ping: \`${client.ws.ping}ws\`**`});
		}
        
        if(commandName === "say"){
            let input = interaction.options.getString('input')
            return interaction.editReply({content : `> 🟢 **Done set [say] this => [\`${input}\`]**`})
          
            return interaction.channel.send({content : `${input}`})
        }
        
        if(commandName === "tax"){
            let input = interaction.options.getString('input')
          var _0x9a49=["\x4B","\x30\x30\x30","\x72\x65\x70\x6C\x61\x63\x65","\x4D","\x30\x30\x30\x30\x30\x30","\x6D","\x6B"];let args2=input[_0x9a49[2]](_0x9a49[6],_0x9a49[1])[_0x9a49[2]](_0x9a49[5],_0x9a49[4])[_0x9a49[2]](_0x9a49[3],_0x9a49[4])[_0x9a49[2]](_0x9a49[0],_0x9a49[1])
          let tAx = Math.floor(args2 * (20) / (19) + (1))
            return interaction.followUp({content : `${tAx}`})
        }

      if(commandName == "come"){
        let user = interaction.options.getUser('user')
        user.send({content: `DONE`})
      }
	});
    
}