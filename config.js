module.exports = {

    app: {

        px: '!', 

        token: 'OTg0Mzc1MzIyMjk0MjU1Njc3.GJ6EBD.gfQO_7-a7CU1kKGrYId-D8hADHaFwXTBsTanqc', //Токен бота
    },

    opt: {

        DJ: {

            enabled: false,

            roleName: 'DJ',

            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume'] 
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
