var tz = require("timezone/index");


(function () {
  var d = Date.now();
  //console.log(tz(d, "%m-%d-%Y %I:%M:%S %P"));
   for (var i = 0; i < 1000000; i++) tz(d, "%m-%d-%Y %I:%M:%S %P");
})();
