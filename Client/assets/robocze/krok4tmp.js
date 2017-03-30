
require('console.table');



// Remember when we started
var czas_zero = new Date().getTime();
//___________________________________________
var i, output = "";

for (i = 1; i <= 1e2; i++) {
    var time_now = new Date().getTime();
    output += i;
    //console.log(now - start);
}
// Remember when we finished
var time_end = new Date().getTime();

// Now calculate and output the difference    


console.table(uplynelo(czas_zero).czasu);






function uplynelo(CZAS_START) {
    var CZAS_TERAZ = new Date().getTime();
    var minelo = CZAS_TERAZ - CZAS_START;
    var t_ms = parseInt(minelo, 10);
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
        czasu: T_czas
    }
}