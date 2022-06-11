module.exports = {
    name: 'save',

    aliases: ['sv'],

    utilisation: '{pref}save',

    voiceChannel: true,


    async execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодного трека зараз не грає, ${message.author}. `);

            message.author.send(`Ви зберегли ${queue.current.title} | ${queue.current.author} з сервера ${message.guild.name} `).then(() => {
            
            message.channel.send(`Я відправив Вам назву треку. `);

        }).catch(error => {

            message.channel.send(`Не можу відправити Вам повідомлення, ${message.author}. `);
        });
    },
};