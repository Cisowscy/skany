require("babel-core").transform("code", {
  presets: ["es2017"]
});
require('console.table');
var easyTable = require('easy-table')
var fs = require('fs');
var path = require('path');
var T_folder = ["data", "scalanie"];
var T_plik = ["T_L.json","T_S.json", "BAZA_CISSASGOT_v0.0.1.geojson", "BAZA_CISSASGOT_v0.0.1.json"]
var T_L = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[0]));
var T_S = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[1]));

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

for (var L in T_L) {
 var ID_Z_inL = (T_L[L])._ID.Z;
 delete((T_L[L])._ID.Z); 
 var ID_L = new Array();
 for ( var SinL in ((T_L[L])._ID.S)){
     var ID_S_inL = ((T_L[L])._ID.S)[SinL];
     var L_ID = "Z"+ID_Z_inL+"S"+ID_S_inL;
     ID_L.push(L_ID);
 }
delete((T_L[L])._ID);
(T_L[L])["ID"] = ID_L;
}

for (var _S in T_S) {
    var ID_Z_inS = (T_S[_S])._ID.Z;    
    var ID_S_inS = (T_S[_S])._ID.S;
try {     
    var ID_O_inS = (T_S[_S])._ID.O;
  } catch (e) {
    var ID_O_inS = null;
  }
    delete((T_S[_S])._ID);
    var S_ID = "Z"+ID_Z_inS+"S"+ID_S_inS;
    (T_S[_S])["ID"] = S_ID;
    (T_S[_S])._INFO.nrZESPOLU = ID_Z_inS+"."+ID_O_inS;
}










// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[1], "2_"+T_plik[0]), T_L);
ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[1], "2_"+T_plik[1]), T_S);

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
