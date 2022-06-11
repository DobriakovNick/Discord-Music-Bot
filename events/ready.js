module.exports = async (client) => {
    
    console.log(`Під'єднався до ${client.user.username}\n-> Дієвий для ${client.guilds.cache.size} серверів з ${client.users.cache.size} користувачами`);

    client.user.setActivity(client.config.app.playing);
};