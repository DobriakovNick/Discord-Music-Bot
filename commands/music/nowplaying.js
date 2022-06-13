const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {

    name: 'nowplaying',

    aliases: ['np'],

    utilisation: '{pref}nowplaying',

    voiceChannel: true,

    execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}.. Спробуйте ще раз.. `);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');

        embed.setThumbnail(track.thumbnail);

        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();

        const trackDuration = timestamp.progress == 'Нескінченність' ? 'Прямой ефір' : track.duration;

        embed.setDescription(`Гучність **${queue.volume}**%\nТривалість **${trackDuration}**\nЗациклованість **${methods[queue.repeatMode]}**\nДодана ${track.requestedBy}`);

        embed.setTimestamp();

        embed.setFooter('Працює не чіпай', message.author.avatarURL({ dynamic: true }));

        const saveButton = new MessageButton();

        saveButton.setLabel('Зберегти цей трек');

        saveButton.setCustomId('saveTrack');

        saveButton.setStyle('SUCCESS');
        

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};