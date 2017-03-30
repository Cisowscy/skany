var request = require('request');
var http = require('http');
const parse5 = require('parse5');
const fs = require('fs');
const path = require('path');
const T_plik = ["_WWW.json", "_WWW2.json"];
var request = require('request');
var cheerio = require('cheerio');
//var ROBOCZY = WczytajJSON(path.resolve(__dirname,T_plik[0]));
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var ROBOCZY = [{
              "WWW": {
                     "ZESPOL": "http://agad.archiwa.gov.pl/gr298x.xml",
                     "SKANY": {
                            "OPCJE": {
                                   "INDEKS_SKANOW": "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])",
                                   "INDEKS_DALSZE_STRONY": "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[5][n]+LINKI[8][0][v]",
                                   "STRONA_SKANU": "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[6][0]+LINKI[7][i]+LINKI[8][0][v]",
                                   "SKAN_XXS": "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[6][1]+LINKI[7][i]+LINKI[8][1]",
                                   "SKAN_XXL": "LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4])+LINKI[6][2]+LINKI[7][i]+LINKI[8][1]"
                            },
                            "LINKI": ["http://", "agadd.home.net.pl/", "metrykalia/", "298/", "sygn. 2/", [],
                                   ["pages/", "thumbnails/", "images/"],
                                   [],
                                   [
                                          [".htm", ".html"], ".jpg"
                                   ]
                            ]
                     }
              },
              "SYG": "Z298S2"
       }];
for ( let ten of ROBOCZY) {
       let LINKI = new Array();
       LINKI = ten.WWW.SKANY.LINKI;
       const myURL = LINKI[0]+LINKI[1]+LINKI[2]+LINKI[3]+encodeURI(LINKI[4]);
              console.log(myURL);

//request.get(myURL, function (error, response, html, ourCode) {if (!error && response.statusCode == 200) {var ourCode = html;} return ourCode;});


request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
  }
});


        
//const document = parse5.parse(csv);

        
        // Continue with your processing here.
    //}

}//> 'html'  
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//ZapiszJSON(path.resolve(__dirname, T_plik[1]), ROBOCZY);
function WczytajJSON(IN_NAZWA) {
    return JSON.parse(fs.readFileSync(IN_NAZWA, 'utf8'));
}

function ZapiszJSON(OUT_NAZWA, DANE_OUT) {
    var NOWY = fs.createWriteStream(OUT_NAZWA, {
        flags: 'w'
    });
    NOWY.write(JSON.stringify(DANE_OUT));
    return;
}