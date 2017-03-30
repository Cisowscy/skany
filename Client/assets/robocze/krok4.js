require("babel-core").transform("code", {
    presets: ["es2017"]
});
var fs = require('fs');
var path = require('path');
require('console.table');
var T_folder = ["data","scalanie"];
var T_plik = ["HASLA_GEOGRAFICZNE.json", "HASLA_SYGNATUROWE.json", "CISSASGOT17III2017BAZA_AGAD_G_v0.0.1.geojson", "CISSASGOT17III2017BAZA_AGAD_GtmpS_v0.0.1.json", "CISSASGOT17III2017BAZA_AGAD_S_v0.0.1.json", "CISSASGOT17III2017BAZA_AGAD_StmpG_v0.0.1.json"];

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var czas_zero = new Date().getTime();
console.log("START");
console.log(" Krok 1 a. Wszytywanie pliku HASLA_GEOGRAFICZNE.json");
var T_GEO = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[0]));
console.log("wczytano");
console.log(" Krok 1 b. Wszytywanie pliku HASLA_SYGNATUROWE.json");
var T_SYG = WczytajJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[1]));
console.log("wczytano");

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// dodanie roboczego licznika pozwalającego wyciągnąć wnioski
for (var GEO in T_GEO) {
    var licznik_metody_get = 0;
    (T_GEO[GEO]).TMP_ilosc_GET = licznik_metody_get;
}
console.log(" Krok 1 c : liczenie ilości operacji ");
uplynelo(czas_zero).czasu;
var STATx = 1;
var STATZ = 1;
for (var i in T_SYG) {
    for (var j in T_GEO) {
        STATZ++;
    }
}
var STAT001SYG = STATx;
var STATxSYG = STATx;
var STAT100SYG = STATZ;
for (var n in T_GEO) {
    for (var m in T_SYG) {
        STATZ++;
    }
}
var STAT001GEO = STATx;
var STATxGEO = STATx;
var STAT100GEO = STATZ - STAT100SYG;
var STAT100 = STATZ;
console.log(STAT100);

console.log(" Krok 2 : ROZPOCZĘCIE DODAWANIA DO SYGNATUR - LOKALIZACJI zostanie wykonane " + STAT100SYG + "operacji");
uplynelo(czas_zero).czasu;

// scalanie tablicy dodając do tablicy SYG, tablice GEO - lokalizacji. - docelowo tak powstanie plik  CISSASGOT17III2017BAZA_AGAD_S_v0.0.1.json
for (var SYG in T_SYG) {
    var szukana_SYG = (T_SYG[SYG]).ID;
    var _ZNALEZIONE = new Array();
    var L_ZNAL = 1;
    for (var GEO in T_GEO) {
        var badana_SYG = (T_GEO[GEO]).ID;
        var licznik_metody_get = (T_GEO[GEO]).TMP_ilosc_GET;
        if (badana_SYG == szukana_SYG) {
            licznik_metody_get++;
            (T_GEO[GEO]).TMP_ilosc_GET = licznik_metody_get;
            _ZNALEZIONE.push(T_GEO[GEO]);
            console.log(" ");
            console.log((100 / (STAT100SYG / STATxSYG)).toFixed(2) + " % wykonano ");
            uplynelo(czas_zero).czasu;
            L_ZNAL++;
        }
        STATxSYG++;
    }
    console.log("Krok 3." + parseInt(SYG, 10) + 1 + " z " + T_SYG.length + " DODAWANIE LOKALIZACJI DO BAZY SYGNATUR   ||  szukana sygnatur " + szukana_SYG + " została znaleziona " + _ZNALEZIONE.length + " razy");
    (T_SYG[SYG]).LOKALIZACJE = _ZNALEZIONE;
    console.log("dodano");
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
uplynelo(czas_zero).czasu;
console.log("Krok 4. ROZPOCZĘTO ZAPISYWANIE NOWEGO PLIKU SYGNATUR Z LOKALIZACJAMI (CISSASGOT17III2017BAZA_AGAD_S_v0.0.1.json)");
ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[4]), T_SYG);
console.log("zapisano");
uplynelo(czas_zero).czasu;
console.log("Krok 5. ROZPOCZĘTO ZAPISYWANIE NOWEGO ROBOCZEGO Z LOKALIZACJAMI (CISSASGOT17III2017BAZA_AGAD_StmpG_v0.0.1.json)  --  zawiera on miedzy innymi statystke ile razy dana miejscowosc zostala pobrana do bazy sygnatur");
ZapiszJSON(path.resolve(__dirname, T_folder[0], T_folder[1], T_plik[5]), T_GEO);
console.log("zapisano");
uplynelo(czas_zero).czasu;
console.log("KONIEC");
console.log(STAT100);

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

