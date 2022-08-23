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
          let args2 = input.replace("k", "000").replace("m", "000000").replace('M', "000000").replace('K', "000")
          let tAx = Math.floor(args2 * (20) / (19) + (1))
            return interaction.followUp({content : `${tAx}`})
        }
	});
    
}