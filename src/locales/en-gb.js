module.exports = ({ dot, telephoneLoc: telephone }) => ({
  /* LOCALE INFORMATION */
  _: {
    code: 'en-gb',
    name: 'English (United Kingdom)',
    revision: 1585945683368,
    authors: ['205427654042583040'],
  },

  /* GLOBAL */
  global: {
    none: 'None',
    at: 'at',
    yes: 'Yes',
    no: 'No',
    unknown: 'Unknown',
    loading: 'Loading...',
    more: (num) => `and **${num}** more...`,
    cooldown: 'Calm down!',
    prefix: (emote) => `${emote} My prefix is \`h:\`. Start using me with \`h:help\`!`,
    noInformation: 'No information',
  },

  database: {
    notReady: 'This feature relies on the database which is currently unavailable. We apologize for this.',
  },

  /* HELP */
  help: {
    // Categories names
    category: {
      bot: 'Bot',
      general: 'General',
      radio: 'Radio',
      settings: 'Settings',
      telephone: 'Telephone',
      more: 'More',
    },

    // Help command
    main: '📚 Help for **Homer**:',
    footer: 'Add "help" at the end of the command to get advanced help.',
    cannot: 'Couldn\'t send help in direct messages! Please ensure they are open.',
    more: (invite) => `If you have more questions about a feature or cannot troubleshoot a problem encountered with Homer, feel free to join our **[support server](${invite})** where you can be helped quickly!\nYou can also make a donation to support Homer's development and have access to some cool donator perks.`,

    // Help for a specific command
    sub: (name) => `📚 Help for \`${name}\`:`,
    aliases: 'Aliases',
    usage: 'Usage',
    example: 'Example',
    subcommands: 'Subcommands',

    // Help for commands
    about: {
      description: 'Information about the bot',
      usage: null,
      example: null,
    },
    activities: {
      description: 'Displays user activities',
      usage: '[user]',
      example: 'Luke',
    },
    avatar: {
      description: 'Displays a member\'s avatar',
      usage: '[member]',
      example: '@Luke',
    },
    blacklist: {
      description: 'Manages a contract\'s blacklist',
      usage: null,
      example: null,

      add: {
        description: 'Blacklists a number',
        usage: '<number>',
        example: 'SUPPORT',
      },
      remove: {
        description: 'Removes a number from the blacklist',
        usage: '<number>',
        example: 'SUPPORT',
      },
    },
    channel: {
      description: 'Displays information about a channel',
      usage: '[channel]',
      example: '#general',
    },
    dial: {
      description: 'Dials a telephone number',
      usage: '<number>',
      example: 'SUPPORT',
    },
    donators: {
      description: 'Information about donators and donation process',
      usage: null,
      example: null,
    },
    equalizer: {
      description: 'Configures radio equalizer (not available yet)',
      usage: '<band> <gain>',
      example: '2 4',
    },
    eval: {
      description: 'Evaluates Javascript code',
      usage: '[code]',
      example: 'this.client.token',
    },
    formats: {
      description: 'Displays current date and time formats',
      usage: null,
      example: null,

      date: {
        description: 'Sets the date format',
        usage: '<format>',
        example: 'MM/DD/YYYY',
      },
      time: {
        description: 'Sets the time format',
        usage: '<format>',
        example: 'HH hours mm minutes ss seconds',
      },
    },
    google: {
      description: 'Searches for an information on Google',
      usage: '<search>',
      example: 'Facebook\'s owner',
    },
    hangup: {
      description: 'Ends an ongoing call',
      usage: null,
      example: null,
    },
    help: {
      description: 'Shows this menu',
      usage: null,
      example: null,
    },
    invite: {
      description: 'Shows the link to invite Homer into your server',
      usage: null,
      example: null,
    },
    language: {
      description: 'Displays available languages on Homer',
      usage: null,
      example: null,
    },
    lookup: {
      description: 'Displays information on a Discord entity (user/guild/invite/gift)',
      usage: '<id/invite/gift code>',
      example: '205427654042583040',
    },
    names: {
      description: 'Shows someone\'s previous names',
      usage: '[user]',
      example: '@You',
    },
    ping: {
      description: 'Pong!',
      usage: null,
      example: null,
    },
    phonebook: {
      description: 'Displays Homer\'s phone book',
      usage: null,
      example: null,

      message: {
        description: 'Sets a description for the line',
        usage: '<message>',
        example: 'Domino\'s Pizza',
      },
      toggle: {
        description: 'Toggles visibility in the phone book',
        usage: null,
        example: null,
      },
    },
    pickup: {
      description: 'Answers to an incoming call',
      usage: null,
      example: null,
    },
    prefix: {
      description: 'Sets a custom prefix',
      usage: '<prefix|disable>',
      example: '/',
    },
    quote: {
      description: 'Quotes a message',
      usage: '<message id> [channel]',
      example: '703352314445955082 #staff',
    },
    radio: {
      description: 'Listen to Homer\'s radio',
      usage: '[frequency]',
      example: '98.8',

      channel: {
        description: 'Sets the radio channel',
        usage: '[channel]',
        example: 'Music',
      },
      tutorial: {
        description: 'Guide to use Homer\'s radio',
        usage: null,
        example: null,
      },
    },
    radios: {
      description: 'Lists all available radios',
      usage: null,
      example: null,
    },
    role: {
      description: 'Displays information about a role',
      usage: '<role>',
      example: '@Moderators',

      members: {
        description: 'Displays member having the specified role',
        usage: '<role>',
        example: '@Muted',
      },
    },
    server: {
      description: 'Displays information about the server',
      usage: null,
      example: null,
    },
    servicetel: {
      description: 'Displays information about a contract',
      usage: '<contract no.>',
      example: '0',
    },
    shutdown: {
      description: 'Gracefully shuts down the bot',
      usage: '[exit code]',
      example: '4',
    },
    tag: {
      description: 'Executes a tag using Lisa\'s scripting language',
      usage: '<name>',
      example: 'discord.js',

      create: {
        description: 'Creates a tag',
        usage: '<name> <content>',
        example: 'discord.js What a powerful library!',
      },
      edit: {
        description: 'Edits a tag',
        usage: '<name> <content>',
        example: 'discord.js No actually it\'s the best one',
      },
      delete: {
        description: 'Deletes a tag',
        usage: '<name>',
        example: 'discord.js',
      },
      list: {
        description: 'Lists all tags owned by a user',
        usage: '[user]',
        example: '@b1nZy',
      },
      owner: {
        description: 'Displays a tag owner',
        usage: '<name>',
        example: 'discord.js',
      },
      raw: {
        description: 'Displays a tag content without processing',
        usage: '<name>',
        example: 'discord.js',
      },
      raw2: {
        description: 'Displays a tag content in code blocks',
        usage: '<name>',
        example: 'discord.js',
      },
      private: {
        description: 'Makes a tag private or public',
        usage: '<name>',
        example: 'discord.js',
      },
      source: {
        description: 'Makes a tag\'s source private or public',
        usage: '<name>',
        example: 'discord.js',
      },
    },
    telephone: {
      description: 'Displays information about a channel\'s contract',
      usage: null,
      example: null,

      contracts: {
        description: 'Displays all pending contracts',
        usage: null,
        example: null,

        approve: {
          description: 'Approves a subscription request',
          usage: '<contract no.>',
          example: null,
        },
        reject: {
          description: 'Rejects a subscription request',
          usage: '<contract no.>',
          example: null,
        },
      },
      subscribe: {
        description: 'Subscribes to Homer\'s telephone',
        usage: null,
        example: null,
      },
      terminate: {
        description: 'Terminates a subscription',
        usage: null,
        example: null,
      },
      toggle: {
        description: 'Pauses or resumes a telephone line',
        usage: null,
        example: null,
      },
    },
    text: {
      description: 'Sends a text message to someone',
      usage: '<number> <message>',
      example: '478-444 Hey, call me back!',
    },
    timezone: {
      description: 'Sets the timezone',
      usage: '<timezone>',
      example: 'Europe/Paris',

      list: {
        description: 'Displays available zones',
        usage: null,
        example: null,
      },
    },
    user: {
      description: 'Displays information about a user',
      usage: '[user]',
      example: '@Homer',
    },
    weather: {
      description: 'Gets weather for the provided city',
      usage: '<city>',
      example: 'Paris',
    },
  },

  /* UTILS */
  // Finder
  finder: {
    channels: {
      zero: (search) => `No channels found matching \`${search}\`.`,
    },
    members: {
      zero: (search) => `No members found matching \`${search}\`.`,
    },
    roles: {
      zero: (search) => `No roles found matching \`${search}\`.`,
    },
    format: {
      channels: (size, search) => `**${size}** channels found matching \`${search}\`:`,
      members: (size, search) => `**${size}** members found matching \`${search}\`:`,
      roles: (size, search) => `**${size}** roles found matching \`${search}\`:`,
    },
  },

  // Menu
  menu: {
    page: (page) => `Page ${page}`,
  },

  /* HANDLERS */
  // Command handler
  command: {
    error: 'An error occured during the execution of this command. Please try again or join the support server.',
    noDm: 'This command cannot be ran in a DM environment.',
    override: 'A channel topic override prevents this command from executing.',
    userPermissions: (permissions) => `You need the following permissions to run this command: ${permissions}.`,
    botPermissions: (permissions) => `I need the following permissions to run this command: ${permissions}.`,
  },

  /* COMMANDS */
  // About command
  about: {
    title: (emote, name) => `${emote} Information about **${name}**:`,
    developers: 'Developers',
    guilds: 'Servers',
    shard: (id) => `you are on shard \`#${id}\``,
    memory: 'Memory usage',
    versions: 'Versions',
    links: 'Links',
  },

  // Activities command
  activities: {
    title: (emote, user) => `${emote} Activities for ${user}:`,
    none: (emote, name) => `${emote} ${name} is doing nothing at the moment.`,
    elapsed: (time) => `Begun **${time}**`,
    remaining: (time) => `Ends **${time}**`,
    listening: {
      artist: (name) => `By ${name}`,
      album: (name) => `On ${name}`,
    },
    streaming: {
      link: (url) => `**[Watch this stream](${url})**`,
    },
    type: {
      PLAYING: (game) => `🎮 Playing ${game}`,
      STREAMING: (game) => `📡 Streaming ${game}`,
      LISTENING: (service) => `🎵 Listening to ${service}`,
      WATCHING: (topic) => `📺 Watching ${topic}`,
    },
  },

  // Avatar command
  avatar: {
    title: (name) => `🖼️ ${name}'s avatar:`,
  },

  // Blacklist command
  blacklist: {
    empty: 'There are no entries in the blacklist.',
    list: '⛔ Blacklist for this line:',
    missing: 'You must provide a telephone number.',
    format: 'The format of the telephone number you provided is not valid.',
    add: {
      added: (number) => `Number \`${number}\` has been successfully blacklisted.`,
      already: (number) => `Number \`${number}\` has already been blacklisted.`,
      error: 'An error occured while blacklisting the number.',
    },
    remove: {
      removed: (number) => `Number \`${number}\` has been successfully removed from the blacklist.`,
      unknown: (number) => `Number \`${number}\` has not been found in the blacklist.`,
      error: 'An error occured while removing the number from the blacklist.',
    },
  },

  // Channel command
  channel: {
    title: (emote, name, type) => `${emote} Information about **${type === 'text' ? '#' : ''}${name}**:`,
    id: 'Discord ID',
    type: 'Type',
    position: 'Position',
    users: 'Users',
    slowdown: 'Slowdown',
    bitrate: 'Bitrate',
    creation: 'Creation date',
    topic: 'Topic',
    types: {
      category: 'Category',
      text: 'Text',
      voice: 'Voice',
      news: 'News',
      store: 'Store',
    },
  },

  // Dial command
  dial: {
    noNumber: 'You must provide a number to dial.',
    unknown: 'The number you dialed is not assigned.',
    busy: 'The line\'s busy.',
    correspondentBusy: 'Your correspondent line\'s busy.',
    error: 'An error occurred while dialing.',
  },

  // Donators command
  donators: {
    title: '💵 Donations for **Homer**:',
    message: [
      'Homer is a bot developed and maintained pro bono. His hosting costs money and unfortunately there is no magic money. Although I can easily rent a machine for Homer, the money collected from donations could be used for subscriptions to external APIs to embellish the bot with new features.',
      '',
      'If you would like to make a donation, please join the support server and contact a developer (listed in h:about). Thank you a lot!',
    ].join('\n'),
    list: 'Donators',
    perks: 'Perks',
    perkList: [
      'Higher audio quality (from 56 to 128kbps)',
      'Cool badge on user and lookup commands',
    ].map((item) => `${dot} ${item}`).join('\n'),
  },

  // Formats command
  formats: {
    title: '📆 Date and time formats:',
    fdate: 'Date format',
    ftime: 'Time format',
    documentation: 'Documentation',
    hint: 'Change date format with `h:formats date` and time format with `h:formats time`.',
    missing: 'You must provide a format to set.',
    length: (max) => `Format length must not exceed **${max}** characters.`,
    error: 'An error occured while setting format.',
    date: {
      set: (now) => `Date format successfully set! Preview: **${now}**`,
    },
    time: {
      set: (now) => `Time format successfully set! Preview: **${now}**`,
    },
  },

  // Google command
  google: {
    noSearch: 'You must provide something to search.',
    unavailable: 'Google search is temporarily unavailable. We apologize for this.',
    searching: 'Searching...',
    noResults: (search) => `No search results matching \`${search}\`.`,
    error: 'An error occured while querying Google. We apologize for this.',
  },

  // Hangup command
  hangup: {
    noActive: '☎️ You\'re not on a phone call..',
    error: 'An error occurred while hanging up.',
  },

  // Invite
  invite: {
    invite: (emote, url) => `${emote} Invite Homer into your server by following this link: <${url}>.`,
  },

  // Language command
  language: {
    title: '🗣️ Available languages on Homer:',
    footer: 'To change your language, run h:language <code>',
    set: 'I will now speak in English!',
    error: 'An error occured while setting language.',
    unknown: (locale) => `Invalid language code \`${locale}\`.`,
    revision: 'Last revision',
  },

  // Lookup command
  lookup: {
    noSearch: 'You must provide something to look for.',
    looking: 'Looking...',
    noResults: (search) => `No Discord entity found matching \`${search}\`.`,
    invite: {
      title: (code) => `📧 Information about invitation **${code}**:`,
      inviter: 'Inviter',
      channel: 'Channel',
      members: 'Members',
      guild: {
        title: 'Server information',
        server: 'Name',
        creation: 'Creation date',
      },
      memberDesc: (emotes, count) => `${emotes[0]} **${count[0]}** online - ${emotes[1]} **${count[1]}** members`,
    },
    gift: {
      title: (code) => `🎁 Information about gift code **${code}**:`,
      name: 'Product',
      summary: 'Summary',
      uses: 'Uses',
      redeem: 'Redeem link',
      expires: 'This gift will expire on',
      status: {
        redeemed: 'Redeemed',
        available: 'Available',
      },
    },
    server: {
      widgetDisabled: (id) => `Server found matching ID \`${id}\` but no further information available.`,
      title: (name) => `🖥️ Information about server **${name}**:`,
      id: 'Discord ID',
      members: 'Members',
      memberDesc: (emotes, count) => `${emotes[0]} **${count[0]}** online - ${emotes[1]} **${count[1]}** members`,
      channels: 'Channels',
      invite: 'Invite',
      creation: 'Creation date',
    },
    template: {
      title: (emote, code) => `${emote} Information about template code **${code}**:`,
      name: 'Name',
      description: 'Description',
      creator: 'Creator',
      usages: 'Usage count',
      creation: 'Creation date',
      use: 'Use',
      uselink: 'Apply this template',
      update: 'Last update',
    },
    user: {
      title: (emote, name) => `${emote} Information about ${name}:`,
      id: 'Discord ID',
      active: 'Last seen',
      creation: 'Creation date',
    },
  },

  // Names command
  names: {
    title: (name) => `✏️ Names history for ${name}:`,
    current: 'Current name',
    until: 'until',
    none: (name) => `No names recorded for ${name}.`,
    footer: 'The accuracy of the data cannot be guaranteed.',
  },

  // Phonebook command
  phonebook: {
    title: '🔖 Homer\'s phone book:',
    empty: 'The phone book is currently empty.',
    toggle: {
      visible: 'You are now listed in the phone book.',
      invisible: 'You are no longer listed in the phone book.',
      message: 'You must have defined a description for your line.',
      error: 'An error occurred during the phone book subscription request.',
    },
    message: {
      set: (message) => `You now appear in the phone book with the description: \`${message}\`.`,
      length: (max) => `The length of your description should not exceed **${max}** characters.`,
      missing: 'You must provide a description to be defined.',
      error: 'An error occurred while editing your description.',
    },
  },

  // Pickup command
  pickup: {
    noPending: 'There are no incoming calls.',
    asCaller: 'You can\'t pick up as a caller.',
    error: 'An error occurred while picking up.',
  },

  // Ping command
  ping: {
    pong: (ws, rest) => `🏓 Pong! Gateway: **${ws}**ms - REST API: **${rest}**ms`,
  },

  // Prefix command
  prefix: {
    none: 'You must provide a prefix to set (or `disable` to disable).',
    length: (max) => `Prefix length must not exceed **${max}** characters.`,
    set: (prefix) => `Custom prefix set to \`${prefix}\`.`,
    disabled: 'Disabled custom prefix.',
    error: 'An error occured while setting custom prefix.',
  },

  // Quote command
  quote: {
    title: (author, channel) => `💬 Quote from ${author} in **#${channel}**:`,
    edit: (id) => `ID:${id} - Edited`,
    creation: (id) => `ID:${id} - Sent`,
    noContent: 'This message has no displayable content.',
    unknown: (id, channel) => `No messages found with ID \`${id}\` in **#${channel}**.`,
  },

  // Radio command
  radio: {
    lavacordDisabled: 'Radio feature is disabled due to a lack of audio manager.',
    restart: '📻 This shard will perform a restart, please tune again once Homer\'s turns back online.',
    deprecate: 'Homer\'s radio is now button-based! Run `h:radio [frequency]` to turn it on.',
    header: '📻 Homer radio interface',
    footer: 'Learn how to use Homer\'s radio using h:radio tutorial.',
    unset: 'Welcome! Before using radio, please dedicate a voice channel to it using `h:radio channel [voice channel name or ID]`.',
    notin: 'You must join a voice channel before running the command.',
    instance: 'You must turn off current\'s radio before creating a new one.',
    permissions: (name) => `The bot must be able to connect and speak in **${name}**.`,
    error: 'An error occured while turning radio on. Please retry later.',
    channel: {
      none: 'Specify a voice channel name or ID or run this while being on a voice channel.',
      unknown: 'No radio channel set. Use `h:radio <channel>` to set one.',
      set: (name) => [
        `📻 Radio channel is set to **${name}**.`,
        `${dot} Turn radio on with \`h:radio [frequency]\`.`,
      ].join('\n'),
      error: 'An error occured while setting radio channel.',
    },
    tutorial: {
      title: '📻 How to use Homer\'s radio:',
      list: [
        `${dot} Get the list of all available radios on \`h:radios\`.`,
        `${dot} Directly tune into a station using \`h:radio [frequency]\`.`,
        `${dot} Seek using ⏪ and ⏩ buttons.`,
        `${dot} Change frequency using ◀️ and ▶️ buttons.`,
        `${dot} Change volume using 🔉 and 🔊 buttons.`,
        `${dot} Stop radio at any time using the ⏹️ button.`,
        `${dot} Missing radio? Dial \`SUPPORT\` to get it added!`,
        `${dot} You may need to wait a bit before radio actually starts playing, don't touch frequency!`,
      ].join('\n'),
    },
  },

  // Radios command
  radios: {
    empty: 'There are no available radios at the moment.',
    list: '📻 Radios available on **Homer**:',
    footer: (p, t) => `Tune into a station by running h:radio <frequency> | Page ${p}/${t}`,
    pty: {
      // Based on the European PTY codes
      0: 'No programme type',
      1: 'News',
      2: 'Current affairs',
      3: 'Information',
      4: 'Sport',
      5: 'Education',
      6: 'Drama',
      7: 'Culture',
      8: 'Science',
      9: 'Varied',
      10: 'Pop music',
      11: 'Rock music',
      12: 'Easy listening',
      13: 'Light classical',
      14: 'Serious classical',
      15: 'Other music',
      16: 'Weather',
      17: 'Finance',
      18: 'Children\'s programmes',
      19: 'Social affairs',
      20: 'Religion',
      21: 'Phone-in',
      22: 'Travel',
      23: 'Leisure',
      24: 'Jazz music',
      25: 'Country music',
      26: 'National music',
      27: 'Oldies music',
      28: 'Folk music',
      29: 'Documentary',
      30: 'Alarm test',
      31: 'Alarm',
    },
  },

  // Role command
  role: {
    noSearch: 'You must provide a role to search for.',
    title: (name) => `🎭 Information about role **${name}**:`,
    id: 'Discord ID',
    color: 'Color',
    position: 'Position',
    memberCount: 'Member count',
    managed: 'Managed',
    mentionable: 'Mentionable',
    hoisted: 'Hoisted',
    permissions: 'Permissions',
    creation: 'Creation date',
    members: {
      title: (name) => `🎭 Members in role **${name}**:`,
      empty: (name) => `Role **${name}** has no members.`,
    },
  },

  // Server command
  server: {
    title: (name, pub) => `🖥️ Information about${pub ? ' public' : ''} server **${name}**:`,
    id: 'Discord ID',
    owner: 'Owner',
    region: 'Region',
    boost: 'Server boost',
    members: 'Members',
    memberDesc: (emotes, count) => `${emotes[0]} **${count[0]}** online - ${emotes[1]} **${count[1]}** members`,
    channels: 'Channels',
    creation: 'Creation date',
    boosts: {
      level: (level) => `Level ${level}`,
      count: (count) => `${count} booster${count > 1 ? 's' : ''}`,
    },
    channel: {
      category: 'Category',
      text: 'Text',
      voice: 'Voice',
    },
    regions: {
      amsterdam: 'Amsterdam',
      brazil: 'Brazil',
      dubai: 'Dubai',
      europe: 'Europe',
      'eu-central': 'Central Europe',
      'eu-east': 'Eastern Europe',
      'eu-west': 'Western Europe',
      frankfurt: 'Frankfurt',
      hongkong: 'Hong Kong',
      india: 'India',
      japan: 'Japan',
      london: 'London',
      russia: 'Russia',
      singapore: 'Singapore',
      southafrica: 'South Africa',
      sydney: 'Sydney',
      'us-central': 'US Central',
      'us-east': 'US East',
      'us-south': 'US South',
      'us-west': 'US West',
    },
  },

  // Servicetel command
  servicetel: {
    noID: 'You must provide the no. of a contract to fetch.',
    invalid: 'The value you entered is not a valid no..',
    unknown: (id) => `No contract found with no. \`${id}\`.`,
    contract: (type) => `Information about ${type} contract`,
    title: (id) => `Information about contract no. \`${id}\`:`,
    guild: 'Information about contract\'s guild',
    subscriber: 'Information about contract\'s subscriber',
    blacklist: 'Contract\'s blacklist',
  },

  // Tag command
  tag: {
    missing: 'You must provide a tag name.',
    content: 'You must provide a content for your tag.',
    unknown: (name) => `No tags found matching \`${name}\`.`,
    exists: (name) => `Tag \`${name}\` already exists.`,
    owner: (name, { user, id }) => `🏷️ Tag \`${name}\` belongs to ${user} (${id}).`,
    permissions: (name) => `You are not owner of tag \`${name}\`.`,
    error: 'An error occured during tag processing. Please check syntax and its ability to end.',
    api: (message) => `An API error occured when sending processed tag, this is probably due to an invalid embed.\n\`\`\`${message}\`\`\``,
    create: {
      nlength: (max) => `Name length must not exceed **${max}** characters.`,
      length: (max) => `Content length must not exceed **${max}** characters.`,
      created: (name) => `Tag \`${name}\` created successfully.`,
      error: 'An error occured while creating your tag.',
    },
    edit: {
      cannot: (name) => `You can't edit tag \`${name}\`.`,
      length: (max) => `New content length must not exceed **${max}** characters.`,
      edited: (name) => `Tag \`${name}\` edited successfully.`,
      error: 'An error occured while editing your tag.',
    },
    delete: {
      cannot: (name) => `You can't delete tag \`${name}\`.`,
      deleted: (name) => `Tag \`${name}\` deleted successfully.`,
      error: 'An error occured while deleting your tag.',
    },
    list: {
      none: (user) => `${user} does not own any tags.`,
      title: (user, list) => `🏷️ Tags owned by ${user}:\n${list}`,
    },
    private: {
      activated: (name) => `Tag \`${name}\` made public successfully.`,
      deactivated: (name) => `Tag \`${name}\` made private successfully.`,
      error: 'An error occured while activating or deactivating your tag.',
    },
    source: {
      public: (name) => `Source of tag \`${name}\` is now public.`,
      private: (name) => `Source of tag \`${name}\` is now private.`,
      error: 'An error occured while publishing or unpublishing your tag\'s source.',
    },
  },

  // Telephone command
  telephone: {
    welcome: `${telephone} Welcome to Homer's telephone! To get started, run \`h:telephone subscribe\`.`,
    existing: (id) => `Contract no. \`${id}\` is already active on this channel.`,
    unknown: `${telephone} No contract present on this channel. Subscribe by running \`h:telephone subscribe\`.`,
    pending: `${telephone} Your subscription request is in progress, please wait.`,
    paused: `${telephone} You must reactivate your line before you can use it.`,
    contract: {
      title: `${telephone} Information about this channel's contract:`,
      id: 'Contract no.',
      number: 'Number',
      subscriber: 'Subscriber',
      state: 'State',
      textable: 'Textable',
      date: 'Subscription date',
      noNumber: 'Not assigned',
    },
    notifications: {
      restart: `${telephone} This (or your correspondent) shard will perform a restart, messages may not be transfered until Homer's goes back online.`,
      activated: (number) => `${telephone} Your line has been activated, your number is \`${number}\`.`,
      invalidated: 'Your line has not been activated. Join the support server to find out why.',
      outgoing: (number) => `${telephone} Dialing \`${number}\`...`,
      incoming: (number) => `${telephone} Incoming call from \`${number}\`. Run \`h:pickup\` to pickup the phone.`,
      pickedCaller: `${telephone} Your correspondent picked up.`,
      pickedCalled: `${telephone} You picked up the phone.`,
      terminated: `${telephone} The communication has ended.`,
      paused: `${telephone} Your line's been disabled. You can reactivate it at any time by running \`h:telephone toggle\`.`,
      resumed: `${telephone} Your line's been reactivated.`,
      text: (num) => `📧 Received text message from \`${num}\`:`,
      missed: {
        caller: (number) => `${telephone} No answer from \`${number}\`.`,
        called: (number) => `${telephone} Missed call from \`${number}\`.`,
      },
    },
    states: {
      0: 'Pending',
      1: 'Active',
      2: 'Paused',
      3: 'Terminated',
      4: 'Suspended',
      5: 'Invalidated',
    },
    subscribe: {
      disclaimer: 'Do you really want to apply for a subscription for this channel?',
      eligibility: 'Checking eligibility...',
      notEligible: 'You are not eligible to Homer\'s telephone.',
      applied: (id) => `Your subscription request has been made. Your contract number: \`${id}\`.`,
      error: 'An error occurred during your subscription request.',
      aborted: 'You have cancelled your subscription request.',
    },
    terminate: {
      disclaimer: 'Are you sure you want to terminate your contract? You are limited to two signatures every two weeks.',
      done: (id) => `Contract no. \`${id}\` was successfully terminated.`,
      error: 'There was an error in your termination request.',
      aborted: 'You have cancelled your termination request.',
    },
    toggle: {
      error: 'An error occurred while processing your request.',
    },
    hint: {
      text: (num) => `Reply to this message using h:text ${num} <message>`,
    },
  },

  // Text command
  text: {
    missingNumber: 'You must provide a number to send a message to.',
    missingContent: 'You must provide message to be sent.',
    contentLength: (max) => `The length of the message must not exceed **${max}** characters.`,
    unable: (number) => `Unable to send a text message to \`${number}\`.`,
    sent: (number) => `Your message has been successfully sent to \`${number}\`.`,
    error: 'An error occurred while sending your message.',
  },

  // Timezone command
  timezone: {
    none: 'You must provide a timezone to set.',
    length: (max) => `Timezone length must not exceed **${max}** characters.`,
    invalid: (timezone) => `Unrecognized timezone: \`${timezone}\`.`,
    set: (timezone, now) => `Timezone set to \`${timezone}\`. Current date: ${now}.`,
    error: 'An error occured while setting timezone.',
    list: {
      title: '🌐 Available timezones:',
      footer: 'Set a timezone using h:timezone <zone>',
    },
  },

  // User command
  user: {
    title: (emote, name) => `${emote} Information about ${name}:`,
    id: 'Discord ID',
    nickname: 'Nickname',
    status: 'Status',
    activity: 'Activity',
    roles: 'Roles',
    boosting: 'Server boosting',
    active: 'Last seen',
    creation: 'Creation date',
    join: 'Join date',
    activities: {
      streaming: (name) => `Streaming **${name}**`,
      playing: (name) => `Playing **${name}**`,
      listening: (details, name) => `Listening to **${details}** on ${name}`,
      listening2: (name) => `Listening to **${name}**`,
      watching: (name) => `Watching **${name}**`,
    },
    statusDesc: {
      online: 'Online',
      idle: 'Idle',
      dnd: 'Do not disturb',
      offline: 'Offline',
    },
    boostingSince: (date) => `since ${date}`,
  },

  // Weather command
  weather: {
    locale: 'en',
    missing: 'You must provide a city to look for.',
    none: (search) => `No cities have been found matching \`${search}\`.`,
    multiple: (search) => `Several cities have been found matching \`${search}\`:`,
    noSelected: 'You haven\'t chosen any cities.',
    error: 'An error occured while fetching data.',
    title: (city, state, country) => `🌥️ Weather for **${city}** (${state}, ${country}):`,
    footer: 'The information is provided by Accuweather.',
    now: 'Currently',
    today: 'Today',
    condition: 'Weather',
    temperature: 'Temperature',
    feel: 'Feels like',
    wind: 'Wind',
    uv: 'UV Index',
    humidity: 'Humidity',
    pressure: 'Pressure',
    nebulosity: 'Nebulosity',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    moon: 'Moon',
    format: {
      day: 'dddd MMMM Do',
      time: 'hh:mmA',
      temperature: ([c, f]) => `**${c}**°C (**${f}**°F)`,
      temperatures: ({ max, min }) => `from **${min[0]}**°C (**${min[1]}**°F) to **${max[0]}**°C (**${max[1]}**°F)`,
      feel: ([c, f]) => `**${c}**°C (**${f}**°F)`,
      wind: ({ direction, speed }, gust) => `**${direction}** - **${speed[0]}**kph (**${speed[1]}**mph) - Gusts of **${gust[0]}**kph (**${gust[1]}**mph)`,
      uv: (index) => {
        let text;
        if (index <= 2) text = 'Low';
        else if (index >= 3 && index <= 5) text = 'Moderate';
        else if (index >= 6 && index <= 7) text = 'High';
        else if (index >= 8 && index <= 10) text = 'Very high';
        else text = 'Extreme';
        return `**${index}** (**${text}**)`;
      },
      humidity: (hr) => `**${hr}**%`,
      pressure: (pr) => `**${pr}**mb`,
      nebulosity: (cover) => `**${cover}**%`,
      moon: (emote, phase) => `${emote} **${phase}**`,
    },
    moons: {
      New: 'New moon',
      'Waxing Crescent': 'Waxing crescent',
      First: 'First quarter',
      'Waxing Gibbous': 'Waxing gibbous',
      Full: 'Full moon',
      'Waning Gibbous': 'Waning gibbous',
      Last: 'Last quarter',
      'Waning Crescent': 'Waning crescent',
    },
  },
});
