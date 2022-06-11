const { QueueRepeatMode } = require('discord-player');

module.exports = {

    name: 'loop',

    aliases: ['lp', 'repeat'],

    utilisation: '{pref}loop <queue>',

    voiceChannel: true,

    execute(client, message, args) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}.`);

        if (args.join('').toLowerCase() === 'queue') {

            if (queue.repeatMode === 1) return message.channel.send(`Спочатку потрібно вимкнути поточну музику в режимі циклу (${client.config.app.px}) ${message.author}. `);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Зациклованість черги **${queue.repeatMode === 0 ? 'Вимкнена.' : 'Ввімкнена.'}**  ` : `Щось трапилось не так ${message.author}. `);
        
        } 
        
        else {
            
            if (queue.repeatMode === 2) return message.channel.send(`Спочатку потрібно вимкнути поточну музику в режимі циклу (${client.config.app.px} ${message.author}. `);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Зациклованість трека **${queue.repeatMode === 0 ? 'Вимкнена.' : 'Ввімкнена.'}** ` : `Щось трапилось не так ${message.author}. `);
        
        };

    },

};