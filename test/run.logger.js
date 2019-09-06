const easyconsole = require("../lib/easy.logger");
/*
const easyconsole = require("../lib/easy.logger"),
  opts = {
    environment: "dev",
    type: "json",
    stringify: false,
    date: true,
    header: true,
    headerlevel: "info"
  };
*/
const json = {
  id: 1,
  case: "json"
};

let opts = {
  environment: "dev",
  type: "json",
  stringify: false,
  date: true,
  header: true,
  headerlevel: "info"
};

easyconsole.doit("info", json, opts);
