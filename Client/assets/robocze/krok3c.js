require("babel-core").transform("code", {
    presets: ["es2017"]
});
require('console.table');
var easyTable = require('easy-table')
var fs = require('fs');
var path = require('path');
var T_folder = ["data", "scalanie"];
var T_plik = ["T_L.json", "T_S.json", "BAZA_CISSASGOT_v0.0.1.geojson", "BAZA_CISSASGOT_v0.0.1.json"]
var T_S = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[1]));

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


var WOLUMINY = new Array();
for (var _S in T_S) {
    var _id = new String((T_S[_S]).ID);
    var _opis = new Object((T_S[_S])._OPIS);
    var _info = new Object((T_S[_S])._INFO);
    var _urlZespolu = new String((T_S[_S])._WWW);
    var _urlIndexIMG = new String((T_S[_S])._IMGs);
    var _WOLUMIN = new Object();
    _WOLUMIN.ID = _id;
    _WOLUMIN.OPIS = _opis;
    var W_W_W = new Object();
    W_W_W.ZESPOL = _urlZespolu;
    if (_urlIndexIMG.length > 0) {
        var _SKANY = new Object();
        var _OPCJE = new Object();
        var opcja1 = "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])";
        var opcja2 = "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[5][n]+LINKI[8][0][v]";
        var opcja3 = "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[6][0]+LINKI[7][i]+LINKI[8][0][v]";
        var opcja4 = "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[6][1]+LINKI[7][i]+LINKI[8][1]";
        var opcja5 = "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[6][2]+LINKI[7][i]+LINKI[8][1]";
        _OPCJE.INDEKS_SKANOW = new String(opcja1);
        _OPCJE.INDEKS_DALSZE_STRONY = new String(opcja2);
        _OPCJE.STRONA_SKANU = new String(opcja3);
        _OPCJE.SKAN_XXS = new String(opcja4);
        _OPCJE.SKAN_XXL = new String(opcja5);
        _SKANY.OPCJE = _OPCJE;
        var _LINKI = new Array();
        var URL_t0 = decodeURI(_urlIndexIMG);
        var URL_t1 = URL_t0.slice(0, URL_t0.lastIndexOf("/"));
        var URL_t2 = URL_t1.slice(0, URL_t1.lastIndexOf("/"));
        var URL_t3 = URL_t2.slice(0, URL_t2.lastIndexOf("/"));
        var URL_t4 = URL_t3.slice(0, URL_t3.lastIndexOf("/"));
        var URL_t5 = URL_t4.slice(0, URL_t4.lastIndexOf("/") + 1);
        _LINKI.push(encodeURI(URL_t5));
        var URL_t6 = URL_t3.slice(URL_t5.length, URL_t4.length + 1);
        _LINKI.push(encodeURI(URL_t6));
        var URL_t7 = URL_t2.slice(URL_t4.length + 1, URL_t3.length + 1);
        _LINKI.push(encodeURI(URL_t7));
        var URL_t8 = URL_t1.slice(URL_t3.length + 1, URL_t2.length + 1);
        _LINKI.push(encodeURI(URL_t8));
        var URL_t9 = URL_t0.slice(URL_t2.length + 1, URL_t1.length + 1);
        _LINKI.push(URL_t9);
        var DALSZE_INDEKSY = new Array();
        _LINKI.push(DALSZE_INDEKSY);
        var TYP_POZYCJI = new Array();
        TYP_POZYCJI.push("pages/");
        TYP_POZYCJI.push("thumbnails/");
        TYP_POZYCJI.push("images/");
        _LINKI.push(TYP_POZYCJI);
        var NUMER_SKANU = new Array();
        _LINKI.push(NUMER_SKANU);
        var ROZSZERZENIE_PLIKU = new Array();
        var HTMvelHTML = new Array();
        HTMvelHTML.push(".htm");
        HTMvelHTML.push(".html");
        ROZSZERZENIE_PLIKU.push(HTMvelHTML);
        ROZSZERZENIE_PLIKU.push(".jpg");
        _LINKI.push(ROZSZERZENIE_PLIKU); 
        _SKANY.LINKI = _LINKI;
        W_W_W.SKANY = _SKANY;
    }

    _WOLUMIN.WWW = W_W_W;
    _WOLUMIN.INFO = _info;
    WOLUMINY.push(_WOLUMIN);
}










// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[1], "4_" + T_plik[1]), WOLUMINY);

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