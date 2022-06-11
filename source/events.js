player.on('error', (queue, error) => {
    
    console.log(`Помилка  черги ${error.message}`);
});

player.on('connectionError', (queue, error) => {
   
    console.log(`Помилка з’єднання ${error.message}`);
});

player.on('trackStart', (queue, track) => {
   
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    
    queue.metadata.send(`Починаю грати ${track.title} в **${queue.connection.channel.name}** `);
});

player.on('trackAdd', (queue, track) => {
    
    queue.metadata.send(`Доріжку ${track.title} додано в чергу`);
});

player.on('botDisconnect', (queue) => {
   
    queue.metadata.send('Мене вручну відключили від голосового каналу, очищаю чергу.. ');
});

player.on('channelEmpty', (queue) => {
    
    queue.metadata.send('У голосовому каналі нікого немає, залишаю голосовий канал... ');
});

player.on('queueEnd', (queue) => {
    
    queue.metadata.send('Я закінчив програвати всю чергу');
});