const Command = require('../../../Core/Structures/Command');

class Clear extends Command {
  constructor(client) {
    super(client, {
      name: 'clear',
      aliases: ['clean', 'delete'],
      userPermissions: ['MANAGE_MESSAGES'],
      botPermissions: ['MANAGE_MESSAGES'],
      category: 5,
    });
  }

  get cleanPattern() {
    return /(\d{1,3}|bots|files|links|\d{17,19}|<@!?\d{17,19}>|".*"|`.*`)( .*)?/g;
  }

  async run(ctx) {
    if (ctx.args.length === 0) return ctx.channel.send(ctx.__('clear.error.nothing', {
      errorIcon: this.client.constants.statusEmotes.error,
    }));

    const patternResults = this.cleanPattern.exec(ctx.args);
    if (!patternResults) return ctx.channel.send(ctx.__('clear.error.invalidArgs', {
      errorIcon: this.client.constants.statusEmotes.error,
    }));

    const reason = patternResults[2] ? patternResults[2].slice(1) : ctx.__('moderation.common.noReason');

    const fetchedMessages = await ctx.channel.fetchMessages({ limit: 100 });
    let filteredMessages = null;
  
    if (!isNaN(patternResults[1]) && patternResults[1] > 1 && patternResults[1] < 101) {
      filteredMessages = fetchedMessages.first(Number(patternResults[1]) + 1);
    } else {
      const filter = (message) => {
        switch (patternResults[1]) {
          case 'bots':
            return message.author.bot;
            break;
          case 'files':
            return message.attachments.size > 0;
            break;
          case 'links':
            return message.content.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
            break;
          case ((!isNaN(patternResults[1])) && patternResults[1].length >= 17):
            return message.author.id === patternResults[1];
            break;
          case (patternResults[1].startsWith('<@') && patternResults[1].endsWith('>')):
            const id = patternResults[1].replace('<@!', '').replace('<@', '').replace('>', '');
            return message.author.id === id;
            break;
          case (patternResults[1].startsWith('"') && patternResults[1].endsWith('"')):
            return message.content.includes(patternResults[1].slice(1, patternResults[1].length - 1));
            break;
          case (patternResults[1].startsWith('`') && patternResults[1].endsWith('`')):
            return message.content.match(new RegExp(patternResults[1].slice(1, patternResults[1].length - 1)));
            break;
        }
      };

      filteredMessages = fetchedMessages.filter(filter);
    }

    if (filteredMessages.size === 0) return ctx.channel.send(ctx.__('clear.error.noMessage', {
      errorIcon: this.client.constants.statusEmotes.error,
    }));

    const deletedMessages = await ctx.channel.bulkDelete(filteredMessages, true);
    this.client.moderation.registerCase(ctx.guild.id, 5, ctx.author.id, ctx.channel.id, reason, {
      count: deletedMessages.size,
      criteria: patternResults[1],
    });
    ctx.channel.send(ctx.__('clear.success', {
      successIcon: this.client.constants.statusEmotes.success,
      count: deletedMessages.size,
      criteria: patternResults[1],
    }));
  }
}

module.exports = Clear;
