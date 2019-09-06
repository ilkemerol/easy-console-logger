exports.easyheadline = function(level) {
  console[level]("=== easy-console-log ===");
};

exports.easylog = function(level, obj, stringify, dateAllow) {
  console[level](dateAllow ? getDateTime() : "## ", createLog(obj, stringify));
};

function createLog(obj, stringify) {
  var object = stringify ? JSON.stringify(obj) : ("%O", obj);
  return object;
}

function getDateTime() {
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + " " + time + " ## ";
}

exports.checkStringfy = function(obj) {
  let type = checkType(obj);
  return !(type === "number" || type === "string" || type === "boolean");
};

function checkType(obj) {
  return typeof obj;
}

exports.getEnv = function() {
  return process.env.EASY_ENV ? process.env.EASY_ENV : "dev";
};

exports.getAvailableLogLevel = function() {
  return process.env.EASY_LOG_LEVEL
    ? process.env.EASY_LOG_LEVEL
    : {
        dev: { info: true, error: true, warn: true },
        test: { info: true, error: true, warn: false },
        prod: { info: true, error: true, warn: false }
      };
};
