const core = require("./easy.logger.core");
/*
 * Senator Palpatine was here.
 */

let systemEnvironment = core.getEnv();
let defaultAvailableLogLevel = core.getAvailableLogLevel();
let defaultLevel = "info";

let defaultOpts = {
  environment: systemEnvironment,
  date: true,
  header: true,
  headerlevel: defaultLevel,
  availableLogLevel: defaultAvailableLogLevel
};

exports.doit = function doit(obj, level, opts) {
  /*
   *Analyze opts ...
   */
  if (!opts) {
    opts = defaultOpts;
  }

  if (typeof level === "object") {
    opts = level;
    level = defaultLevel;
  }

  if (!level) {
    level = defaultLevel;
  }

  let easyOpts = {
    environment: opts["environment"] ? opts["environment"] : systemEnvironment,
    date: opts["date"] ? opts["date"] : false,
    header: opts["header"] ? opts["header"] : true,
    headerlevel: opts["headerlevel"] ? opts["headerlevel"] : "info",
    availableLogLevel: opts["availableLogLevel"]
      ? opts["availableLogLevel"]
      : defaultAvailableLogLevel
  };

  let availableLogLevel = easyOpts["availableLogLevel"];
  let env = easyOpts["environment"];
  if (!availableLogLevel[env][level]) {
    return;
  }

  if (easyOpts["header"]) {
    let headerLevel = easyOpts["headerlevel"];
    if (availableLogLevel[env][headerLevel]) {
      core.easyheadline(easyOpts["headerlevel"]);
    }
  }

  let stringify = core.checkStringfy(obj);
  core.easylog(level, obj, stringify, easyOpts["date"]);
};
