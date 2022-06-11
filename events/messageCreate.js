module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const pref = client.config.app.px;

    if (message.content.indexOf(pref) !== 0) return;

    const args = message.content.slice(pref.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    const DJ = client.config.opt.DJ;
    if (cmd && cmd.voiceChannel) {
        if (!message.member.voice.channel) return message.channel.send(`Ви не в голосовому чаті, ${message.author}. `);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Ви не в тому ж самому головому чаті, що і я, ${message.author}. `);
    }

    if (cmd) cmd.execute(client, message, args);
};