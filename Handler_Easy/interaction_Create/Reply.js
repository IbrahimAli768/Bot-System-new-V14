const wait = require('node:timers/promises').setTimeout;
const config = require("../../config/config.json")
const db = require('pro.db')
let lang = config.config_bot.lang
const tax = require("probot-tax");

module.exports = async (client) => {

    client.on('interactionCreate', async interaction => {
		if (!interaction.isChatInputCommand()) return;
		const { commandName } = interaction;
        
      /*  await interaction.deferReply();
        await wait(config.time.timer);*/

	
		if (commandName === 'ping') {
            await interaction.reply({content : `> 🏓 **Ping: \`${client.ws.ping}ws\`**`});
		}
        
        if(commandName === "say"){
            let input = interaction.options.getString('input')
            
            return interaction.channel.send({content : `${input}`})
        }
        
        if(commandName === "tax"){
            let input = interaction.options.getString('input')
            if(isNaN(input)) return interaction.reply({content : `> **Please type Number Don't [\`${input}\`]**`})
               let tAx = tax.taxs(input)
            return interaction.reply({content : `${tAx}`})
        }
	});
    
}