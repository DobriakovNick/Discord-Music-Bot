const { MessageEmbed } = require('discord.js');

module.exports = {

    name: 'queue',

    aliases: ['q'],

    utilisation: '{pref}queue',

    voiceChannel: true,

    execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Жодної музики зараз не грає ${message.author}. `);

        if (!queue.tracks[0]) return message.channel.send(`Жодної музики в черзу після цієї немає ${message.author}. `);

        const embed = new MessageEmbed();

        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');

        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));

        embed.setAuthor(`Серверна черга - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Додана користувачем : ${track.requestedBy.username})`);

        const songs = queue.tracks.length
        ;
        const nextSongs = songs > 5 ? `І **${songs - 5}** інших пісень)...` : `І плейлисті **${songs}** пісень...`;

        embed.setDescription(`Поточна ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();

        embed.setFooter('Все починається з інтересу ', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};