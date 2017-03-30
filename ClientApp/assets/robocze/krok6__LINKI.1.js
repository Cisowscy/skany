const fs = require('fs-extra');
const path = require('path');
const TablicaLINKOW = JSON.parse(fs.readFileSync(path.resolve(__dirname, "_LINKI.1.json"), 'utf8'));
Number.prototype.pad = function (size) {
       var s = String(this);
       while (s.length < (size || 2)) {
              s = "0" + s;
       }
       return s;
}
//25 plikow na folder ; folderow 281
var L1 = 1;
var L2 = 1;
for (var poz of TablicaLINKOW) {
       var nowyPlik = new Object();
       nowyPlik = poz;
       if (L1 == 26) {
              L1 = 1;
              L2++;
       }
       if (L1 == 1) {
              var folderNR = (L2.pad(3));
       }
        const FOLDER = path.resolve(__dirname, folderNR);
        const PLIK = path.resolve(FOLDER, nowyPlik.syg + ".json");
        // fs.ensureDirSync(FOLDER);
        fs.ensureDir(FOLDER, err => { console.log(err) });
        fs.createWriteStream(PLIK, {flags: 'w'}).write(JSON.stringify(nowyPlik));
        console.log("Zapisano Plik: "+PLIK);

       L1++;

}