var fs = require("fs");
var BAZA = JSON.parse(fs.readFileSync('SYGtmp.json', 'utf8'));
var p_od = 0;
var p_do = 0;
var wod = 0;
var wdo = 0;
var x = 0;
var y = 0;
for (var i = 0; i < BAZA.length; i++) {
        var OBIEKTzBAZA = BAZA[i];
        var TABLICA_TEMAT = ["Księgi metrykalne", "rzymskokatolickie", "archidiecezjia lwowska", "(1604-1945)"];
        OBIEKTzBAZA.TEMAT = TABLICA_TEMAT;
        for (var prop in BAZA[i].WSAD) {
                var propName = prop;
                var propVal = BAZA[i].WSAD[prop];
                var WYCINEK = BAZA[i].WSAD[propName];
                for (var j = 0; j < WYCINEK.length; j++) {
                        if (WYCINEK.indexOf("od", j) >= 0) {
                                p_od = WYCINEK.indexOf("od", j);
                                p_do = p_od + 2;
                                wod = p_od + 1;
                                wdo = p_od + 3;
                                x = WYCINEK[wdo] - WYCINEK[wod] - 1;
                                y = 1;
                                WYCINEK.splice(p_do, 1);
                                while (y <= x) {
                                        WYCINEK.splice(wod + y, 0, WYCINEK[wod] + y);
                                        y++;
                                }
                                WYCINEK.splice(p_od, 1);
                        }
                }
        }
}
var NOWY = fs.createWriteStream("SYGtmp_WSADOWY_slim.json", {flags: 'w'});
NOWY.write(JSON.stringify(BAZA));
