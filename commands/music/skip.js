module.exports = {
    name: 'skip',

    aliases: ['sk'],

    utilisation: '{pref}skip',

    voiceChannel: true,

    execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодного трека зараз не грає ${message.author}. `);

        const success = queue.skip();

        return message.channel.send(success ? `Поточна музика була пропущена  ${queue.current.title}  ` : `Щось трапилось не так ${message.author}. `);
    },
};