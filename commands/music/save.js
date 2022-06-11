module.exports = {
    name: 'save',

    aliases: ['sv'],

    utilisation: '{pref}save',

    voiceChannel: true,


    async execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}.. Спробуйте ще раз.. `);

            message.author.send(`Ви зберегли ${queue.current.title} | ${queue.current.author} з сервера ${message.guild.name} `).then(() => {
            
            message.channel.send(`I have sent you the title of the music by private messages `);

        }).catch(error => {

            message.channel.send(`Unable to send you a private message ${message.author}... try again ? `);
        });
    },
};