module.exports = (client, int) => {

    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {

        case 'saveTrack': {

            if (!queue || !queue.playing) return int.reply({ content: `Жодгої музики зараз не грає.  `, ephemeral: true, components: [] });

            int.member.send(`Ви зберегли музику ${queue.current.title} | ${queue.current.author} з сервера ${int.member.guild.name} `).then(() => {
                
                return int.reply({ content: `Я надіслав Вам назву музики в особисті повідомлення`, ephemeral: true, components: [] });
            
            }).catch(error => {
                
                return int.reply({ content: `Не вдається надіслати Вам приватне повідомлення.`, ephemeral: true, components: [] });
            });
        }
    }
};