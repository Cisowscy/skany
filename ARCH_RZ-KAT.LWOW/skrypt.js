var fs = require("fs");


var LOC_JSON = WczytajJSON("DATA/IN/LOC.json");
var SYG_JSON = WczytajJSON("DATA/IN/SYG.json");
//var GPS_LOCJSON = WczytajJSON("GPS.LOCjson");




for (var i = 0; i < LOC_JSON.length; i++) {
        var OBIEKTzLOC_JSON = LOC_JSON[i];
        OBIEKTzLOC_JSON.MIEJSCE_ID = i + 1;
        LOCjson_Zamiana_OdDo(OBIEKTzLOC_JSON.SYGNATURY, Tablica_PozycjeSzukanegoElementu(OBIEKTzLOC_JSON.SYGNATURY, "od-do")); //(Tablica, TablicaPozycji(Tablica, SzukanyElement))
        //                  (Tablica, TablicaPozycji(Tablica, SzukanyElement))  
}
var LOC_JSON_NOWY = new Array();
for (var i = 0; i < LOC_JSON.length; i++) {
        var OBIEKTzLOC_JSON = LOC_JSON[i];
        Obiekty_Transfer01(LOC_JSON_NOWY, OBIEKTzLOC_JSON, "OBIEKTzLOC_JSON_NOWY");
}

for (var i = 0; i < SYG_JSON.length; i++) {
        var OBIEKTzSYG_JSON = SYG_JSON[i];
        OBIEKTzSYG_JSON.TEMAT = ["Księgi metrykalne", "rzymskokatolickie", "archidiecezjia lwowska", "(1604-1945)"];
        var parametr = OBIEKT_DlaKazdegoParametru(OBIEKTzSYG_JSON.WSAD);

        /* // Niestety poległem prubując zapętlić poniższe ify podobnie jak z z funkcją OBIEKT_DlaKazdegoParametru gdzie tak naprawdę udało mi się zrobić dla określonej liczby nieznanych parametrw, zamiast dla dowolnego niezależnie ile by ich było
                var Pn = ["Pn1", "Pn2", "Pn3", "Pn4", "Pn5", "Pn6", "Pn7", "Pn8", "Pn9"];
                var Pv = ["Pv1", "Pv2", "Pv3", "Pv4", "Pv5", "Pv6", "Pv7", "Pv8", "Pv9"];
                for (var j = 1; j < 5; j++) {
                        kolejneNAZWY(NAZWAzLICZBY(j, Pn), NAZWAzLICZBY(j, Pv));
                }
                function kolejneNAZWY(Pnx, Pvx) { //(Pn, Pv)
                        if (parametr.Pnx != "") {
                                console.log("parametr: " + parametr.Pnx+" --> wartosc: "+ parametr.Pvx);
                        } else {
                                console.log("dupa");
                        }
        } */

        if (parametr.Pn1 != "") {
                var propName = parametr.Pn1;
                var propVal = parametr.Pv1;
                // console.log(propName + " --> "+ propVal);
                SYGjson_Zamiana_ODiDO(propVal, Tablica_PozycjeSzukanegoElementu(propVal, "od"));
        }
        if (parametr.Pn2 != "") {
                var propName = parametr.Pn2;
                var propVal = parametr.Pv2;
                // console.log(propName + " --> "+ propVal);
                SYGjson_Zamiana_ODiDO(propVal, Tablica_PozycjeSzukanegoElementu(propVal, "od"));
        }
        if (parametr.Pn3 != "") {
                var propName = parametr.Pn3;
                var propVal = parametr.Pv3;
                //console.log(propName + " --> "+ propVal);
                SYGjson_Zamiana_ODiDO(propVal, Tablica_PozycjeSzukanegoElementu(propVal, "od"));
        }
        if (parametr.Pn4 != "") {
                var propName = parametr.Pn4;
                var propVal = parametr.Pv4;
                // console.log(propName + " --> "+ propVal);
                SYGjson_Zamiana_ODiDO(propVal, Tablica_PozycjeSzukanegoElementu(propVal, "od"));
        }
}
var SYG_JSON_NOWY = SYG_JSON;

