const ms = require('ms');

module.exports = {

    name: 'ping_pong',

    aliases: [],

    utilisation: '{pref}ping_pong',
    
    execute(client, message) {

        message.channel.send(`Затримка${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}, пінг **${client.ws.ping}мс** `);
    },
};

