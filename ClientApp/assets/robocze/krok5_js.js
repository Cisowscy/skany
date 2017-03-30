var czas_start = new Date().getTime();
require("babel-core").transform("code", {
    presets: ["es2017"]
});
var fs = require('fs');
var path = require('path');
require('console.table');

console.log(czas_start);



// TMP licznik czasu test 
var i, output = "";
for (i = 1; i <= 1e7; i++) {
   var czas_teraz = new Date().getTime();
    output += i;
    console.log(czas_teraz - czas_start);
}