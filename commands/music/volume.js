const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',

    aliases: ['vol'],

    utilisation: `{pref}volume [1-${maxVol}]`,

    voiceChannel: true,

    execute(client, message, args) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}.`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Поточна гучність ${queue.volume} 🔊\n*Щоб змінити гучність введіть число від **1** до **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Гучність на яку ви хочете змінити вже стоїть ${message.author}.    `);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Це число не підходить.  Введіть число від **1** до **${maxVol}** ${message.author}.  `);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Гучність була змінена до **${vol}**/**${maxVol}**% 🔊` : `Щось не так ${message.author}.  `);
    },
};