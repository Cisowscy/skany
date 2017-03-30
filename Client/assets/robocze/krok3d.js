require("babel-core").transform("code", {
    presets: ["es2017"]
});
require('console.table');
var easyTable = require('easy-table')
var fs = require('fs');
var path = require('path');
var T_folder = ["data", "scalanie"];
var T_plik = ["2_T_L.json", "2_T_S.json", "BAZA_CISSASGOT_v0.0.1.geojson", "BAZA_CISSASGOT_v0.0.1.json"]
var T_L = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[0]));

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

var LOKALIZACJE = new Array();
var lp0 =1;
for (var _L in T_L) {
   // console.log(parseInt(_L, 10));
    var lp1 = parseInt(_L, 10)+1;
    var _lokalizacja = ((T_L[_L]).polozenie);    

    for (var _ID in ((T_L[_L]).ID)) {
        var lp2 = parseInt(_ID, 10)+1;
        var _MIEJSCE = new Object();
        _MIEJSCE.ID = new String(((T_L[_L]).ID)[_ID]);
        _MIEJSCE.MIEJSCE = new String(_lokalizacja);
        var _lp = new Array();
        _lp.push(new Number(lp0));
        _lp.push(new Number(lp1));
        _lp.push(new Number(lp2));
        _MIEJSCE.LP = _lp;
        LOKALIZACJE.push(_MIEJSCE);
        lp0++;
    }
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[1], "4_" + T_plik[0]), LOKALIZACJE);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

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