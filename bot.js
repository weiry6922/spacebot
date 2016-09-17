//require('babel-polyfill');

var irc = require('irc');
var config = require('./config');
var channelMsg = require('./src/listeners/channel_msg');
var privateMsg = require('./src/listeners/private_msg');

// init client
var client = new irc.Client(config.server, config.nick, config);

// Add event handlers
client.addListener('message#', channelMsg);
client.addListener('pm', privateMsg);
