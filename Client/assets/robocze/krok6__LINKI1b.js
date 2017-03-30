const fs = require('fs-extra'); const path = require('path');
const TablicaLINKOW = JSON.parse(fs.readFileSync(path.resolve(__dirname, "_LINKI.1.json"), 'utf8'));
Number.prototype.pad = function (size) {
       var s = String(this);
       while (s.length < (size || 2)) {
              s = "0" + s;
       }
       return s;
}
var L1 = 1;
var L2 = 1;
var L3 = 1
for (var index = 0; index < TablicaLINKOW.length; index++) {
       var element = TablicaLINKOW[index];
       if (L1 == 26) {
              L1 = 1;
              L2++;
       }
       if (L1 == 1) {
              var folderNR = (L2.pad(3));
       }
       var PLIK = ("./"+folderNR+"/"+L3.pad(4)+element.syg+".json");
       fs.createWriteStream(PLIK, {flags: 'w'}).write(JSON.stringify(element));

      L1++; L3++;
}


//gg

