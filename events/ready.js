module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Дієвий для ${client.guilds.cache.size} серверів з ${client.users.cache.size} користувачами`);

    client.user.setActivity(client.config.app.playing);
};