var NAZW_PLIKU ="GEO";
var TYP_PLIKU = ".json";

var fs = require("fs");
var BAZA = JSON.parse(fs.readFileSync(NAZW_PLIKU+TYP_PLIKU, "utf8"));
var NOWY = fs.createWriteStream(NAZW_PLIKU+"_slim"+TYP_PLIKU, {flags: "w"});
NOWY.write(JSON.stringify(BAZA));
