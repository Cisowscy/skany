const fs = require('fs-extra');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');


var ten_folder = "001";
const adresy =["SYG_LINKI", ten_folder]
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//                                          FUNKCJE 
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

Number.prototype.pad = function (size) {
       var s = String(this);
       while (s.length < (size || 2)) {
              s = "0" + s;
       }
       return s;
}

function parametry(myJSON) {
  var TP = new Array();
  var TZ = new Array();
  for (var i in myJSON) {
    var pEL = i;
    var zEL = myJSON[i];
    TP.push(pEL);
    TZ.push(zEL);
  }
  return {
    TP: TP,
    TZ: TZ,
  }
}
function typ(myJSON) {
  var odpowiedz = "";
  try {
    switch (myJSON.constructor) {
      case Object:
        odpowiedz = "Object()";
        break;
      case Array:
        odpowiedz = "Array()";
        break;
      case String:
        odpowiedz = "String()";
        break;
      default:
        odpowiedz = myJSON.constructor;
        break;
    }
  } catch (e) {
    odpowiedz = myJSON.constructor;
  }
  return odpowiedz;
}
function ZapiszJSON(OUT_NAZWA, DANE_OUT) {
        var NOWY = fs.createWriteStream(OUT_NAZWA, {
                flags: 'w'
        });
        NOWY.write(JSON.stringify(DANE_OUT));
        return;
}

function Konwertuj_Pliki(dir, _pliki) {
  _pliki = _pliki || [];
  var pliki = fs.readdirSync(dir);
  for (var i in pliki) {
    var name = path.resolve(dir, pliki[i]);
    if (fs.statSync(name).isDirectory()) {
      Konwertuj_Pliki(name, _pliki);
    } else {
      _pliki.push(Przetwarzanie_Pliku(dir, name, pliki[i], parseInt(i, 10), pliki));
    }
  }
  return _pliki;
}

