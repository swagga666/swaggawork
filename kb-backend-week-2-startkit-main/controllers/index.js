const gameRouteController = require("./game");
const mainRouteController = require("./main");
const defaultRouteController = require("./default");
const voteRouteController = require("./vote");

module.exports = {
    mainRouteController,
    gameRouteController,
    voteRouteController,
    defaultRouteController,
};