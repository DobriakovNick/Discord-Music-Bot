const { readdirSync } = require('fs');
const { Collection } = require('discord.js');

client.commands = new Collection();

const events = readdirSync('./події/').filter(file => file.endsWith('.js'));

console.log(`Завантаження подій ...`);

for (const file of events) {
    const event = require(`../подія/${file}`);
    console.log(`-> Завантажив події ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`../подія/${file}`)];
};

console.log(`Завантаження команд ...`);

readdirSync('./команди/').forEach(dirs => {
    const commands = readdirSync(`./команди/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`../команди/${dirs}/${file}`);
        console.log(`-> Завантажив команди ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`../команди/${dirs}/${file}`)];
    };
});