var NAZW_PLIKU ="GEO";

var fs = require("fs");
var BAZA = JSON.parse(fs.readFileSync(NAZW_PLIKU+".json", "utf8"));
var NOWY = fs.createWriteStream(NAZW_PLIKU+"_slim.json", {flags: "w"});
NOWY.write(JSON.stringify(BAZA));
