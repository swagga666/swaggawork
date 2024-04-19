const { getData } = require("../AppModules/api");
const endpoins = require("../AppModules/api/config");
const staticFile = require("../AppModules/http-utils/static-file");
const { makeRatingFile, config } = require("../AppModules/rating");
async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoins.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;