function Przetwarzanie_Pliku(adresFOLDERU, adresPLIKU, tenPLIK, nrPLIKU, tablicaPLIKOW) {
  var nowyPLIK = new Array();
  var LOC = new Array();
  var SYG = new Array();
  var _json = JSON.parse(fs.readFileSync(adresPLIKU, 'utf-8'));
  var nazwaPLIKU = tenPLIK.replace(".json", "");
  var ZESPOL_URL = _json.ead.eadheader.eadid._url;
  var ZESPOL_TYTUL = "";
  switch (typ((parametry(_json.ead.eadheader.filedesc.titlestmt).TZ)[0])) {
    case "Object()":
      ZESPOL_TYTUL = _json.ead.eadheader.filedesc.titlestmt.titleproper.__text;
      break;
    case "String()":
      ZESPOL_TYTUL = _json.ead.eadheader.filedesc.titlestmt.titleproper;
      break;
  }
  var ZESPOL_PODTYTUL = _json.ead.eadheader.filedesc.titlestmt.subtitle;
  var ZESPOL_REDAKTORZY = "";
  switch (typ((parametry(_json.ead.eadheader.filedesc.titlestmt).TZ)[2])) {
    case "Object()":
      ZESPOL_REDAKTORZY = _json.ead.eadheader.filedesc.titlestmt.author.__text;
      break;
    case "String()":
      ZESPOL_REDAKTORZY = _json.ead.eadheader.filedesc.titlestmt.author;
      break;
  }
  var ZESPOL_PUBLIKACJA = "";
  switch (typ((parametry(_json.ead.eadheader.filedesc.publicationstmt).TZ)[0])) {
    case "Object()":
      ZESPOL_PUBLIKACJA = _json.ead.eadheader.filedesc.publicationstmt.date._normal;
      break;
    case "String()":
      ZESPOL_PUBLIKACJA = _json.ead.eadheader.filedesc.publicationstmt.date;
      break;
  }
  var Metryczka = new MetryczkaZESPOLU(ZESPOL_URL, ZESPOL_TYTUL, ZESPOL_PODTYTUL, ZESPOL_REDAKTORZY, ZESPOL_PUBLIKACJA, nazwaPLIKU);
  nowyPLIK.push(Metryczka);
  var GEOGRAFIA = "";
  switch (typ((parametry(_json.ead.archdesc).TZ)[4])) {
    case "Object()":
      GEOGRAFIA = _json.ead.archdesc.controlaccess.controlaccess.geogname;
      break;
    case "Array()":
      GEOGRAFIA = _json.ead.archdesc.controlaccess[1].controlaccess.geogname;
      break;
  }
  for (var g in GEOGRAFIA) {
    var _MIEJSCE = "";
    var _SYGNATURY = "";
    if (((parametry(GEOGRAFIA[g]).TP).length) == 1) {
      _MIEJSCE = (GEOGRAFIA[g]).emph.__text;
    } else {
      _MIEJSCE = (GEOGRAFIA[g]).emph.__text;
      _SYGNATURY = (GEOGRAFIA[g]).__text;
    }
    var Miejscowosc = new Lokalizacja(_MIEJSCE, _SYGNATURY, nazwaPLIKU)
    LOC.push(Miejscowosc);
  }
  var INW_G = new Array();
  switch (typ((parametry(_json.ead.archdesc.dsc).TZ)[1])) {
    case "Object()":
      INW_G.push(_json.ead.archdesc.dsc.c01);
      break;
    case "Array()":
      for (var i in (_json.ead.archdesc.dsc.c01)) {
        INW_G.push((_json.ead.archdesc.dsc.c01)[i]);
      }
      break;
  }
  var INWENTARZ_G_id = "";
  var INWENTARZ_G_tytul = "";
  var INWENTARZ_G_zasob = "";
  for (var ig in INW_G) {
    INWENTARZ_G_id = (INW_G[ig]).did.unitid;
    console.log(INWENTARZ_G_id);
    INWENTARZ_G_tytul = (INW_G[ig]).did.unittitle;
    INWENTARZ_G_zasob = (INW_G[ig]).did.physdesc;
    var INW_R = (INW_G[ig]).c02;
    var INWENTARZ_R_id = "";
    var INWENTARZ_R_idOLD = "";
    var INWENTARZ_R_opis = "";
    var INWENTARZ_R_daty = "";
    var INWENTARZ_R_info = "";
    var INWENTARZ_R_jenzyki = "";
    var INWENTARZ_R_Skany = "";
    var INWENTARZ_R_Mikrofilm = "";
    var INWENTARZ_R_Przypisy = "";
    var tREKORDY = new Array();
    switch (typ(INW_R)) {
      case "Object()":
        tREKORDY.push(INW_R);
        break;
      case "Array()":
        tREKORDY = INW_R;
        break;
    }
    for (var ir in tREKORDY) {
      switch (typ((tREKORDY[ir]).did.unitid)) {
        case "Object()":
          INWENTARZ_R_id = (tREKORDY[ir]).did.unitid.__text;
          break;
        case "Array()":
          INWENTARZ_R_id = (tREKORDY[ir]).did.unitid[0].__text;
          INWENTARZ_R_idOLD = (tREKORDY[ir]).did.unitid[1].__text;
          break;
      }
      INWENTARZ_R_opis = (tREKORDY[ir]).did.unittitle;
      INWENTARZ_R_daty = (tREKORDY[ir]).did.unitdate._normal;
      INWENTARZ_R_info = (tREKORDY[ir]).did.physdesc;
      var _JENZYKI = new Array();
      switch (typ((tREKORDY[ir]).did.langmaterial.language)) {
        case "Object()":
          _JENZYKI.push((tREKORDY[ir]).did.langmaterial.language._langcode);
          break;
        case "Array()":
          for (var i in ((tREKORDY[ir]).did.langmaterial.language)) {
            _JENZYKI.push(((tREKORDY[ir]).did.langmaterial.language)[i]._langcode);
          }
          break;
      }
      INWENTARZ_R_jenzyki = _JENZYKI;
      var TabTmp2 = (tREKORDY[ir]).did.daogrp;
      if ((parametry((tREKORDY[ir]).did.daogrp).TP).length < 1) {
        INWENTARZ_R_Skany = "";
      } else {
        INWENTARZ_R_Skany = TabTmp2.daoloc._href;
      }
      if (typeof ((tREKORDY[ir]).altformavail) == "undefined") {
        INWENTARZ_R_Mikrofilm = "";
      } else {
        INWENTARZ_R_Mikrofilm = (tREKORDY[ir]).altformavail.p;
      }
      if (typeof ((tREKORDY[ir]).note) == "undefined") {
        INWENTARZ_R_Przypisy = "";
      } else {
        INWENTARZ_R_Przypisy = (tREKORDY[ir]).note.p;
      }
      var REKORD = new RekordINWENTARZA(INWENTARZ_G_id, INWENTARZ_G_tytul, INWENTARZ_G_zasob, INWENTARZ_R_id, INWENTARZ_R_idOLD, INWENTARZ_R_opis, INWENTARZ_R_daty, INWENTARZ_R_info, INWENTARZ_R_jenzyki, INWENTARZ_R_Skany, INWENTARZ_R_Mikrofilm, INWENTARZ_R_Przypisy, nazwaPLIKU);
      SYG.push(REKORD); 
    }
  }
  nowyPLIK.push(LOC);
  nowyPLIK.push(SYG);
  return nowyPLIK;
}
