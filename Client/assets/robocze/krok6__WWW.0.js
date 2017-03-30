const fs = require('fs-extra');
const path = require('path');
const Tablica0 = JSON.parse(fs.readFileSync(path.resolve(__dirname, "_WWW.0.json"), 'utf8'));

var Tablica1 = new Array();
var Tablica1error = new Array();
var Folder = 1;
var L1 = 1 / 25;
var Plik = 1;
var xx = 1;
var q ="";
var Tq = 0;
var Nq = 0;
for (let x of Tablica0) {        
       try {
            //  q = " TAK "
          //    Tq++;              
           //  czy = new String(q+Tq)

           //   if (Folder % 2 != 1) {
                     //  console.log(czyFolder%2)
           //   }


              var poz = new Object();
              poz.syg = x.SYG;
              let LINKI = new Array();
              LINKI = x.WWW.SKANY.LINKI;
              poz.www = LINKI[0] + LINKI[1] + LINKI[2] + LINKI[3] + encodeURI(LINKI[4]);
              poz.n = 0;
              poz.gal = [];
              poz.str = [];
              Tablica1.push(poz);
             // var NAZWA = path.resolve(__dirname, poz.syg + ".json");
             //  fs.createWriteStream(NAZWA, {flags: 'w'}).write(JSON.stringify(poz));

             // Folder = Folder + L1;
            //  Plik++;

       } catch (e) {             
            // q = " TAK "
           //    Nq++;;              
           //  czy = new String(q+Nq)
              var error_poz = new Object();
              error_poz = x;
              Tablica1error.push(error_poz);
       }
      // console.log(" ( " + xx + czy+" ) ");
     //  xx++;
}
fs.createWriteStream(path.resolve(__dirname,"_LINKI.json"), {flags: 'w'}).write(JSON.stringify(Tablica1));
if (Tablica1error.length > 0) {
         fs.createWriteStream(path.resolve(__dirname,"_ERROR.json"), {flags: 'w'}).write(JSON.stringify(Tablica1error));

}