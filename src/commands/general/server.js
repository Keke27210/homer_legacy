const Command = require('../../structures/Command');
const { RichEmbed } = require('discord.js');
const status = {
  online: 0,
  
}

class ServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'server',
      aliases: ['guild', 'serverinfo'],
      category: 'general',
    });
  }

  async execute(context) {
    const guild = context.message.guild;
    console.log('debug 30')
    const guildOwner = guild.owner ? guild.owner.user : await this.client.fetchUser(guild.ownerID);
    console.log('debug 32')
    const defaultMessageNotification = await this.client.rest.makeRequest('get', `/guilds/${context.message.guild.id}`, true).then(a => a.default_message_notifications);
    console.log('debug 34')
    const channels = [
      `**${context.message.guild.channels.filter(c => c.type === 'text').size}** ${context.__('channel.type.text')}`,
      `**${context.message.guild.channels.filter(c => c.type === 'voice').size}** ${context.__('channel.type.voice')}`,
    ].join(', ');
console.log('debug 36')
    const status = { online: 0, idle: 0, dnd: 0, offline: 0, bot: 0 };
    for (const member of guild.members.array()) {
      status[member.user.presence.status] += 1;
      if (member.user.bot) status.bot += 1;
    }

    const members = [
      `${this.client.constants.status.online} **${status.online}**`,
      `${this.client.constants.status.idle} **${status.idle}**`,
      `${this.client.constants.status.dnd} **${status.dnd}**`,
      `${this.client.constants.status.offline} **${status.offline}**`,
      `${this.client.constants.emotes.botIcon} **${status.bot}**`,
    ];
console.log('debug 38')
    const serverInformation = [
      `${this.dot} ${context.__('server.embed.id')}: **${guild.id}**${guild.features.includes('VERIFIED') ? ` ${this.client.constants.emotes.verifiedServer}` : ''}`,
      `${this.dot} ${context.__('server.embed.owner')}: **${guildOwner.username}**#${guildOwner.discriminator} (ID:${guild.ownerID})`,
      `${this.dot} ${context.__('server.embed.region')}: ${this.client.constants.regionFlags[guild.region]} **${context.__(`server.region.${guild.region}`)}**`,
      `${this.dot} ${context.__('server.embed.channels')}: ${channels}`,
      `${this.dot} ${context.__('server.embed.members')}: ${members.join(' - ')}`,
      `${this.dot} ${context.__('server.embed.verificationLevel')}: **${context.__(`server.verificationLevel.${guild.verificationLevel}`)}**`,
      `${this.dot} ${context.__('server.embed.explicitContentFilter')}: **${context.__(`server.explicitContentFilter.${guild.explicitContentFilter}`)}**`,
      `${this.dot} ${context.__('server.embed.defaultMessageNotifications')}: **${context.__(`server.defaultMessageNotifications.${defaultMessageNotification}`)}**`,
      `${this.dot} ${context.__('server.embed.creation')}: **${context.formatDate(guild.createdTimestamp)}**`,
    ].join('\n');
console.log('debug 40')
    const embed = new RichEmbed()
      .setDescription(serverInformation)
      .setThumbnail(guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}` : undefined)
      .setImage(guild.splash ? `https://cdn.discordapp.com/splashes/${invite.guild.id}/${invite.guild.splash}.png?size=512` : undefined);
console.log('debug 42')
    context.reply(
      context.__('server.title', {
        name: guild.name,
      }),
      { embed },
    ).then(() => console.log('debug 44'));
  }

  getDefaultAvatar(discriminator) {
    const defaultAvatarID = discriminator % 5;
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarID}.png`;
  }
}

module.exports = ServerCommand;
