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
  //core.getAvailableLogFunction(opts["functions"] ? opts["functions"] : "");

  if (typeof level === "object") {
    opts = level;
    level = defaultLevel;
  }

  if (!opts) {
    opts = defaultOpts;
  }

  if (!level) {
    level = defaultLevel;
  }

  let easyOpts = {
    environment: opts["environment"] ? opts["environment"] : systemEnvironment,
    date: opts["date"] ? opts["date"] : opts["date"] === false ? false : false,
    header: opts["header"]
      ? opts["header"]
      : opts["header"] === false
      ? false
      : true,
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
  if (["functions"].every(opts.hasOwnProperty, opts)) {
    if (!core.getAvailableLogFunction(opts["functions"], doit.caller.name)) {
      return;
    }
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
