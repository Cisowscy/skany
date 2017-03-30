require("babel-core").transform("code", {
  presets: ["es2017"]
});

var x = this.dealer;
x=6;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x > 4 && x < 9):
        console.log("between 5 and 8");
        break;
    case (x > 8 && x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}

//INWENTARZ_R_Przypisy = "";

      //var gdzieJaPacze =INWENTARZ_G_id+"_"+INWENTARZ_R_id+" ["+parseInt(ir, 10)+"]";
      //if ((parametry((tREKORDY[ir]).altformavail).TP)[0] != "p"){
      //TestowaMapaJSON2 ((tREKORDY[ir]).altformavail,"..", gdzieJaPacze);
      //}
      // console.log((tREKORDY[ir]).altformavail);
      //TestowaMapaJSON2 ((tREKORDY[ir]).altformavail,"..", gdzieJaPacze);

      //INWENTARZ_R_Mikrofilm = ""; //(tREKORDY[ir]).did.physdesc;


      // przypisy, plikZrodlowy)

      //console.log(_JENZYKI);





      //var TabTmp = parametry((tREKORDY[ir]).did.langmaterial).TP;




      //TestowaMapaJSON2 (TabTmp2.daoloc,"..", gdzieJaPacze);
      // if ((parametry(TabTmp2).TP).length!=3){
      //console.log((parametry(TabTmp2).TP).length);

      //TestowaMapaJSON2 (TabTmp2,"..", gdzieJaPacze);



      // console.log(TabTmp2+"  ---  "+gdzieJaPacze);
      //console.log(parametry(TabTmp2).TP);
      // }
      //console.log(parametry(TabTmp2).TP);
      // TestowaMapaJSON2 (TabTmp2,"..", gdzieJaPacze);

      //if (typ(parametry((tREKORDY[ir]).did.langmaterial).TZ) != "Array()") {
      //console.log(INWENTARZ_G_id+"_"+INWENTARZ_R_id+" ---> "+parametry((tREKORDY[ir]).did.langmaterial).TP);
      //console.log(INWENTARZ_G_id+"_"+INWENTARZ_R_id+" ["+parseInt(ir, 10)+"] ---> "+(parametry((tREKORDY[ir]).did.langmaterial).TZ)[1]);
      //console.log("nie tablica");

      // } else {
      //console.log(INWENTARZ_G_id+"_"+INWENTARZ_R_id+" ["+parseInt(ir, 10)+"] ---> "+parametry((tREKORDY[ir]).did.langmaterial).TP);
      // }


      /*switch (typ((tREKORDY[ir]).did.langmaterial.language)) {
        case "Object()":
          //
          break;
        case "Array()":
          //
          break;
      } */


       //console.log(tREKORDY.length + " ---- " + INWENTARZ_G_id);
/*
 
 

 
for (var ig in INW_G)  {
  for (var ir in tREKORDY) {


    /**/
//  
/*switch (typ((tREKORDY[ir]).did.langmaterial["language"])) {
    case "Object()":
    _JENZYKI.push((tREKORDY[ir]).did.langmaterial["language"]["_langcode"]);             
        break;
    case "Array()":
      for (var im in (tREKORDY[ir]).did.langmaterial["language"]){
        _JENZYKI.push(((tREKORDY[ir]).did.langmaterial["language"])[im]);             
      }
        break;
} */
//INWENTARZ_R_jenzyki = 
//for(var ij in _JENZYKI) {

//  }


//console.log (INWENTARZ_R_id);
//









// }
//console.log((parametry(tREKORDY[5]).TP));
//console.log((parametry(tREKORDY[5]).TP)[1].constructor);

//TestowaMapaJSON2 (tREKORDY[0],"_json.ead.archdesc.dsc", nazwaPLIKU);

//console.log (INWENTARZ_G_id);

//}


//TestowaMapaJSON2 (_json.ead.archdesc.dsc,"_json.ead.archdesc.dsc", nazwaPLIKU); 
//console.log (_json.ead.archdesc.dsc._type);

