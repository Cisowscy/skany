//281 folderw utwrz
const fs = require('fs-extra'); const path = require('path');
Number.prototype.pad = function (size) {
       var s = String(this);
       while (s.length < (size || 2)) {
              s = "0" + s;
       }
       return s;
}
for (var i=0; i<281; i++) {

fs.ensureDir((i+1).pad(3), err => { console.log(err) });


}