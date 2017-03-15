var fs = require("fs");

/*  ----------------------- USTAWIENIA ------------------------  */
/* | */                                                     /* | */  
/* | */          // DANE WEJŚCIOWE Z PLIKÓW                 /* | */ 
/* | */      var GEO_PLIK = "GEO.json";                     /* | */
/* | */      var SYG_PLIK = "SYGtmp.json";                  /* | */
/* | */                                                     /* | */ 
/* | */          // DANE WYJŚCIOWE ZAPISZ JAKO PLIK         /* | */
/* | */      var ZAPISZ_JAKO = "GEOSYGtmp_slim.json";       /* | */
/* | */                                                     /* | */ 
/*  ----------------------- USTAWIENIA ------------------------  */


var GEO_JSON = JSON.parse(fs.readFileSync(GEO_PLIK, 'utf8'));
var SYG_JSON = JSON.parse(fs.readFileSync(SYG_PLIK, 'utf8'));

var bGEO = 0;
var aGEO = 0;
var xGEO = 0;
var yGEO = 0;
var pozycja_odSYG = 0;
var pozycja_doSYG = 0;
var odSYG = 0;
var doSYG = 0;
var xSYG = 0;
var ySYG = 0;

for (var i = 0; i < GEO_JSON.length; i++) {
        var OBIEKTzGEO_JSON = GEO_JSON[i];
        OBIEKTzGEO_JSON.MIEJSCE_ID = i+1;
        for (var j = 0; j < GEO_JSON[i].SYGNATURY.length; j++) {
                if (GEO_JSON[i].SYGNATURY.indexOf("od-do", j) > 0) {
                        bGEO = GEO_JSON[i].SYGNATURY.indexOf("od-do", j);
                        aGEO = bGEO - 1;
                        GEO_JSON[i].SYGNATURY.splice(bGEO, 1);
                        xGEO = GEO_JSON[i].SYGNATURY[bGEO] - GEO_JSON[i].SYGNATURY[aGEO] - 1;
                        yGEO = 1;
                        while (yGEO <= xGEO) {
                                GEO_JSON[i].SYGNATURY.splice(aGEO + yGEO, 0, GEO_JSON[i].SYGNATURY[aGEO] + yGEO);
                                yGEO++;
                        }
                }
        }
}

var GEO_JSON_NOWY = new Array();
for (var i = 0; i < GEO_JSON.length; i++) {
        for (var j = 0; j < GEO_JSON[i].SYGNATURY.length; j++) {
                var obiekt_w_GEO_JSON_NOWY = new Object();
                    obiekt_w_GEO_JSON_NOWY.MIEJSCE_ID = GEO_JSON[i].MIEJSCE_ID;
		    obiekt_w_GEO_JSON_NOWY.GDZIE = GEO_JSON[i].GDZIE;
                    obiekt_w_GEO_JSON_NOWY.COTO = GEO_JSON[i].COTO;
                    obiekt_w_GEO_JSON_NOWY.UWAGI = GEO_JSON[i].UWAGI;
                    obiekt_w_GEO_JSON_NOWY.SYGNATURA = GEO_JSON[i].SYGNATURY[j];	
                    GEO_JSON_NOWY.push(obiekt_w_GEO_JSON_NOWY);		
        }
}

