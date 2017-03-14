var fs = require("fs");
var BAZA_GEO = JSON.parse(fs.readFileSync('GEO_WSADOWY.json', 'utf8'));
var BAZA_SYG = JSON.parse(fs.readFileSync('SYGtmp_WSADOWY.json', 'utf8'));
var BAZA_GEOSYG = new Array();

var szukany_obiekt_oSYGid = 0;
for (var i = 0; i < BAZA_GEO.length; i++) {
        szukany_obiekt_oSYGid = BAZA_GEO[i].SYGNATURA;
        var znaleziony_obiekt = BAZA_SYG.filter(function (e) {
                return e.SYGNATURA == szukany_obiekt_oSYGid;
        });
        if (znaleziony_obiekt != ""){
                var POZYCJA = new Object();
                POZYCJA.MIEJSCE_ID = BAZA_GEO[i].MIEJSCE_ID;
	        POZYCJA.GDZIE = BAZA_GEO[i].GDZIE;
                POZYCJA.COTO = BAZA_GEO[i].COTO;
                POZYCJA.UWAGI = BAZA_GEO[i].UWAGI;
                POZYCJA.PARAFIA = znaleziony_obiekt[0].PARAFIA;
                POZYCJA.DEKANAT = znaleziony_obiekt[0].DEKANAT;
                POZYCJA.TYP = znaleziony_obiekt[0].TYP;
                POZYCJA.WSAD = znaleziony_obiekt[0].WSAD;
                POZYCJA.JEZYK = znaleziony_obiekt[0].JEZYK;
                POZYCJA.LINK = znaleziony_obiekt[0].LINK;
                POZYCJA.INFO = znaleziony_obiekt[0].INFO;
                POZYCJA.MIKROFIL = znaleziony_obiekt[0].MIKROFILM;
                POZYCJA.TEMAT = znaleziony_obiekt[0].TEMAT;
                POZYCJA.SYGNATURA_ID = znaleziony_obiekt[0].SYGNATURA;
                BAZA_GEOSYG.push(POZYCJA);
                //console.log(znaleziony_obiekt[0].PARAFIA);
        }
}

var NOWY = fs.createWriteStream("GEOSYGtmp_WSADOWY_slim.json", {flags: 'w'});
NOWY.write(JSON.stringify(BAZA_GEOSYG));
