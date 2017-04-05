# [SKANY STARA WERSJA (OBECNA)](http://skany.cisowscy.com/)
**Wielu z nas przegląda skany Metrykalne na AGADzie, niekiedy są one nie czytelne i ażby prosiło się przepościć je przez jakiś program, poprawiający kontrast, balans bieli, lub inne parametry.. ale zapisywanie skanów po jednym ...to tak jak wybrać się z motyką na słońce  :P opracował skrypt, który pozwala wyświetlić wszystkie skany z danej wybranej księgi metrykalnej na jednej stronie, a później zapisując tą stronę zapisujesz w oryginalnym rozmiarze wszystkie skany.**

## Aby tego dokonać przejdź na stronę [http://skany.cisowscy.com/](http://skany.cisowscy.com/)
<p align="center">
    <img src="./docs/SKRYPT.jpg" alt="Oto przykład użycia" title="Oto przykład użycia">
</p>
<br />
<br />
<br />

_________________________________________________
_________________________________________________

<br />
<br />
<br /><br /><br /><br /><br /><br /><br />

# [SKANY WERSJA ROZWOJOWA (NOWA-PRZYSZLA)](https://skany-1490141465819.firebaseapp.com/) [![Build Status](https://travis-ci.org/Cisowscy/skany.svg?branch=master)](https://travis-ci.org/Cisowscy/skany) https://skany-1490141465819.firebaseapp.com/
<p align="center">
    <img src="./docs/SKANY_KONCEPCJA_BACK_END.jpg" alt="Koncepcja Layout Back End" title="Koncepcja Layout Back End">
</p>

# CEL

### Podstawowym celem jest ulatwienie możliwości znajdywania skanow hostowanych na stronach [AGADU](http://www.agad.gov.pl/inwentarze/testy.html)

# Od podszewki..
- 17 III 2017 pobralem pliki XML .. i przekonwerowalem do JSON za pomoca [narzedzia](http://codebeautify.org/xmltojson)
- - [Księgi metrykalne parafii obrządku greckokatolickiego z archidiecezji lwowskiej, diecezji przemyskiej i stanisławowskiej, 1728-1943](http://www.agad.gov.pl/inwentarze/ge298x.xml)
- - [Księgi metrykalne gmin ewangelicko-augsburskiego i helweckiego wyznania, 1764-1939](http://www.agad.gov.pl/inwentarze/KEAH299xx.xml)
- - [Księgi metrykalne gmin wyznania mojżeszowego z terenów tzw. zabużańskich, 1789-1943](http://www.agad.gov.pl/inwentarze/Mojz300x.xml)
- - [Księgi metrykalne parafii wyznania rzymskokatolickiego z terenu archidiecezji lwowskiej, 1604-1945](http://www.agad.gov.pl/inwentarze/KLwo301new.xml)
- - [Księgi metrykalne i akta parafii prawosławnych z terenów Wołynia i Polesia, 1823-1909, 1929-1939](http://www.agad.gov.pl/inwentarze/Kprx302.xml)
- - [Księgi metrykalne parafii wyznania rzymskokatolickiego z diecezji łuckiej i wileńskiej, 1799-1905](http://www.agad.gov.pl/inwentarze/KMluck436x.xml)
- - [Księgi metrykalne parafii wyznania rzymskokatolickiego z diecezji przemyskiej, 1590, 1600-1943](http://www.agad.gov.pl/inwentarze/Kprze437x.xml)
- - [Księgi metrykalne gmin wyznania ewangelicko-augsburskiego z zachodnich guberni Cesarstwa Rosyjskiego/(wschodnich woj. II Rzeczypospolitej), 1790-1940](http://www.agad.gov.pl/inwentarze/KsEA439x.xml)
- - [Księgi metrykalne i akta parafii i gmin różnych wyznań i obrządków (Ormianie, Autokefaliczna Cerkiew Prawosławna, Baptyści, Mennonici, Ewangeliczni Chrześcijanie) z terenów tzw. zabużańskich, 1685-1942](http://www.agad.gov.pl/inwentarze/KsOMB456x.xml)

- Nastepnie za pomoca skryptow i recznie zaczolem wypisywac liste hasel geograficznych ktora jestem w trakcie zamieszczania na mapie.. jest to mozolne zajecie gdyz jest blisko 2,5 tysiaca miejscowosci do spinezkowania geotagami
- rownolegle zaczolem tworzyc baze linkow do skanow polonczona jako klucz ID sygnatury i zespolu
-takze rownolegle, dla kazdej z sygnatur zaczolem wypisywac tabele zawartosci np chrzty od do dla, itd. do jeszcze dlugo mi zajmie bo trzeba to recznie robic a obiektow jest 7,5 tysiaca
- ponadto na stronach agadu jest szereg omylek .. ktore pozniej opisze..
# TECHNOLOGIA
# Skany

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## obecny podstawowy zaczatek powstaje od 17/30 III 2017 