//var StartTime, HasPassed_teraz;
require("babel-core").transform("code", {
    presets: ["es2017"]
});
const fs = require('fs');
const path = require('path');
const T_folder = ["data", "scalanie", "CISSASGOT17III2017AGAD"];
const T_plik = ["CISSASGOT17III2017BAZA_AGAD_S_v0.0.1.json", "CISSASGOT17III2017BAZA_AGAD_StmpG_v0.0.1.json", "_WWW.json"];
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var ROBOCZY = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[0]));

var _WWW = new Array();

for (let value of ROBOCZY) {
    let linki = new Object();
    linki.WWW = value.WWW;
    linki.SYG = value.ID;
   _WWW.push(linki);
   delete(value.WWW);
}
ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[2], T_plik[2]), _WWW);
ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[2], T_plik[0]), ROBOCZY);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function WczytajJSON(IN_NAZWA) {
    return JSON.parse(fs.readFileSync(IN_NAZWA, 'utf8'));
}

function ZapiszJSON(OUT_NAZWA, DANE_OUT) {
    var NOWY = fs.createWriteStream(OUT_NAZWA, {
        flags: 'w'
    });
    NOWY.write(JSON.stringify(DANE_OUT));
    return;
}