// dla kolejnego elemntu z LOC_JSON_NOWY o danej sygnaturze, 
// przyporządkuj obiekt z SYG_JSON_NOWY o tej sygnaturze
// połączone elemnty umieść w LOCSYG_JSON

// elementy z LOC_JSON_NOWY dla ktrych nie udało się 
// przyporządkować obiekt z SYG_JSON_NOWY o tej sygnaturze
// umieść w error_LOCSYG_LOC_bez_SYG

// elementy z SYG_JSON_NOWY ktrenie posiadają lokalizacji
// umieść w error_LOCSYG_SYG_bez_LOC

var LOCSYG_JSON = new Array();
var error_LOC_bez_SYG_JSON = new Array();
var error_SYG_bez_LOC_JSON = new Array();

var lp_LOCSYG_JSON = 1;
var lp_error_LOC_bez_SYG_JSON = 1;
var lp_error_SYG_bez_LOC_JSON = 1;
var FILTR_SYGNATURY = 0;

for (var i = 0; i < LOC_JSON_NOWY.length; i++) {
        var DanyObiekt = LOC_JSON_NOWY[i];
        FILTR_SYGNATURY = DanyObiekt.SYGNATURA;
        var Znalezione = SYG_JSON_NOWY.filter(function (e) {
                return e.SYGNATURA == FILTR_SYGNATURY;
        });
        if (Znalezione != "") {
                var OBIEKT_zLOCSYG = new Object();
                OBIEKT_zLOCSYG.LP = lp_LOCSYG_JSON;
                OBIEKT_zLOCSYG.COTO = DanyObiekt.COTO;
                OBIEKT_zLOCSYG.MIEJSCE_ID = DanyObiekt.MIEJSCE_ID;
                OBIEKT_zLOCSYG.GDZIE = DanyObiekt.GDZIE;
                OBIEKT_zLOCSYG.UWAGI = DanyObiekt.UWAGI;
                OBIEKT_zLOCSYG.PARAFIA = Znalezione[0].PARAFIA;
                OBIEKT_zLOCSYG.DEKANAT = Znalezione[0].DEKANAT;
                OBIEKT_zLOCSYG.TYP = Znalezione[0].TYP;
                OBIEKT_zLOCSYG.WSAD = Znalezione[0].WSAD;
                OBIEKT_zLOCSYG.JEZYK = Znalezione[0].JEZYK;
                OBIEKT_zLOCSYG.LINK = Znalezione[0].LINK;
                OBIEKT_zLOCSYG.INFO = Znalezione[0].INFO;
                OBIEKT_zLOCSYG.MIKROFIL = Znalezione[0].MIKROFILM;
                OBIEKT_zLOCSYG.TEMAT = Znalezione[0].TEMAT;
                OBIEKT_zLOCSYG.SYGNATURA_ID = Znalezione[0].SYGNATURA;
                LOCSYG_JSON.push(OBIEKT_zLOCSYG);
                lp_LOCSYG_JSON++;
        } else {
                var OBIEKT_zLOCbezSYG = new Object();
                OBIEKT_zLOCbezSYG.LP = lp_error_LOC_bez_SYG_JSON;
                OBIEKT_zLOCbezSYG.COTO = DanyObiekt.COTO;
                OBIEKT_zLOCbezSYG.MIEJSCE_ID = DanyObiekt.MIEJSCE_ID;
                OBIEKT_zLOCbezSYG.GDZIE = DanyObiekt.GDZIE;
                OBIEKT_zLOCbezSYG.UWAGI = DanyObiekt.UWAGI;
                OBIEKT_zLOCbezSYG.SYGNATURA = DanyObiekt.SYGNATURA;
                error_LOC_bez_SYG_JSON.push(OBIEKT_zLOCbezSYG);
                lp_error_LOC_bez_SYG_JSON++;
        }
}


