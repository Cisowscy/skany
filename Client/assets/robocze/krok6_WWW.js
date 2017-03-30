var request = require('request');
var cheerio = require('cheerio');

var path = require('path');

var TmyURL = ["http://agadd.home.net.pl/metrykalia/298/sygn.%202/",""];

var SYG = "Z298S2";
var adresy = [[],[]];
var indexy = [[],[]];
var myURL = TmyURL.join("");

console.log(myURL);
console.log(indexy.length);
console.log(indexy[0].length);
var Alamakota = [];
request(myURL, function (error, response, html) {
  var fs = require('fs');
  if (!error && response.statusCode == 200) {
         var $ = cheerio.load(html);
     $("a[href^='inde']").each(function(i, element) {
      var ai = $(this).attr('href');
      indexy[0].push(ai);      
    });
    $("a[href^='pages']").each(function(i, element) {
      var as = $(this).attr('href');
      indexy[1].push(as);
    });
// return indexy
  }
 var fs = require('fs');
  ZapiszJSON("dupa.json", indexy);
 // console.log(indexy);
  function ZapiszJSON(OUT_NAZWA, DANE_OUT) {
    var NOWY = fs.createWriteStream(OUT_NAZWA, {
        flags: 'w'
    });
    NOWY.write(JSON.stringify(DANE_OUT));
    return;
}
 
}); 