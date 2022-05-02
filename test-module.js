const { MessageCommandBuilder, InteractionCommandBuilder } = require('reciple');

module.exports = {
    versions: ['1.0.19'],
    commands: [
        new MessageCommandBuilder()
            .setName('ping')
            .setDescription('Pong!')
            .setExecute(async command => command.message.reply('Pong!')),
        new InteractionCommandBuilder()
            .setName('ping')
            .setDescription('Pong!')
            .setExecute(async command => command.interaction.reply('Pong!'))
    ],
    onStart(client) {
        client.logger.info('Started!');
        return true;
    }
};