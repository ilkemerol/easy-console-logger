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
