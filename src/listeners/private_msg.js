var logging = require('../logging');

module.exports = function(from, message) {
    if (logging.doLog()) {
        logging.logChat(from, false, message);
    }
}
