const { Client,GatewayIntentBits} =require ('discord.js')
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


var _0x2114=["\x70\x72\x65\x66\x69\x78","\x64\x61\x74\x61\x5F\x72\x75\x6E\x5F\x62\x6F\x74","\x0D\x0A\x2D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x2D\x0D\x0A\x2D\x3D\x20\x50\x6C\x65\x61\x73\x65\x20\x41\x64\x64\x20\x54\x6F\x6B\x65\x6E\x20\x42\x6F\x74\x20\x3D\x2D\x0D\x0A\x2D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x2D\x0D\x0A\x2D\x3D\x20\x44\x61\x72\x6B\x5F\x4D\x61\x73\x74\x65\x72\x20\x54\x48\x58\x20\x46\x6F\x72\x6B\x20\x3D\x2D\x0D\x0A\x2D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x2D\x0D\x0A\x2D\x3D\x20\x44\x6F\x6E\x27\x74\x20\x52\x75\x6E\x20\x4E\x6F\x77\x20\x28\x29\x20\x45\x52\x52\x20\x3D\x2D\x0D\x0A\x2D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x2D\x0D\x0A\x20\x20\x20\x20","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x6C\x6F\x67\x69\x6E"];const prefix=config[_0x2114[1]][_0x2114[0]];client[_0x2114[7]](process[_0x2114[6]][_0x2114[5]])[_0x2114[4]]((_0x50c4x2)=>{console[_0x2114[3]](`${_0x2114[2]}`)})




/* { File Handler i Create Files four Create any File And Add Code For Commands ( Started ) } */
var _0x456d=["\x2E\x2F\x48\x61\x6E\x64\x6C\x65\x72\x5F\x45\x61\x73\x79\x2F\x72\x75\x6E\x2F\x52\x65\x61\x64\x79","\x2E\x2F\x48\x61\x6E\x64\x6C\x65\x72\x5F\x45\x61\x73\x79\x2F\x72\x75\x6E\x2F\x65\x78\x70\x72\x65\x73\x73","\x2E\x2F\x48\x61\x6E\x64\x6C\x65\x72\x5F\x45\x61\x73\x79\x2F\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x6F\x6E\x5F\x43\x72\x65\x61\x74\x65\x2F\x52\x65\x70\x6C\x79"];require(_0x456d[0])(client);require(_0x456d[1])(client);require(_0x456d[2])(client)

/* { Command Public ( Slash Command ) - END } */