function uplynelo(CZAS_START) {
    var CZAS_TERAZ = new Date().getTime();
    var minelo = CZAS_TERAZ - CZAS_START;
    var t_ms = minelo;
    var t_s = t_ms / 1000;
    var t_min = t_s / 60;
    var t_ks = t_min / 15;
    var t_h = t_ks / 4;
    var t_d = t_h / 24;
    var t_t = t_d / 7;
    var tz_M = t_t / 4; //  28 dni  (bez 2 i 7/16 dnia )
    var tz_K = tz_M / (13 / 4); // 13 tygodni = 91 dni (bez 5/8 dnia)
    var tz_R = tz_K / 4; // 52 tygodnie = 364 dni (bez 1 i 1/4 dnia)
    var tz_W = tz_R / 100; // 5200 tygodni = 100 lat (bez 17 tygodni i 6 dni)
    //--------------------------------------------
    var t_M = t_d / (487 / 16); // (30 dni i 7/16 dnia)
    var t_K = t_M / 4; // (91 dni i 5/16 dnia) 
    var t_R = t_K / 4; // (365 dni i 1/4 dnia)
    var t_W = t_R / 100; // (36525 dni)
    var T_minelo = [
        [t_ms, "milisekunda", ""],
        [t_s, "sekunda", ""],
        [t_min, "minuta", ""],
        [t_ks, "kwadrans", ""],
        [t_h, "godzina", ""],
        [t_d, "doba", ""],
        [t_t, "tydzien", ""],
        [t_M, "(39i7/16 d) = miesiec ~ (4 t)", tz_M],
        [t_K, "(91i5/16 d) = kwartał ~ (13 t)", tz_K],
        [t_R, "(365i1/4 d) = rok ~ (52 t)", tz_R],
        [t_W, "(36525 d) = wiek ~ (5200 t)", tz_W]
    ];
    //console.table("upłyneło..",["rownowazna ilosc", "jednostka czasu"], T_minelo);
    // console.log("UPŁYNEŁO..");
    // console.table(["rownowazna wartosc", "jednostka czasu", "zaokronglone wartosci"], T_minelo);
    var T_czas = czas_arytmetyczny(tz_W);
    // czas arytmetyczny - ubytek wzgledem obecnego kalendarza
    function czas_arytmetyczny(w) {
        var czas = new Object();
        czas.WIEKOW = F(w).c;
        czas.LAT = F((F(w).x) * 100).c;
        czas.KWARTALOW = F((F((F(w).x) * 4).x) * 100).c;
        czas.MIESIECY = F((F((F((F(w).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.TYGODNI = F((F((F((F((F(w).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.DNI = F((F((F((F((F((F(w).x) * 7).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.GODZIN = F((F((F((F((F((F((F(w).x) * 24).x) * 7).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.KWADRANSOW = F((F((F((F((F((F((F((F(w).x) * 4).x) * 24).x) * 7).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.MINUT = F((F((F((F((F((F((F((F((F(w).x) * 15).x) * 4).x) * 24).x) * 7).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.SEKUND = F((F((F((F((F((F((F((F((F((F(w).x) * 60).x) * 15).x) * 4).x) * 24).x) * 7).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        czas.MILISEKUND = F((F((F((F((F((F((F((F((F((F((F(w).x) * 1000).x) * 60).x) * 15).x) * 4).x) * 24).x) * 7).x) * 4).x) * (13 / 4)).x) * 4).x) * 100).c;
        return czas;
    }
    // czas dokladny - nadwyzka wzgledem obecnego kalendarzowego
    //console.table(czas_astronomiczny (t_W));
    function F(l) {
        var l1 = l;
        var l2 = parseInt(l1);
        var l3 = l1 - l2;
        return {
            c: l2,
            x: l3
        }
    }
    return {
        przelicznik_czasu: T_minelo,
        czasu: console.table(T_czas)
    }
}