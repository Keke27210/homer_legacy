const { readdirSync } = require('fs');
const { resolve } = require('path');

const Manager = require('./Manager');

class CommandManager extends Manager {
  constructor(client) {
    super(client);

    /**
     * Base directory for commands
     * @type {string}
     */
    this.commandDirectory = resolve(this.srcDirectory, 'commands');

    /**
     * Base permissions for the bot to behave correctly
     * @type {string[]}
     */
    this.basePermissions = ['SEND_MESSAGES', 'EMBED_LINKS', 'ADD_REACTIONS'];

    /**
     * Command categories
     * @type {string[]}
     */
    this.categories = ['bot', 'general', 'owner', 'radio', 'settings', 'telephone'];

    /**
     * Registered commands
     * @type {Command[]}
     */
    this.commands = [];

    /**
     * Cooldown for users
     * @type {Cooldown[]}
     */
    this.cooldown = [];

    /**
     * Global cooldown time
     * @type {number}
     */
    this.cooldownDuration = (0.75 * 1000);

    // Set listeners
    this.client.on('message', this.handleMessage.bind(this));
    this.client.setInterval(this.cleanCooldown.bind(this), (0.5 * 1000));
  }

  /**
   * Default command prefixes
   * @type {string[]}
   */
  get prefixes() {
    return ['h:', `<@${this.client.user.id}>`, `<@!${this.client.user.id}>`];
  }

  /**
   * Registers all available commands into the client
   * @returns {number} Number of registered commands
   */
  registerCommands() {
    let i = 0;
    for (let j = 0; j < this.categories.length; j += 1) {
      const categoryPath = resolve(this.commandDirectory, this.categories[j]);
      const dirContent = readdirSync(categoryPath);
      for (let k = 0; k < dirContent.length; k += 1) {
        const Command = require(resolve(categoryPath, dirContent[k]));
        this.commands.push(new Command(this.client, this.categories[j]));
        i += 1;
      }
    }
    return i;
  }

  /**
   * Unregisters commands loaded in memory
   */
  unregisterCommands() {
    while (this.commands.length) this.commands.pop();
  }

  /**
   * Calls unregisterCommands() then registerCommands()
   * @returns {number} Number of registered commands
   */
  reloadCommands() {
    this.unregisterCommands();
    return this.registerCommands();
  }

  /**
   * Handles a command execution
   * @param {Message} message Message that triggered the command
   */
  async handleMessage(message) {
    if (message.type !== 'DEFAULT' || message.author.bot || !message.content || !this.client.ready) return;
    await message.fetchSettings();

    const mentionTest = message.content.match(new RegExp(`<@!?${this.client.user.id}>`));
    if (mentionTest && message.content === mentionTest[0]) {
      message.send(message._('global.prefix', message.emote('homer')));
      return;
    }

    let prefix = this.prefixes;
    if (message.settings.prefix) prefix.push(message.settings.prefix);
    prefix = prefix.find((p) => message.content.toLowerCase().startsWith(p.toLowerCase()));
    if (!prefix) return;

    const parse = message.content.substring(prefix.length).trim().replace(/\u200B/g, '');
    const args = parse.split(/ +/g);
    const command = args.shift();

    const instance = this.searchCommand(command);
    if (!instance) return;

    if (this.cooldown.find((c) => c.id === message.author.id)) return;
    this.cooldown.push({ id: message.author.id, time: Date.now() });
    instance.run(message, args);
  }

  /**
   * Searches for a command
   * @param {string} search Search string
   * @returns {?Command} Found command
   */
  searchCommand(search) {
    const lowSearch = search.toLowerCase();
    return this.commands.find((c) => c.name === lowSearch || c.aliases.includes(lowSearch));
  }

  /**
   * Clean cooldown entries that were put more than this.cooldownDuration ms
   */
  cleanCooldown() {
    for (let i = 0; i < this.cooldown.length; i += 1) {
      const cooldown = this.cooldown[i];
      if (Date.now() - this.cooldownDuration > cooldown.time) {
        this.cooldown.splice(this.cooldown.indexOf(cooldown), 1);
      }
    }
  }
}

module.exports = CommandManager;
