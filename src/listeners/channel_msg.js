var logging = require('../logging');

module.exports = function(from, to, message) {
    if (logging.doLog(to)) {
        logging.logChat(from, to, message);
    }
}
