const { MessageEmbed } = require('discord.js');

class Command {
  constructor(client, category, commandInfo) {
    /**
     * Client that instantied this command
     * @type {DiscordClient}
     */
    this.client = client;

    /**
     * Name for the command
     * @type {string}
     */
    this.name = commandInfo.name;

    /**
     * Aliases for the command
     * @type {string[]}
     */
    this.aliases = commandInfo.aliases || [];

    /**
     * Category of the command
     * @type {string}
     */
    this.category = category;

    /**
     * Children for this command
     * @type {Command[]}
     */
    this.children = commandInfo.children || [];

    /**
     * User permissions required to run the command
     * @type {string[]}
     */
    this.userPermissions = commandInfo.userPermissions || [];

    /**
     * Bot permissions required to run the command
     * @type {string[]}
     */
    this.botPermissions = commandInfo.botPermissions
      ? this.client.commandManager.basePermissions.concat(commandInfo.botPermissions)
      : this.client.commandManager.basePermissions;

    /**
     * Whether this command is private
     * @type {boolean}
     */
    this.private = commandInfo.private || false;

    /**
     * Whether the command can be ran in a DM environment
     * @type {boolean}
     */
    this.dm = commandInfo.dm || false;
  }

  /**
   * Whether this command category requires a working database
   * @type {boolean}
   */
  get databaseRequired() {
    return ['radio', 'settings', 'telephone'].includes(this.category) || this.name === 'tag';
  }

  /**
   * Performs the required checks then performs the command
   * @param {Message} message Message that triggered the command
   */
  async run(message, args, parent = []) {
    parent.push(this.name);

    const children = args[0];
    if (children) {
      const subcommand = this.children
        .find((c) => c.name === children || c.aliases.includes(children));
      if (subcommand) {
        args.shift();
        subcommand.run(message, args, parent);
        return;
      }
    }

    if (!this.client.constants.owners.includes(message.author.id)) {
      this.client.logUtil.log(
        'commandLog',
        `⌨️ ${message.author.tag} (${message.author.id}) has ran command \`${parent.join(' ')}\`${message.guild ? ` on guild **${message.guild.name}** (${message.guild.id})` : ' in **Direct Messages**'}.`,
      );
    }

    if (this.private && !this.client.constants.owners.includes(message.author.id)) return;

    if (!message.guild && !this.dm) {
      message.error(message._('command.noDm'));
      return;
    }

    if (message.guild) {
      if (message.channel.topic && !this.canRun(message.channel.topic, parent.join(' '))) {
        message.error(message._('command.override'));
        return;
      }

      const missingUser = message.channel
        .permissionsFor(message.author)
        .missing(this.userPermissions);
      if (missingUser.length) {
        message.warn(message._('command.userPermissions', missingUser.map((p) => `\`${p}\``).join(', ')));
        return;
      }

      const missingBot = message.channel
        .permissionsFor(this.client.user)
        .missing(this.botPermissions);
      if (missingBot.length) {
        const msg = message._('command.botPermissions', missingBot.map((p) => `\`${p}\``).join(', '));
        message.warn(msg)
          .catch(() => message.author.send(msg).catch(() => null));
        return;
      }
    }

    if (children === 'help') {
      const description = [
        message._(`help.${parent.join('.')}.description`),
        '',
        `${message.dot} ${message._('help.aliases')}: ${this.aliases.map((a) => `\`${a}\``).join(', ') || message._('global.none')}`,
        `${message.dot} ${message._('help.usage')}: ${message._(`help.${parent.join('.')}.usage`) ? `\`h:${parent.join(' ')} ${message._(`help.${parent.join('.')}.usage`)}\`` : message._('global.none')}`,
        `${message.dot} ${message._('help.example')}: ${message._(`help.${parent.join('.')}.example`) ? `\`h:${parent.join(' ')} ${message._(`help.${parent.join('.')}.example`)}\`` : message._('global.none')}`,
      ];
      const embed = new MessageEmbed().setDescription(description.join('\n'));
      const child = this.children.filter((c) => !c.hidden);
      if (child.length) {
        const msg = [];
        child.forEach((c) => msg.push(`${message.dot} \`h:${parent.join('.')} ${c.name}\` - ${message._(`help.${parent.join('.')}.${c.name}.description`)}`));
        embed.addField(message._('help.subcommands'), msg.join('\n'));
      }

      message.author.send(message._('help.sub', parent.join(' ')), embed)
        .then(() => message.reactSuccess())
        .catch(() => message.warn(message._('help.cannot')));
      return;
    }

    if (this.databaseRequired && !this.client.database.ready) {
      message.error(message._('database.notReady'));
      return;
    }

    try {
      await this.main(message, args);
    } catch (e) {
      message.error(message._('command.error', e));
      this.client.logger.error(`[command->${this.name}] content: ${message.content} - author: ${message.author.id} - guild: ${message.guild ? message.guild.id : 'none'}`, e);
    }
  }

  /**
   * Default main entry point for the command (should be replaced)
   * @param {Message} message Message that triggered the command
   * @returns {?number} Error code
   */
  async main() {
    this.client.logger.warn(`[command->${this.name}] no custom main function`);
  }

  /**
   * Checks if there are any channel topic option prevent the command to run
   * @param {string} topic Channel
   * @param {string} command Command name with parent
   * @returns {boolean}
   */
  canRun(topic, command) {
    let ret = true;

    // Global restriction
    if (topic.includes('{-homer}')) ret = false;
    if (topic.includes('{homer}')) ret = true;

    // Category restriction
    if (topic.includes(`{-${this.category}}`)) ret = false;
    if (topic.includes(`{${this.category}}`)) ret = true;

    // Command restriction
    if (topic.includes(`{${this.name}}`) || topic.includes(`{${command}}`)) {
      ret = true;
    } else if (topic.includes(`{-${this.name}}`) || topic.includes(`{-${command}}`)) {
      ret = false;
    }

    return ret;
  }
}

module.exports = Command;
