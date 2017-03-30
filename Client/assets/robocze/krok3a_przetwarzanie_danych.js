require("babel-core").transform("code", {
  presets: ["es2017"]
});
require('console.table');
var easyTable = require('easy-table')
var fs = require('fs');
var path = require('path');
var adresIN = ["data", "roboczy", "scalanie"];
var plikIN = "roboczy02.json"
var Ta_T = WczytajJSON(path.resolve(__dirname, adresIN[0], adresIN[1], plikIN));
var T_S = new Array();
var T_L = new Array();
for (var Tz in Ta_T){
    for (var G in ((Ta_T[Tz])[0]) ){
        T_L.push(((Ta_T[Tz])[0])[G]);  
    }
    for (var S in ((Ta_T[Tz])[1]) ){
        delete((((Ta_T[Tz])[1])[S]).skany);    
        
        T_S.push(((Ta_T[Tz])[1])[S]); 
} 
}
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
ZapiszJSON(path.resolve(__dirname, adresIN[0], adresIN[2], "T_S.json"), T_S);
ZapiszJSON(path.resolve(__dirname, adresIN[0], adresIN[2], "T_L.json"), T_L);