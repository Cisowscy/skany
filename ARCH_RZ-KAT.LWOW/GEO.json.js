var fs = require("fs");
var BAZA = JSON.parse(fs.readFileSync('GEO.json', 'utf8'));
var b = 0;
var a = 0;
var x = 0;
for (var i = 0; i < BAZA.length; i++) {
        var OBIEKTzBAZA = BAZA[i];
        OBIEKTzBAZA.MIEJSCE_ID = i+1;
        for (var j = 0; j < BAZA[i].SYGNATURY.length; j++) {
                if (BAZA[i].SYGNATURY.indexOf("od-do", j) > 0) {
                        b = BAZA[i].SYGNATURY.indexOf("od-do", j);
                        a = b - 1;
                        BAZA[i].SYGNATURY.splice(b, 1);
                        x = BAZA[i].SYGNATURY[b] - BAZA[i].SYGNATURY[a] - 1;
                        y = 1;
                        while (y <= x) {
                                BAZA[i].SYGNATURY.splice(a + y, 0, BAZA[i].SYGNATURY[a] + y);
                                y++;
                        }
                }
        }
}
var BAZA2 = new Array();
for (var i = 0; i < BAZA.length; i++) {
        for (var j = 0; j < BAZA[i].SYGNATURY.length; j++) {
                var POZYCJA = new Object();
                    POZYCJA.MIEJSCE_ID = BAZA[i].MIEJSCE_ID;
		    POZYCJA.GDZIE = BAZA[i].GDZIE;
                    POZYCJA.COTO = BAZA[i].COTO;
                    POZYCJA.UWAGI = BAZA[i].UWAGI;
                    POZYCJA.SYGNATURA = BAZA[i].SYGNATURY[j];	
                    BAZA2.push(POZYCJA);		
        }
}
var NOWY = fs.createWriteStream("GEO_WSADOWY_slim.json", {flags: 'w'});
NOWY.write(JSON.stringify(BAZA2));