// console.log (_MIEJSCE);
//if (typ((parametry(GEOGRAFIA[g]).TZ)[0])!="Object()") {
// 

// console.log (parseInt(g, 10)); log(INWENTA

//}
//if (((parametry((GEOGRAFIA[g]).emph).TP).length)!=2){

// console.log ((GEOGRAFIA[g]).__text);

// }






//console.log(ZESPOL_REDAKTORZY);
//TestowaMapaJSON2 (_json.ead.eadheader.filedesc.titlestmt,"_json.ead.eadheader.filedesc.titlestmt.titleproper.__text", nazwaPLIKU);

//TestowaMapaJSON2 (_json, "json", nazwaPLIKU);
//console.log(_json.ead.eadheader.eadid._url==(parametry((parametry((parametry((parametry(_json).TZ)[0]).TZ)[0]).TZ)[0]).TZ)[0]);

//TestowaMapaJSON2 (_json.ead.eadheader.filedesc.publicationstmt,"_json.ead.eadheader.filedesc.publicationstmt", nazwaPLIKU);


//return adresPLIKU;     //zwraca tablice nazwy plikow z adresem wbezwzgldnym
//return edytowanyPLIK; //zwraca tablice zawartosci plikow
//return nrPLIKU + 1 + " --> " + nazwaPLIKU; //zwraca tablice nazwy plikow
//return nowyPLIK;

//}


function TestowaMapaJSON2(myJSON, nazwa, nazwaPLIKU) {
  console.log(" ");
  console.log(typ(myJSON) + " <-- typ Elementu --> " + nazwa + " w " + nazwaPLIKU);
  console.log(" ");
  console.log("ilość dzieci: " + (parametry(myJSON).TP).length);
  var ia = 0;
  var io = 0;
  var is = 0;
  for (var i in parametry(myJSON).TP) {
    //console.log(parseInt(i, 10)+" --- "+((parametry(myJSON).TZ)[i]).constructor);
    console.log(parseInt(i, 10) + " --- " + typ((parametry(myJSON).TZ)[i]) + " --- " + (parametry(myJSON).TP)[i]);
    if (typ((parametry(myJSON).TZ)[i]) == "Object()") {
      io++;
    }
    if (typ((parametry(myJSON).TZ)[i]) == "Array()") {
      ia++;
    }
    if (typ((parametry(myJSON).TZ)[i]) == "String()") {
      is++;
    }
  }

  // console.log(parametry(myJSON).TP);    
  //console.log( parametry(myJSON).TZ);
  if (io != 0) {
    var ilO = "ilosc Obiektow: " + io + "; "
  } else {
    var ilO = ""
  }
  if (ia != 0) {
    var ilA = "ilosc Tablic: " + ia + "; "
  } else {
    var ilA = ""
  }
  if (is != 0) {
    var ilS = "ilosc Stringow: " + is + "; "
  } else {
    var ilS = ""
  }
  console.log(" ");
  console.log(ilO + ilA + ilS);
  console.log("----------------------------------------------------------------------------");

}


/*switch (myJSON.constructor) {
    case Object:
        console.log("To jest Obiekt");
        break;
    case Array:
        console.log("to jest tablica");
        break;
    case Value:
        console.log("to jest wartość");
        break;
    default:
        console.log("coś nie tak");
        break;
}




 console.log(TypEL);
 // console.log(TabPropEL);
 if (TabPropEL.length>1) {
   console.log("wiecej elementow");
 } else if (TabPropEL.length===1) {
   console.log("jeden element");
 } else if (TabPropEL.length<1) {
   console.log("zero elementow");
 } else {
   console.log("cos nie tak z iloscią elementow");
 }

  for(var i in myJSON){
    //console.log(myJSON[i]);
   // console.log("====================================");
   // console.log("====================================");

  } */
//var t1 = myJSON.constructor;
// var t2 = Object.getOwnPropertyNames(myJSON);
// console.log("----------BADANY ELEMENT------------");
//console.log(myJSON);
// console.log("------------(jego typ)--------------");
// console.log(t1);
// console.log("-------(posiadane parametry)--------");
// console.log(t2);
// console.log("====================================");