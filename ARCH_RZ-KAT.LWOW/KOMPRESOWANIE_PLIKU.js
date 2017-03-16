var NAZW_PLIKU ="SYG";
var TAG_PLIKU = "_XXL"

var FOLDER = "DATA/IN/";
var TYP_PLIKU = ".json";

var fs = require("fs");
var BAZA = JSON.parse(fs.readFileSync(FOLDER+NAZW_PLIKU+TAG_PLIKU+TYP_PLIKU, "utf8"));
var NOWY = fs.createWriteStream(FOLDER+NAZW_PLIKU+TYP_PLIKU, {flags: "w"});
NOWY.write(JSON.stringify(BAZA));
