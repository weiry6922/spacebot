require('babel-polyfill');
var fs = require('fs');
var moment = require('moment');
var config = require('../config');

module.exports = {
    doLog(to) {
        if (to) {
            return (Array.isArray(config.logChat) && config.logChat.includes(to)) || config.logChat == 'all';
        } else { // private message
            return config.logPm;
        }
    },
    logChat(from, to, message) {
        var dir = to ? `channel_${to.replace(/#/g, '')}` : 'private_message';
        var dirPath = `logs/${dir}`;

        if (!this.exists(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        // Remove invald backslash incase of making a filename using date
        var date = moment().format('l').replace(/\//g, '-');
        var time = moment().format('LTS');
        var filePath = `${to ? date : from}`;
        var logString = `[${time}][${to ? from : date}]: ${message}`;

        return fs.appendFileSync(`${dirPath}/${filePath}.txt`, logString + '\n');
    },
    exists(path) {
        try {
            var stats = fs.statSync(path);
            return stats.isDirectory() || stats.isFile();
        } catch (e) {
            return false;
        }
    }
}
