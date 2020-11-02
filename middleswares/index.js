const defaultMiddleware = require('./default');

module.exports = function registerMiddlewares(server) {
    defaultMiddleware(server);
};