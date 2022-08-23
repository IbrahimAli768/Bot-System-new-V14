const { Client,GatewayIntentBits} =require ('discord.js')
require("events").EventEmitter.defaultMaxListeners = 999999999;
//const db = require('pro.db')
require("dotenv").config()
const config = require("./config/config.json")
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
	GatewayIntentBits.DirectMessageTyping,
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.GuildIntegrations

]})

const prefix = config.data_run_bot.prefix
client.login(process.env.token).catch(err=>{
    console.log(`
-========================-
-= Please Add Token Bot =-
-========================-
-= Dark_Master THX Fork =-
-========================-
-= Don't Run Now () ERR =-
-========================-
    `)
})




/* { File Handler i Create Files four Create any File And Add Code For Commands ( Started ) } */
require("./Handler_Easy/run/Ready")(client);
require("./Handler_Easy/run/express")(client);
/* { File Handler i Create Files four Create any File And Add Code For Commands ( End ) } */

/* { Command Public ( Slash Command ) - Started } */
require("./Handler_Easy/interaction_Create/Reply")(client);

/* { Command Public ( Slash Command ) - END } */








