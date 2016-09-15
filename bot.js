require("babel-polyfill");
var irc = require('irc');

var client = new irc.Client('irc.synirc.net', 'spacebot', {
    autoRejoin: true,
    channels: ['#sp'],
});
