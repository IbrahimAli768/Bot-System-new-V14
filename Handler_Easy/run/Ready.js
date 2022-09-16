const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require("../../config/config.json")

let BOT = config.config_bot.ID_BOT
let SERVERID = config.config_bot.ID_SERVER_RUN_SLASHCOAMMND
let DEV = config.data_run_bot.dev

module.exports = async (client) =>{
    client.on('ready', () =>{
        console.log(`
    -======================================-
    -= I Ready Now ( ${client.user.tag} ) =-
    -======================================-
    -= Guilds: ${client.guilds.cache.size} =-
    -======================================- 
    -======================================-
    -= Developer: ${DEV} =-
    -======================================- 
        `)
        try{
            const rest = new REST({ version: '10' }).setToken(process.env.token);

        const commands = [
            new SlashCommandBuilder().setName('ping').setDescription("Commands [ Ping ] Ws"),
            new SlashCommandBuilder().setName('say').setDescription('Commands [ say ] trygin').addStringOption(option =>
		option.setName('input')
			.setDescription('typeing any message reply send')
			.setRequired(true)),
            
            new SlashCommandBuilder().setName('tax').setDescription('Commands [ tax ] probot').addStringOption(option =>
		option.setName('input')
			.setDescription('typeing any number ')
			.setRequired(true)),

          new SlashCommandBuilder().setName('come').setDescription('Commands [ COME ] probot').addUserOption(option =>
		option.setName('user')
			.setDescription('typeing any number ')
			.setRequired(true)),
        ]
            .map(command => command.toJSON());
          
    
    
            rest.put(Routes.applicationGuildCommands(BOT, SERVERID), { body: commands })
        .then(() => console.log('Run Applicat Now Slash Command 🟢'))
        .catch(console.error);
        }catch(err){
            console.log(err)
        }
    })
}