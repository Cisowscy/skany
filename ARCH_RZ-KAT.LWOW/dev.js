var fs = require("fs");

/*  ----------------------- USTAWIENIA ------------------------  */
/* | */                                                     /* | */  
/* | */          // DANE WEJŚCIOWE Z PLIKÓW                 /* | */ 
/* | */      var GEOSYG_PLIK = "GEOSYGtmp.json";            /* | */
/* | */                                                     /* | */ 
/* | */          // DANE WYJŚCIOWE ZAPISZ JAKO PLIK         /* | */
/* | */      var ZAPISZ_JAKO = "ZZZ_slim.json";             /* | */
/* | */                                                     /* | */ 
/*  ----------------------- USTAWIENIA ------------------------  */

var GEOSYG_JSON = JSON.parse(fs.readFileSync(GEOSYG_PLIK, 'utf8'));





var kasujGEOSYG =0;

var GEOSYG_JSON_NOWY = new Array();
var szukany_obiekt_w_GEOSYG_JSON = 0;
//for (var i = 0; i < GEOSYG_JSON.length; i++) { 
//while (GEOSYG_JSON.length>0) {

        szukany_obiekt_w_GEOSYG_JSON = GEOSYG_JSON[0].MIEJSCE_ID;                
        var znalezione_obiekty_z_GEOSYG_JSON = GEOSYG_JSON.filter(function (e) {
                return e.MIEJSCE_ID == szukany_obiekt_w_GEOSYG_JSON;
        });
        //console.log(GEOSYG_JSON[0].MIEJSCE_ID);
        //console.log("-------------------------------------------");
        

        if (znalezione_obiekty_z_GEOSYG_JSON.length > 1) {
                // operacje
               // console.log("były "+znalezione_obiekty_z_GEOSYG_JSON.length+" obiekty o ID_MIEJSA = "+znalezione_obiekty_z_GEOSYG_JSON[0].MIEJSCE_ID);
                for (var j = 0; j < znalezione_obiekty_z_GEOSYG_JSON.length; j++) { 
                        kasujGEOSYG = znalezione_obiekty_z_GEOSYG_JSON[j].LP-1;
                        GEOSYG_JSON.splice(kasujGEOSYG, 1);
                }
               
        var TTEST = GEOSYG_JSON.filter(function (e) {
                return e.MIEJSCE_ID == 25;
        });
console.log(TTEST.length);

        } else if (znalezione_obiekty_z_GEOSYG_JSON.length = 1) {
                // operacje                
               for (var j = 0; j < znalezione_obiekty_z_GEOSYG_JSON.length; j++) { 
                        kasujGEOSYG = znalezione_obiekty_z_GEOSYG_JSON[j].LP-1;
                        GEOSYG_JSON.splice(kasujGEOSYG, 1);
                }
        }
        //console.log(GEOSYG_JSON[0].MIEJSCE_ID);
//}
        
        //console.log(znalezione_obiekty_z_GEOSYG_JSON.length);

        /* */
//}
         




/*
        if (znalezione_obiekty_z_GEOSYG_JSON != ""){
                var obiekt_w_GEOSYG_JSON = new Object();
                obiekt_w_GEOSYG_JSON.COTO = GEOSYG_JSON[i].COTO;
                obiekt_w_GEOSYG_JSON.MIEJSCE_ID = GEOSYG_JSON[i].MIEJSCE_ID;
	        obiekt_w_GEOSYG_JSON.GDZIE = GEOSYG_JSON[i].GDZIE;                
                obiekt_w_GEOSYG_JSON.UWAGI = GEOSYG_JSON[i].UWAGI;
                obiekt_w_GEOSYG_JSON.PARAFIA = znalezione_obiekty_z_GEOSYG_JSON[0].PARAFIA;
                obiekt_w_GEOSYG_JSON.DEKANAT = znalezione_obiekty_z_GEOSYG_JSON[0].DEKANAT;
                obiekt_w_GEOSYG_JSON.TYP = znalezione_obiekty_z_GEOSYG_JSON[0].TYP;
                obiekt_w_GEOSYG_JSON.WSAD = znalezione_obiekty_z_GEOSYG_JSON[0].WSAD;
                obiekt_w_GEOSYG_JSON.JEZYK = znalezione_obiekty_z_GEOSYG_JSON[0].JEZYK;
                obiekt_w_GEOSYG_JSON.LINK = znalezione_obiekty_z_GEOSYG_JSON[0].LINK;
                obiekt_w_GEOSYG_JSON.INFO = znalezione_obiekty_z_GEOSYG_JSON[0].INFO;
                obiekt_w_GEOSYG_JSON.MIKROFIL = znalezione_obiekty_z_GEOSYG_JSON[0].MIKROFILM;
                obiekt_w_GEOSYG_JSON.TEMAT = znalezione_obiekty_z_GEOSYG_JSON[0].TEMAT;
                obiekt_w_GEOSYG_JSON.SYGNATURA_ID = znalezione_obiekty_z_GEOSYG_JSON[0].SYGNATURA;
                GEOSYG_JSON.push(obiekt_w_GEOSYG_JSON);
        } */
//}










//var NOWY = fs.createWriteStream(ZAPISZ_JAKO, {flags: 'w'});
//NOWY.write(JSON.stringify(GEOSYG_JSON_NOWY));
