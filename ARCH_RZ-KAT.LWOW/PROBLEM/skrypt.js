var fs = require("fs");
var SYG_JSON = WczytajJSON("SYGtmp.json");

for (var i = 0; i < SYG_JSON.length; i++) {
        var OBIEKTzSYG_JSON = SYG_JSON[i];
        OBIEKTzSYG_JSON.TEMAT = ["Księgi metrykalne", "rzymskokatolickie", "archidiecezjia lwowska", "(1604-1945)"];
        var parametr = OBIEKT_DlaKazdegoParametru(OBIEKTzSYG_JSON.WSAD);
        var propName = parametr.Nazwa;
        var propVal = parametr.Wartosc;
        SYGjson_Zamiana_ODiDO(propVal, Tablica_PozycjeSzukanegoElementu(propVal, "od")); 
        //(Tablica, TablicaPozycji(Tablica, SzukanyElement))          
}
var SYG_JSON_NOWY = SYG_JSON;
ZapiszJSON("TEST.json", SYG_JSON_NOWY);


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
function OBIEKT_DlaKazdegoParametru(zObiektu) {
        for (var prop in zObiektu) {
                return {
                        Nazwa: prop,
                        Wartosc: zObiektu[prop]
                }
        }
}
function Tablica_PozycjeSzukanegoElementu(Tablica, SzukanyElement) {
        var PozycjeSzukanegoElementu = new Array();
        var i = 0;
        while (i < Tablica.length) {
                if (Tablica.indexOf(SzukanyElement, i) != -1) {
                        PozycjeSzukanegoElementu.push(Tablica.indexOf(SzukanyElement, i));
                        i = Tablica.indexOf(SzukanyElement, i) + 1;
                } else {
                        break;
                }
        }
        return PozycjeSzukanegoElementu;
} //7777
function SYGjson_Zamiana_ODiDO(Tablica, TablicaPozycji) {
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0
        var x = 0;
        var y = 0;
        var Zamienione_ODiDO = new Array();
        for (var i = 0; i < TablicaPozycji.length; i++) {
                a = TablicaPozycji[i];
                b = a + 1;
                c = a + 2;
                d = a + 3;
                x = propVal[d] - propVal[b] - 1;
                y = 1;
                while (y <= x) {                    //(Tablica, Wartosc)
                        Tablica_DodajElementNaKoniec(Zamienione_ODiDO, Tablica[b] + y);                         
                        y++;
                }
        }
        Tablica_KasujElementy(Tablica, TablicaPozycji); //(Tablica, TablicaPozycji)
        var TablicaPozycji_DO = Tablica_PozycjeSzukanegoElementu(Tablica, "do");
        Tablica_KasujElementy(Tablica, TablicaPozycji_DO);
        Tablica_DodajElementyNaKoniec(Tablica, Zamienione_ODiDO); //(Tablica, TablicaWartosci)
        Tablica_SortujLiczbyRosnaco(Tablica); //(Tablica)
}
function Tablica_DodajElementNaKoniec(Tablica, Wartosc) {
        return Tablica.push(Wartosc);
}
function Tablica_KasujElementy(Tablica, TablicaPozycji) {
        var z = 0;
        for (var i = 0; i < TablicaPozycji.length; i++) {
                Tablica_KasujElement(Tablica, TablicaPozycji[i] - z); //(Tablica, Pozycja)
                z++;
        }
        return;
}
function Tablica_KasujElement(Tablica, Pozycja) {
        return Tablica.splice(Pozycja, 1);
}
function Tablica_SortujLiczbyRosnaco(Tablica) {
        function MetodaSortowania(a, b) {
                return a - b
        }
        return Tablica.sort(MetodaSortowania);
}
