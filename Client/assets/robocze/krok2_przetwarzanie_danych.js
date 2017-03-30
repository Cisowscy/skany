require("babel-core").transform("code", {
  presets: ["es2017"]
});
require('console.table');
var easyTable = require('easy-table')
var fs = require('fs');
var path = require('path');
var adresIN = ["data", "roboczy"];
var plikIN = "roboczy01.json"
var T_O = WczytajJSON(path.resolve(__dirname, adresIN[0], adresIN[1], plikIN));
const regex = / /g;
const regex_allLanguage_words = /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+/g;
const regex_przedzialy_liczbowe_i_liczby = /[0-9]+|-/g;
const regex_liczby = /[0-9]+/g;

var tmpText = "Düsseldorf, Köln, Москва, 北京市, إسرائيل !@#$ 123, śnieg";

var nowyJSON_Lokalizacje_bez_sygnatury = new Array();
//console.log((_string("4322-234, 23:", regex_allLanguage_words).TablicaWyrazow).length);

for (var Z in T_O) {

  for (var L in (T_O[Z])[1]) {
    // przenoszenie wyrazow z sygnatur do opisu polozenia miejscowosci
    var tekst_sygnatury = new String((((T_O[Z])[1])[L]).Sygnatury);
    var tekst_polozenie = new String((((T_O[Z])[1])[L]).polozenie);
    delete((((T_O[Z])[1])[L]).Sygnatury);
    delete((((T_O[Z])[1])[L]).polozenie);
    if (((_string(tekst_sygnatury, regex_allLanguage_words).TablicaWyrazow).length) > 0) {
      var wyraz_z_tekst_sygnatury = _string(tekst_sygnatury, regex).WytnijPoczatkoweZdanie;
      var sygnatury_z_tekst_sygnatury = _string(tekst_sygnatury, regex).WytnijKoncoweLiczby;
      (((T_O[Z])[1])[L]).Sygnatury = sygnatury_z_tekst_sygnatury;
      (((T_O[Z])[1])[L]).polozenie = tekst_polozenie + ", " + wyraz_z_tekst_sygnatury;
    } else {
      (((T_O[Z])[1])[L]).Sygnatury = tekst_sygnatury;
      (((T_O[Z])[1])[L]).polozenie = tekst_polozenie;
    }
    tekst_sygnatury = (((T_O[Z])[1])[L]).Sygnatury;
    delete((((T_O[Z])[1])[L]).Sygnatury);
    // sprawdzenie czy sygnatura posiada inne znaki niż "0-9", " ", ",", "-"
    var inne_znaki_z_tekst_sygnatury = tekst_sygnatury.replace(/[0-9]|-| |,/g, "");
    if (inne_znaki_z_tekst_sygnatury.length > 0) {
      var sygnatury_zawierajace_inne_znaki = tekst_sygnatury;
      sygnatury_zawierajace_inne_znaki = sygnatury_zawierajace_inne_znaki.replace(".", ",");
      sygnatury_zawierajace_inne_znaki = sygnatury_zawierajace_inne_znaki.replace(")", "");
      (((T_O[Z])[1])[L]).Sygnatury = new String(sygnatury_zawierajace_inne_znaki);
    } else {
      (((T_O[Z])[1])[L]).Sygnatury = new String(tekst_sygnatury);
    }
    // Konwertowanie sygnatur z "12-15, 25" na ["12", "-", "15", "25"] 
    tekst_sygnatury = (((T_O[Z])[1])[L]).Sygnatury;
    delete((((T_O[Z])[1])[L]).Sygnatury);
    var tablica_sygnatur = _string(tekst_sygnatury, regex_przedzialy_liczbowe_i_liczby).TablicaWyrazow;
    // Konwertowanie sygnatur z ["12", "-", "15", "25"] na ["12", "13", "14", "15", "25"] 
    var tablica_wyliczonych_sygnatur = new Array();
    tablica_sygnatur.forEach(function (element, index, array) {
      if (element == "-") {
        var a_ts = parseInt(tablica_sygnatur[index - 1], 10);
        var c_ts = parseInt(tablica_sygnatur[index + 1], 10);
        var i_tws = c_ts - a_ts - 1;
        while (i_tws > 0) {
          tablica_wyliczonych_sygnatur.push(c_ts - i_tws);
          i_tws--;
        }
      }
    });
    var dupa1 = tablica_sygnatur.join()
    var dupa2 = dupa1.replace("-", "");
    var dupa3 = _string(dupa2, regex_liczby).TablicaWyrazow;
    var dupa4 = dupa3.concat(tablica_wyliczonych_sygnatur);
    if (dupa4.length > 0) {
      dupa4.forEach(function (element, index, array) {
        dupa4[index] = parseInt(dupa4[index], 10);
      });
    }
    //sortowanie sygnatur rosnąco
    var dupa5 = dupa4.sort(compareNumbers);    
    (((T_O[Z])[1])[L]).Sygnatury =dupa5;
    // operacje na sygnatura dodawanie nr zespolu    
    var NR_ZESPOLU_zNazwyPliku = ((((T_O[Z])[1])[L]).plikZrodlowy).slice(0,3);
    //NR_ZESPOLU_zNazwyPliku = "Z"+NR_ZESPOLU_zNazwyPliku;
    delete((((T_O[Z])[1])[L]).plikZrodlowy);
    var Nowe_Oznaczenie_ID_Sygnatur = new Object();
    Nowe_Oznaczenie_ID_Sygnatur.Z= parseInt(NR_ZESPOLU_zNazwyPliku, 10);
    if (((((T_O[Z])[1])[L]).Sygnatury).length>0){  
      Nowe_Oznaczenie_ID_Sygnatur.S =((((T_O[Z])[1])[L]).Sygnatury);
      delete((((T_O[Z])[1])[L]).Sygnatury);      
      (((T_O[Z])[1])[L])._ID =Nowe_Oznaczenie_ID_Sygnatur;
    } else {
      // operacje na miejscowosciach nie posiadajacych sygnatury zadnej!!
      delete((((T_O[Z])[1])[L]).Sygnatury);
      var opis_lokalizacji_bez_sygnatury = ((((T_O[Z])[1])[L]).polozenie);
      opis_lokalizacji_bez_sygnatury = opis_lokalizacji_bez_sygnatury.replace("Nabruska, , patrz", "patrz Nabruska");
      opis_lokalizacji_bez_sygnatury = opis_lokalizacji_bez_sygnatury.replace("patrz", "patrz:");
      opis_lokalizacji_bez_sygnatury = opis_lokalizacji_bez_sygnatury.replace(" patry ", " patrz: ");
      opis_lokalizacji_bez_sygnatury = opis_lokalizacji_bez_sygnatury.replace("patrz: -", "patrz:");
      opis_lokalizacji_bez_sygnatury = opis_lokalizacji_bez_sygnatury.replace(" parz ", " patrz: ");
      opis_lokalizacji_bez_sygnatury = opis_lokalizacji_bez_sygnatury.replace("patrz:e", "patrz:");
      var Lokalizacje_bez_sygnatury = new Object();
      Lokalizacje_bez_sygnatury._LOKALIZACJA = opis_lokalizacji_bez_sygnatury;
      Lokalizacje_bez_sygnatury._ID = Nowe_Oznaczenie_ID_Sygnatur;
      nowyJSON_Lokalizacje_bez_sygnatury.push(Lokalizacje_bez_sygnatury);
      delete(((T_O[Z])[1])[L]); 
    }     
  }
  var ZES_WWW = ((T_O[Z])[0]).urlZespolu;
  var ZES_TYT1 =((T_O[Z])[0]).tytulZespolu;
  var ZES_TYT2 = ((T_O[Z])[0]).podtytulZespolu;
  var ZES_RED = ((T_O[Z])[0]).autorZespolu;
  var ZES_DAT_PUB = ((T_O[Z])[0]).publikacjaZespolu;
  var ZES_PUB = ((T_O[Z])[0]).publikatorZespolu;
  delete((T_O[Z])[0]);
  // Operacje na sygnaturach
for (var S in (T_O[Z])[2]) {
  var S_Nowe_Oznaczenie_ID_Sygnatury = new Object();
  var S_NR_ZESPOLU_zNazwyPliku = ((((T_O[Z])[2])[S]).plikZrodlowy).slice(0,3);
  var S_NR_ODDZIALU_zNRzespolu = ((((T_O[Z])[2])[S]).nrZespolu).slice(4);
  delete((((T_O[Z])[2])[S]).plikZrodlowy);
  delete((((T_O[Z])[2])[S]).nrZespolu);
S_Nowe_Oznaczenie_ID_Sygnatury.Z = parseInt(S_NR_ZESPOLU_zNazwyPliku, 10);
S_Nowe_Oznaczenie_ID_Sygnatury.S = parseInt(((((T_O[Z])[2])[S]).sygnatura), 10);
S_Nowe_Oznaczenie_ID_Sygnatury.O = parseInt(S_NR_ODDZIALU_zNRzespolu, 10);
delete((((T_O[Z])[2])[S]).sygnatura);
(((T_O[Z])[2])[S])._ID = S_Nowe_Oznaczenie_ID_Sygnatury;
delete((((T_O[Z])[2])[S]).zasob);
delete((((T_O[Z])[2])[S]).nic);
var S_OPIS = new Object();
S_OPIS._daty = ((((T_O[Z])[2])[S]).daty);
var S_OPIS_text = new Array();
S_OPIS_text.push((((T_O[Z])[2])[S]).opis); 
S_OPIS_text.push((((T_O[Z])[2])[S]).uwagi); 
S_OPIS_text.push((((T_O[Z])[2])[S]).tytul);
S_OPIS_text.push(ZES_TYT1);
S_OPIS_text.push(ZES_TYT2);
S_OPIS._text = S_OPIS_text;
delete((((T_O[Z])[2])[S]).daty);
delete((((T_O[Z])[2])[S]).opis);
delete((((T_O[Z])[2])[S]).tytul);
delete((((T_O[Z])[2])[S]).uwagi);
(((T_O[Z])[2])[S])._OPIS = S_OPIS;
(((T_O[Z])[2])[S])._IMGs = ((((T_O[Z])[2])[S]).skany);
(((T_O[Z])[2])[S])._WWW = ZES_WWW;
var S_INFO = new Object();

S_INFO._JENZYKI = ((((T_O[Z])[2])[S]).jenzyki);
S_INFO.dawnaSygnatura = ((((T_O[Z])[2])[S]).sygnaturaDawna);
S_INFO._MIKROFILM = ((((T_O[Z])[2])[S]).mikrofilm);
S_INFO.notka = ((((T_O[Z])[2])[S]).info);
delete((((T_O[Z])[2])[S]).jenzyki);
delete((((T_O[Z])[2])[S]).sygnaturaDawna);
delete((((T_O[Z])[2])[S]).mikrofilm);
delete((((T_O[Z])[2])[S]).info);
S_INFO._REDAKTORZY = ZES_RED;
S_INFO._SPORZADZONO = ZES_DAT_PUB;
S_INFO._ARCHIWUM = ZES_PUB;
(((T_O[Z])[2])[S])._INFO =S_INFO;
}
}



function _string(text, r) {
  //dowolne wyrazy/litery w dowolnym jenzyku bez cyfr
  var words = [],
    m;
  while (m = r.exec(text)) {
    words.push(m[0])
  }
  var WPZ_L = parseInt(text.length, 10);
  var txet = text.split('').reverse().join('');
  var WPZ_S = parseInt(r[Symbol.search](txet), 10);
  var WPZ_G = WPZ_L - WPZ_S;
  var WPZ = text.slice(0, WPZ_G);
  var CiagLiczb = text.slice(WPZ_G);
  return {
    TablicaWyrazow: words,
    WytnijPoczatkoweZdanie: WPZ,
    WytnijKoncoweLiczby: CiagLiczb
  }
};
function compareNumbers(a, b) {
   return a - b
}
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
//_______________________________________________

ZapiszJSON(path.resolve(__dirname, adresIN[0], adresIN[1], "roboczy02b_Lokalizacje_bez_sygnatur.json"),  nowyJSON_Lokalizacje_bez_sygnatury);
ZapiszJSON(path.resolve(__dirname, adresIN[0], adresIN[1], "roboczy02a.json"),  T_O);