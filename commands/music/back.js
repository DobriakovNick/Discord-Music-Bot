module.exports = {
    
    name: 'back',

    aliases: ['previous'],

    utilisation: '{pref}back',
    
    voiceChannel: true,

    async execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue.previousTracks[1]) return message.channel.send(`Музика ще не грала ${message.author}.. Спробуйте ще раз.. `);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}.. Спробуйте ще раз.. `);

        await queue.back();

        message.channel.send(`Відтворення попереднього треку.. `);
        
    },

};