for (var i = 0; i < SYG_JSON_NOWY.length; i++) {
        var DanyObiekt = SYG_JSON_NOWY[i];
        FILTR_SYGNATURY = DanyObiekt.SYGNATURA;
        var Znalezione = LOC_JSON_NOWY.filter(function (e) {
                return e.SYGNATURA == FILTR_SYGNATURY;
        });
        if (Znalezione == "") {
                var OBIEKT_zSYGbezLOC = new Object();
                OBIEKT_zSYGbezLOC.LP = lp_error_SYG_bez_LOC_JSON;
                OBIEKT_zSYGbezLOC.PARAFIA = DanyObiekt.PARAFIA;
                OBIEKT_zSYGbezLOC.DEKANAT = DanyObiekt.DEKANAT;
                OBIEKT_zSYGbezLOC.TYP = DanyObiekt.TYP;
                OBIEKT_zSYGbezLOC.WSAD = DanyObiekt.WSAD;
                OBIEKT_zSYGbezLOC.JEZYK = DanyObiekt.JEZYK;
                OBIEKT_zSYGbezLOC.LINK = DanyObiekt.LINK;
                OBIEKT_zSYGbezLOC.INFO = DanyObiekt.INFO;
                OBIEKT_zSYGbezLOC.MIKROFIL = DanyObiekt.MIKROFILM;
                OBIEKT_zSYGbezLOC.TEMAT = DanyObiekt.TEMAT;
                OBIEKT_zSYGbezLOC.SYGNATURA_ID = DanyObiekt.SYGNATURA;
                error_SYG_bez_LOC_JSON.push(OBIEKT_zSYGbezLOC);
                lp_error_SYG_bez_LOC_JSON++;
        }
}

//console.log("ILOŚĆ ELEMENTÓW LOCSYG : "+LOCSYG_JSON.length);
//console.log("           LOC bez SYG : "+error_LOC_bez_SYG_JSON.length);
//console.log("           SYG bez LOC : "+error_SYG_bez_LOC_JSON.length);

ZapiszJSON("DATA/LOCSYG.json", LOCSYG_JSON);
ZapiszJSON_JesliPotrzeba("DATA/LOCbezSYG.json", error_LOC_bez_SYG_JSON);
ZapiszJSON_JesliPotrzeba("DATA/SYGbezLOC.json", error_SYG_bez_LOC_JSON);

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

function ZapiszJSON_JesliPotrzeba(OUT_NAZWA, DANE_OUT) {
        if (DANE_OUT.length > 0) {
                ZapiszJSON(OUT_NAZWA, DANE_OUT);
        }
}

function Tablica_DodajElement(Tablica, Pozycja, Wartosc) {
        return Tablica.splice(Pozycja, 0, Wartosc);
}

function Tablica_DodajElementNaKoniec(Tablica, Wartosc) {
        return Tablica.push(Wartosc);
}

function Tablica_DodajElementyNaKoniec(Tablica, TablicaWartosci) {
        for (var i = 0; i < TablicaWartosci.length; i++) {
                Tablica_DodajElementNaKoniec(Tablica, TablicaWartosci[i]); //(Tablica, Pozycja)
        }
        return;
}

function Tablica_KasujElement(Tablica, Pozycja) {
        return Tablica.splice(Pozycja, 1);
}

function Tablica_KasujElementy(Tablica, TablicaPozycji) {
        var z = 0;
        for (var i = 0; i < TablicaPozycji.length; i++) {
                Tablica_KasujElement(Tablica, TablicaPozycji[i] - z); //(Tablica, Pozycja)
                z++;
                //Tablica.splice(TablicaPozycji[i], 1);
        }
        return;
}

function Tablica_SortujLiczbyRosnaco(Tablica) {
        function MetodaSortowania(a, b) {
                return a - b
        }
        return Tablica.sort(MetodaSortowania);
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
}

