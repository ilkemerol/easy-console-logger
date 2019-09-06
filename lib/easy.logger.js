const core = require("./easy.logger.core");
/*
 * Senator Palpatine was here.
 */

exports.doit = function(level, obj, opts) {
  /*
   *Analyze opts ...
   */
  let easyOpts = {
    environment: opts["environment"] ? opts["environment"] : "dev",
    type: opts["type"] ? opts["type"] : "text",
    stringify: opts["stringify"] ? opts["stringify"] : false,
    date: opts["date"] ? opts["date"] : false,
    header: opts["header"] ? opts["header"] : true,
    headerlevel: opts["headerlevel"] ? opts["headerlevel"] : "info"
  };

  if (easyOpts["environment"] !== "dev") {
    return;
  }

  if (easyOpts["header"]) {
    core.easyheadline(easyOpts["headerlevel"]);
  }

  if (easyOpts["type"] === "text") {
    core.easylog(level, obj, easyOpts["date"]);
  } else if (easyOpts["type"] === "json") {
    core.easylog(level, obj, easyOpts["stringify"], easyOpts["date"]);
  }
};
