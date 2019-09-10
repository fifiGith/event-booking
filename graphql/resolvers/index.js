const auth = require("./auth");
const events = require("./events");
const booking = require("./booking");

const rootResovler = {
  ...auth,
  ...events,
  ...booking
};

module.exports = rootResovler;