for (var i = 0; i < SYG_JSON.length; i++) {
        var OBIEKTzSYG_JSON = SYG_JSON[i];
        var TABLICA_TEMAT = ["Księgi metrykalne", "rzymskokatolickie", "archidiecezjia lwowska", "(1604-1945)"];
        OBIEKTzSYG_JSON.TEMAT = TABLICA_TEMAT;
        for (var prop in SYG_JSON[i].WSAD) {
                var propName = prop;
                var propVal = SYG_JSON[i].WSAD[prop];
                var WYCINEK_SYG = SYG_JSON[i].WSAD[propName];
                for (var j = 0; j < WYCINEK_SYG.length; j++) {
                        if (WYCINEK_SYG.indexOf("od", j) >= 0) {
                                pozycja_odSYG = WYCINEK_SYG.indexOf("od", j);
                                pozycja_doSYG = pozycja_odSYG + 2;
                                odSYG = pozycja_odSYG + 1;
                                doSYG = pozycja_odSYG + 3;
                                xSYG = WYCINEK_SYG[doSYG] - WYCINEK_SYG[odSYG] - 1;
                                ySYG = 1;
                                WYCINEK_SYG.splice(pozycja_doSYG, 1);
                                while (ySYG <= xSYG) {
                                        WYCINEK_SYG.splice(odSYG + ySYG, 0, WYCINEK_SYG[odSYG] + ySYG);
                                        ySYG++;
                                }
                                WYCINEK_SYG.splice(pozycja_odSYG, 1);
                        }
                }
        }
}
var SYG_JSON_NOWY = SYG_JSON;
var GEOSYG_JSON = new Array();
var szukany_obiekt_w_SYG_JSON_NOWY_oSYGid = 0;
for (var i = 0; i < GEO_JSON_NOWY.length; i++) {
        szukany_obiekt_w_SYG_JSON_NOWY_oSYGid = GEO_JSON_NOWY[i].SYGNATURA;
        var znaleziony_obiekt_z_SYG_JSON_NOWY = SYG_JSON_NOWY.filter(function (e) {
                return e.SYGNATURA == szukany_obiekt_w_SYG_JSON_NOWY_oSYGid;
        });
        if (znaleziony_obiekt_z_SYG_JSON_NOWY != ""){
                var obiekt_w_GEOSYG_JSON = new Object();
                obiekt_w_GEOSYG_JSON.MIEJSCE_ID = GEO_JSON_NOWY[i].MIEJSCE_ID;
	        obiekt_w_GEOSYG_JSON.GDZIE = GEO_JSON_NOWY[i].GDZIE;
                obiekt_w_GEOSYG_JSON.COTO = GEO_JSON_NOWY[i].COTO;
                obiekt_w_GEOSYG_JSON.UWAGI = GEO_JSON_NOWY[i].UWAGI;
                obiekt_w_GEOSYG_JSON.PARAFIA = znaleziony_obiekt_z_SYG_JSON_NOWY[0].PARAFIA;
                obiekt_w_GEOSYG_JSON.DEKANAT = znaleziony_obiekt_z_SYG_JSON_NOWY[0].DEKANAT;
                obiekt_w_GEOSYG_JSON.TYP = znaleziony_obiekt_z_SYG_JSON_NOWY[0].TYP;
                obiekt_w_GEOSYG_JSON.WSAD = znaleziony_obiekt_z_SYG_JSON_NOWY[0].WSAD;
                obiekt_w_GEOSYG_JSON.JEZYK = znaleziony_obiekt_z_SYG_JSON_NOWY[0].JEZYK;
                obiekt_w_GEOSYG_JSON.LINK = znaleziony_obiekt_z_SYG_JSON_NOWY[0].LINK;
                obiekt_w_GEOSYG_JSON.INFO = znaleziony_obiekt_z_SYG_JSON_NOWY[0].INFO;
                obiekt_w_GEOSYG_JSON.MIKROFIL = znaleziony_obiekt_z_SYG_JSON_NOWY[0].MIKROFILM;
                obiekt_w_GEOSYG_JSON.TEMAT = znaleziony_obiekt_z_SYG_JSON_NOWY[0].TEMAT;
                obiekt_w_GEOSYG_JSON.SYGNATURA_ID = znaleziony_obiekt_z_SYG_JSON_NOWY[0].SYGNATURA;
                GEOSYG_JSON.push(obiekt_w_GEOSYG_JSON);
        }
}

var NOWY = fs.createWriteStream(ZAPISZ_JAKO, {flags: 'w'});
NOWY.write(JSON.stringify(GEOSYG_JSON));