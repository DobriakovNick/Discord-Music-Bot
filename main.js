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
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./source/loader');

require('./source/events');

client.login(client.config.app.token);