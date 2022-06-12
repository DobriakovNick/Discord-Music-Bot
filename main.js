const { Player } = require('discord-player');

const { Client, Intents } = require('discord.js');

const port = process.env.PORT || 7001;

global.client = new Client({
    
    intents: [

        Intents.FLAGS.GUILDS,

        Intents.FLAGS.GUILD_MEMBERS,

        Intents.FLAGS.GUILD_MESSAGES,

        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})
const mongoose =   require('mongoose')
require('dotenv').config()
client.on('ready', async() =>{

    console.log('Клієнт готовий!')
    
    await mongoose.createConnection ()
       process.env.MONGO_URI,
       {keepAlive: true},
       console.log ('Під`єднано до MongoDb')
    })
client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./source/loader');

require('./source/events');

client.login(client.config.app.token);