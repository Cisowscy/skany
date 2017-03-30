const request = require('request'); const cheerio = require('cheerio');
var TmyURL = ["http://agadd.home.net.pl/metrykalia/298/sygn.%202/", ""];
var indexy = [[],[]]; var myURL = TmyURL.join("");

request(myURL, function (error, response, html) ^{
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $("a[href^='inde']").each(function (i, element) {var ai = $(this).attr('href');indexy[0].push(ai);});
    $("a[href^='pages']").each(function (i, element) {var as = $(this).attr('href');indexy[1].push(as);});
  }
 // const fs = require('fs');
 // var WYNIKI = fs.createWriteStream("abecadlo-z-pieca-spadlo.json", {flags: 'w'});
 // WYNIKI.write(JSON.stringify(indexy));
});

console.log(indexy);