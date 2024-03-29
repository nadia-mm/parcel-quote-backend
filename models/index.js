const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.parcels = require("./parcels.model.js")(mongoose);
db.countries = require("./countries.model.js")(mongoose);
db.prices = require("./prices.model.js")(mongoose);
module.exports = db;