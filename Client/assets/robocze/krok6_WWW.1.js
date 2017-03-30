var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
require('console.table');

var TmyURL = ["http://agadd.home.net.pl/metrykalia/298/sygn.%202/",""]; //

var SYG = "Z298S2";
var indexy = new Array();
var skanystrony =  new Array();
var strony = (-1);
//console.log("DEBUG:       indexy[]="+indexy+";   skanystrony[]="+skanystrony+";    (licznik do petli) strony="+strony+";");

do {
  strony++;
  ///console.log("DEBUG:       (wskaznik rozpoczecia petli do..while) strony="+strony+";");
  var myURL = TmyURL.join("");  //
  request(myURL, function (error, response, html) {
    var nawigacjaIndex =  new Array();
    var skany =  new Array();
  console.log("DEBUG:      pobranie kodu html ze strony="+myURL+";   i utworzenie nawigacjaIndex[]="+nawigacjaIndex+";");
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $("a[href^='inde']").each(function (i, element) {
        var ai = $(this).attr('href');
        nawigacjaIndex.push(ai);
      });      
      $("a[href^='pages']").each(function (i, element) {
        var as = $(this).attr('href');
        skany.push(as);
      });  
      skanystrony.push(skany);
      if (nawigacjaIndex.length > 0) {
        indexy.push(nawigacjaIndex);
        if (nawigacjaIndex.length == 2) {
          myURL[1] = nawigacjaIndex[1];
        } else {
          myURL[1] = nawigacjaIndex[0];
        }
      }    
    }
    

    //return indexy;
  });
} while (indexy.length > strony);
console.log(indexy);