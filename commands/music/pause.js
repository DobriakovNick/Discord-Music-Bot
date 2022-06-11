module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{pref}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Жодної музики зараз не грає ${message.author}.. Спробуйте ще раз.. `);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Current music ${queue.current.title} paused ` : `Something went wrong ${message.author}... try again ? `);
    },
};