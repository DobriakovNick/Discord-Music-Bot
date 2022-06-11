module.exports = {
    app: {
        px: '!', //Используемый префикс 
        token: 'OTg0Mzc1MzIyMjk0MjU1Njc3.GJ6EBD.gfQO_7-a7CU1kKGrYId-D8hADHaFwXTBsTanqc', //Токен бота
        playing: 'Play'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume'] //Лист команд
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
