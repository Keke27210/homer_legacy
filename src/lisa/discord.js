const moment = require('moment-timezone');
const { MessageEmbed } = require('discord.js');
const { deconstruct } = require('../../node_modules/discord.js/src/util/Snowflake');
const Method = require('../structures/Method');

module.exports = [
  // user
  new Method(
    'user',
    (env) => env.user.username,
  ),

  // nick
  new Method(
    'nick',
    (env) => ((env.member && env.member.nickname) ? env.member.nickname : env.user.username),
  ),

  new Method(
    'discrim',
    (env) => env.user.discriminator,
  ),

  // avatar
  new Method(
    'avatar',
    (env) => (env.user.avatar ? `https://cdn.discordapp.com/avatars/${env.user.id}/${env.user.avatar}.png` : this.getDefaultAvatar(env.user.discriminator)),
  ),

  // bot
  new Method(
    'bot',
    (env) => String(env.user.bot),
  ),

  // creation
  new Method(
    'creation',
    null,
    (_, params) => deconstruct(params[0]).timestamp.toString(),
  ),

  // userid
  new Method(
    'userid',
    (env) => env.user.id,
  ),

  // game
  new Method(
    'game',
    (env) => (env.user.presence.activities.length ? env.user.presence.activities[0].name : ''),
  ),

  // status
  new Method(
    'status',
    (env) => env.user.presence.status,
  ),

  // atuser
  new Method(
    'atuser',
    (env) => `<@${(env.member && env.member.nickname) ? '!' : ''}${env.user.id}>`,
  ),

  // server
  new Method(
    'server',
    (env) => (env.guild ? env.guild.name : ''),
  ),

  // serverid
  new Method(
    'serverid',
    (env) => (env.guild ? env.guild.id : ''),
  ),

  // servercount
  new Method(
    'servercount',
    (env) => (env.guild ? env.guild.memberCount.toString() : ''),
  ),

  // servericon
  new Method(
    'servericon',
    (env) => {
      if (!env.guild) return null;
      return (env.guild.icon ? `https://discordapp.com/icons/${env.guild.id}/${env.guild.icon}.png` : 'NO_ICON');
    },
  ),

  // channel
  new Method(
    'channel',
    (env) => (env.guild ? env.channel.name : 'DM'),
  ),

  // channelid
  new Method(
    'channelid',
    (env) => env.channel.id,
  ),

  // randuser
  new Method(
    'randuser',
    (env) => (env.guild ? env.guild.members.random().user.username : null),
  ),

  // randonline
  new Method(
    'randonline',
    (env) => (env.guild ? env.guild.members.filter((m) => m.user.presence.status === 'online').random().user.username : null),
  ),

  // randchannel
  new Method(
    'randchannel',
    (env) => (env.guild ? env.guild.channels.random().name : null),
  ),

  // presencecount
  new Method(
    'presencecount',
    (env) => (env.guild ? env.guild.members.filter((m) => m.user.presence.status !== 'offline').size.toString() : ''),
    (env, params) => {
      if (!env.guild || !params[0]) return null;
      return env.guild.members
        .filter((m) => m.user.presence.status === params[0].toLowerCase())
        .size.toString();
    },
  ),

  // attachment
  new Method(
    'attachment',
    null,
    (env, params) => env.attachments[parseInt(params[0], 10)] || '',
  ),

  // attachments
  new Method(
    'attachments',
    (env) => JSON.stringify(env.attachments),
    null,
  ),

  // embed
  new Method(
    'embed',
    null,
    (env, params) => {
      const json = params.join('|');
      try {
        JSON.parse(json); // test JSON validity
        return `|||[|||${env.embedCode}:${json}|||]|||`;
      // eslint-disable-next-line no-empty
      } catch {}

      const embed = new MessageEmbed();

      // Title
      const title = params.find((p) => p.startsWith('title:'));
      if (title && title.length < 262) embed.setTitle(title.substring(6));

      // Description
      const description = params.find((p) => p.startsWith('desc:'));
      if (description && description.length < 2053) embed.setDescription(description.substring(5));

      // Fields
      const fields = params.filter((p) => p.startsWith('field:'));
      fields.forEach((field) => {
        const [name, value, inline] = field.substring(6).split('§');
        if (!value || name.length > 256 || value.length > 1024) return;
        embed.addField(name, value, (inline === 'true'));
      });

      // Image
      const image = params.find((p) => p.startsWith('image:'));
      if (image) embed.setImage(image.substring(6));

      // Thumbnail
      const thumbnail = params.find((p) => p.startsWith('thumb:'));
      if (thumbnail) embed.setThumbnail(thumbnail.substring(6));

      // URL
      const url = params.find((p) => p.startsWith('url:'));
      if (url) embed.setURL(url.substring(4));

      // Color
      const color = params.find((p) => p.startsWith('color:'));
      if (color) embed.setColor(color.substring(6).toUpperCase());

      // Footer
      const footer = params.find((p) => p.startsWith('footer:'));
      if (footer) {
        const [text, icon] = footer.substring(7).split('§');
        if (text && text.length < 2048) embed.setFooter(text, icon);
      }

      // Author
      const author = params.find((p) => p.startsWith('author:'));
      if (author) {
        const [text, icon] = author.substring(7).split('§');
        if (text && text.length < 256) embed.setAuthor(text, icon);
      }

      // Timestamp
      const timestamp = params.find((p) => p.startsWith('timestamp:'));
      if (timestamp) {
        let time;

        const number = Number(timestamp);
        if (Number.isNaN(number)) time = moment(timestamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ', false).toISOString();
        else time = moment(number).toISOString();

        if (!time) time = moment().toISOString();
        embed.setTimestamp(time);
      }

      return `|||[|||${env.embedCode}:${JSON.stringify(embed)}|||]|||`;
    },
  ),
];