function LOCjson_Zamiana_OdDo(Tablica, TablicaPozycji) {
        var a = 0;
        var b = 0;
        var c = 0;
        var x = 0;
        var y = 0;
        var Zamienione_OdDo = new Array();
        for (var i = 0; i < TablicaPozycji.length; i++) {
                b = TablicaPozycji[i];
                a = b - 1;
                c = b + 1;
                x = Tablica[c] - Tablica[a] - 1;
                y = 1;
                while (y <= x) {
                        Tablica_DodajElementNaKoniec(Zamienione_OdDo, Tablica[a] + y); //(Tablica, Wartosc)                        
                        y++;
                }
        }
        Tablica_KasujElementy(Tablica, TablicaPozycji); //(Tablica, TablicaPozycji)
        Tablica_DodajElementyNaKoniec(Tablica, Zamienione_OdDo); //(Tablica, TablicaWartosci)
        Tablica_SortujLiczbyRosnaco(Tablica); //(Tablica)
}

function Obiekty_Transfer01(NowaTablica, SS, NN) {
        for (var j = 0; j < SS.SYGNATURY.length; j++) {
                var NN = new Object();
                NN.MIEJSCE_ID = SS.MIEJSCE_ID;
                NN.GDZIE = SS.GDZIE;
                NN.COTO = SS.COTO;
                NN.UWAGI = SS.UWAGI;
                NN.SYGNATURA = SS.SYGNATURY[j];
                NowaTablica.push(NN);
        }
        return;
}

function OBIEKT_DlaKazdegoParametru(zObiektu) {
        var i = 1;
        for (var prop in zObiektu) {
                switch (i) {
                        case 1:
                                var PROPname1 = prop;
                                var PROPvalue1 = zObiektu[prop];
                                break;
                        case 2:
                                var PROPname2 = prop;
                                var PROPvalue2 = zObiektu[prop];
                                break;
                        case 3:
                                var PROPname3 = prop;
                                var PROPvalue3 = zObiektu[prop];
                                break;
                        case 4:
                                var PROPname4 = prop;
                                var PROPvalue4 = zObiektu[prop];
                                break;
                        default:
                                console.log('ERROR W INSTRUKCJI CASE PROBLEM z (i)');
                }
                i++;
        }
        if (typeof PROPname1 != "undefined") {
                var PnA = PROPname1;
                var PvA = PROPvalue1;
        } else {
                var PnA = "";
                var PvA = "";
        }
        if (typeof PROPname2 != "undefined") {
                var PnB = PROPname2;
                var PvB = PROPvalue2;
        } else {
                var PnB = "";
                var PvB = "";
        }
        if (typeof PROPname3 != "undefined") {
                var PnC = PROPname3;
                var PvC = PROPvalue3;
        } else {
                var PnC = "";
                var PvC = "";
        }
        if (typeof PROPname4 != "undefined") {
                var PnD = PROPname4;
                var PvD = PROPvalue4;
        } else {
                var PnD = "";
                var PvD = "";
        }
        return {
                Pn1: PnA,
                Pv1: PvA,
                Pn2: PnB,
                Pv2: PvB,
                Pn3: PnC,
                Pv3: PvC,
                Pn4: PnD,
                Pv4: PvD
        }
}

/* function NAZWAzLICZBY(liczba, TablicaNazw) {
        var NAZWA = "";
        while (liczba > 0) {
                NAZWA = TablicaNazw[(liczba % TablicaNazw.length) - 1] + NAZWA;
                liczba = Math.floor(liczba / TablicaNazw.length);
        }
        return NAZWA;
} */

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
                while (y <= x) {
                        Tablica_DodajElementNaKoniec(Zamienione_ODiDO, Tablica[b] + y); //(Tablica, Wartosc)                        
                        y++;
                }
        }
        Tablica_KasujElementy(Tablica, TablicaPozycji); //(Tablica, TablicaPozycji)
        var TablicaPozycji_DO = Tablica_PozycjeSzukanegoElementu(Tablica, "do");
        Tablica_KasujElementy(Tablica, TablicaPozycji_DO);
        Tablica_DodajElementyNaKoniec(Tablica, Zamienione_ODiDO); //(Tablica, TablicaWartosci)
        Tablica_SortujLiczbyRosnaco(Tablica); //(Tablica)
}
