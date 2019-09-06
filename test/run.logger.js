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
const number = 1;
const string = "jedi";
const json = { id: 1, case: "json" };
const array = [1, 2, 3];
const boolean = true;
const undef = undefined;
const func = () => {};

easyconsole.doit("---- simple logging --- ");

easyconsole.doit(number);
easyconsole.doit(string);
easyconsole.doit(json);
easyconsole.doit(array);
easyconsole.doit(boolean);
easyconsole.doit(undef);
easyconsole.doit(func);

easyconsole.doit("---- opts logging --- ");
let opts = {
  environment: "dev",
  date: false,
  header: false,
  headerlevel: "error"
};
easyconsole.doit(number, opts);
easyconsole.doit(string, opts);
easyconsole.doit(json, opts);
easyconsole.doit(array, opts);
easyconsole.doit(boolean, opts);
easyconsole.doit(undef, opts);
easyconsole.doit(func, opts);

easyconsole.doit("---- level logging --- ");

easyconsole.doit(number, "info");
easyconsole.doit(string, "info");
easyconsole.doit(json, "info");
easyconsole.doit(array, "info");
easyconsole.doit(boolean, "info");
easyconsole.doit(undef, "info");
easyconsole.doit(func, "info");

easyconsole.doit("---- level & opts logging --- ");

let opts2 = {
  environment: "dev",
  date: false,
  header: false,
  headerlevel: "error"
};

easyconsole.doit(number, "info", opts2);
easyconsole.doit(string, "info", opts2);
easyconsole.doit(json, "info", opts2);
easyconsole.doit(array, "info", opts2);
easyconsole.doit(boolean, "info", opts2);
easyconsole.doit(undef, "info", opts2);
easyconsole.doit(func, "info", opts2);
