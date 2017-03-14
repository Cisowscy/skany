var BAZA = [{
                "SYGNATURA": "12",
                "PARAFIA": "Baworów",
                "DEKANAT": "Tarnopol",
                "TYP": "Księga metrykalna",
                "WSAD": {
                        "FILIACJE": ["od", 1784, "do", 1860],
                        "KOICJE": ["od", 1784, "do", 1892],
                        "ZGONY": ["od", 1784, "do", 1882]
                },
                "JEZYK": ["lat", "pol"],
                "LINK": ["http://agadd.home.net.pl/metrykalia/301/sygn.%2012/indeks.htm", ""],
                "UWAGI": "*patrz - sygn. 5; przy wpisach dot. urodzeń wszyte dodatkowe dokumenty (wypisy, wyciągi); AGAD; (zs)",
                "MIKROFILM": 73808
        },
        {
                "SYGNATURA": "13",
                "PARAFIA": "Bełz",
                "DEKANAT": "Bełz",
                "TYP": "Ekstrakty z księgi metrykalnej",
                "WSAD": {
                        "POSWIADCZENIE": 1835,
                        "FILIACJE": [1834, 1835],
                        "KOICJE": [1834, 1835],
                        "ZGONY": [1834, 1835]
                },
                "JEZYK": ["lat"],
                "LINK": ["http://agadd.home.net.pl/metrykalia/301/sygn.%2013/indeks.htm", ""],
                "UWAGI": "niektóre z ww. wsi w przeciągu XIX i XX w. zmieniły swą przynależność parafialną; *Machnówek - od 1912 r. samodzielna parafia wyodrębniona z par. Bełz m. in. z wsiami Staje, Worochta; akta przekazane do AGAD z AP - Przemyśl w 1993 r.",
                "MIKROFILM": 73809
        }];


//var fs = require("fs");
//var BAZA = JSON.parse(fs.readFileSync('SYG.json', 'utf8'));

var TYPY = Object.getOwnPropertyNames(BAZA[0].WSAD);
var TYP = TYPY[1];
console.log(TYP);  // prawidłowo wyświetla: = KOICJE

var bezwzglednyGET = BAZA[0].WSAD.KOICJE; // to oczywiście działa
var wzglednyGET = BAZA[0].WSAD.TYP; // a tu dostaję wynik = undefined ?? dlaczego ?? skoro konsola prawidłowo zwraca wartość spod TYP - jak użyć jej jako nazwy Obiektu ? 

console.log("to powinoo być tożasme: " + bezwzglednyGET+" == "+wzglednyGET)

 /* 
 var p_od = 0; var p_do = 0; var od = 0; var do = 0; var x = 0; var y = 0;
 for (var i = 0; i < BAZA.length; i++) {
         var TYPY = Object.getOwnPropertyNames(BAZA[i].WSAD);
         for (var j = 0; j < TYPY.length; j++) {
                 var TYP = TYPY[j];
                 for (var k = 0; k < BAZA[i].WSAD.TYP.length; k++) {
                         if (BAZA[i].WSAD.TYP.indexOf("od", k) > 0) {
                                 p_od = BAZA[i].WSAD.TYP.indexOf("od", k);
                                 p_do = p_od + 2;
                                 od = p_od + 1;
                                 do = p_od +3;
                                 x = BAZA[i].WSAD.TYP[do] - BAZA[i].WSAD.TYP[od] -1;
                                 y = 1;
                                 BAZA[i].WSAD.TYP.splice(p_do, 1);                                 
                                 while (y <= x) {
                                       BAZA[i].WSAD.TYP.splice(od + y, 0, BAZA[i].WSAD.TYP[od] + y);
                                       y++;  
                                 }
                                 BAZA[i].WSAD.TYP.splice(p_od, 1);
                         }                        
                 }        
        }
} 
var NOWY = fs.createWriteStream("BAZA_GEO.json", {flags: 'w'});
NOWY.write(JSON.stringify(BAZA));
*/

