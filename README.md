# skany


**Wielu z nas przegląda skany Metrykalne na AGADzie, niekiedy są one nie czytelne i ażby prosiło się przepościć je przez jakiś program, poprawiający kontrast, balans bieli, lub inne parametry.. ale zapisywanie skanów po jednym ...to tak jak wybrać się z motyką na słońce  :P opracował skrypt, który pozwala wyświetlić wszystkie skany z danej wybranej księgi metrykalnej na jednej stronie, a później zapisując tą stronę zapisujesz w oryginalnym rozmiarze wszystkie skany.**

## Aby tego dokonać przejdź na stronę [https://cisowscy.github.io/skany/](https://cisowscy.github.io/skany/)

---
### Oto przykład użycia
![Tekst alt](/SKRYPT.jpg "Skrypt")

# SKANY v.2

**Wielkimi krokami nadchodzi wersja druga serwisu, niemniej nim to się w pełni stanie potrzebawałbym waszej pomocy i czasu, niebawem pojawią sie dynamiczne ideksy oraz interaktywna mapa dla** 
- **Księgi metrykalne parafii wyznania rzymskokatolickiego z terenu archidiecezji lwowskiej, 1604-1945.** 

> **Pomoc polegała by na utworzeniu 2 plików indeksów dla pozostałych pozycji czyli:**

> - Księgi metrykalne parafii obrządku greckokatolickiego z archidiecezji lwowskiej, diecezji przemyskiej i stanisławowskiej, 1728-1943
> - Księgi metrykalne gmin ewangelicko-augsburskiego i helweckiego wyznania, 1764-1939
> - Księgi metrykalne gmin wyznania mojżeszowego z terenów tzw. zabużańskich, 1789-1943
> - Księgi metrykalne i akta parafii prawosławnych z terenów Wołynia i Polesia, 1823-1909, 1929-1939
> - Księgi metrykalne parafii wyznania rzymskokatolickiego z diecezji łuckiej i wileńskiej, 1799-1905
> - Księgi metrykalne parafii wyznania rzymskokatolickiego z diecezji przemyskiej, 1590, 1600-1943
> - Księgi metrykalne gmin wyznania ewangelicko-augsburskiego z zachodnich guberni Cesarstwa Rosyjskiego/(wschodnich woj. II Rzeczypospolitej), 1790-1940
> - Księgi metrykalne i akta parafii i gmin różnych wyznań i obrządków (Ormianie, Autokefaliczna Cerkiew Prawosławna, Baptyści, Mennonici, Ewangeliczni Chrześcijanie) z terenów tzw. zabużańskich, 1685-1942
> 
> **Dla każdej z pozycji potrzebuję 2 pliki tekstowe (o formacie JSON) zaraz przybliżę, jako wskazówkę, mój sposób utworzenia takowych njpierw jednak przedstawię strukturę dla obydwojga (czyli co potrzebuję usyskać)**
> 
> ### GEO.json INDEKS GEOGRAFICZNY
> ```JSON
[{
    "GDZIE": "Bertniki",
    "COTO": "wieś",
    "SYGNATURY": [940, 949, "od-do", 951, 1676]
}, {
    "GDZIE": "Berymowce",
    "COTO": "wieś",
    "SYGNATURY": [1824]
}, {
    "GDZIE": "Bezbrudy",
    "COTO": "wieś",
    "SYGNATURY": [730, 1767, 1858]
}, {
    "GDZIE": "Bezejów",
    "COTO": "wieś",
    "SYGNATURY": [1050, "od-do", 1052]
}, {
    "GDZIE": "Biała",
    "COTO": "wieś",
    "SYGNATURY": [251, 1345, 1348, "od-do", 1349, 1352, "od-do", 1354, 1637, 1680, 1841, 1892, 1893, 1952]
}, {
    "GDZIE": "Biała Mazurska",
    "COTO": "wieś",
    "SYGNATURY": [730]
}]
> ```
> ### SYG.json INDEKS SYGNATUR
> ```JSON
[{
        "SYGNATURA": "14",
        "PARAFIA": "Bełz",
        "DEKANAT": "Bełz",
        "TYP": "Ekstrakty z księgi metrykalnej",
        "WSAD": {
            "POSWIADCZENIE": 1850,
            "FILIACJE": [1849, 1850],
            "KOICJE": [1849, 1850],
            "ZGONY": [1849, 1850]
        },
        "JEZYK": ["lat"],
        "LINK": ["http://agadd.home.net.pl/metrykalia/301/sygn.%2014/indeks.htm", ""],
        "UWAGI": "akta przekazane do AGAD z AP - Przemyśl w 1993 r.",
        "MIKROFILM": 73810
 }, {
        "SYGNATURA": "33",
        "PARAFIA": "Biały Kamień",
        "DEKANAT": "Złoczów",
        "TYP": "Księga metrykalna",
        "WSAD": {
            "FILIACJE": ["od", 1748, "do", 1778],
            "KOICJE": ["od", 1748, "do", 1750]
        },
        "JEZYK": ["lat"],
        "LINK": ["http://agadd.home.net.pl/metrykalia/301/sygn.%2033/indeks.htm", ""],
        "UWAGI": "wpisy bez rubryk; księga prowadzona dwustronnie i tak spaginowana (po obrocie): ks. ur., s. 1-357, ks. śl., s. 358-362; ozdobna bordiura rozpoczynająca każdą serię wpisów; księga przekazana do AGAD z AP - Przemyśl w 1993 r.",
        "MIKROFILM": 73829
}, {
         "SYGNATURA": "1956",
         "PARAFIA": "Kołomyja",
         "DEKANAT" : "Kołomyja",
         "TYP" : "Wojskowa Księga metrykalna",
         "WSAD": {
             "ZGONY" : ["od", 1871, "do", 1915]},
         "JEZYK": ["ger"],
         "LINK": ["http://agadd2.home.net.pl/metrykalia/301/sygn.%201956/indeks.htm", ""],
         "UWAGI": "wpisy od s. 2; s. 1 nie zapisana; z 1871 r. - 1 wpis",
}]
> ```
> 
> ## JAK UTWORZYĆ POWYŻSZE PLIKI ? METOD JEST WIELE  (OTO MOJA)

> ### Najpierw trzeba pobrać materiał wejściowy

> ![Tekst alt](/MATERIAL_WEJSCIOWY.jpg "Konwertowanie indeksów")

> ### 1) Ja kożystałem z źródła strony w chrome można je wyświetlić poprzez `[LCtrl] + [U]`
> ** Następnie tworzymy sobie 2 puste pliki tekstowe `GEO` i `SYG` do których wklejamy odpowiednie treści, tj.**
> #### dla GEO odszukujemy 
>```XML
<controlaccess>
      <head>Hasła geograficzne</head>
<controlaccess>
>```
> **i kopiujemy to co  po nim następuje aż do**
>```XML
</controlaccess>
		  </controlaccess>
>```
> **i wklejamy do pliku GEO, zapisując rzecz jasna ;)**
> #### podobnie dla pliku SYG odszukujemy 
>```XML
<head>INWENTARZ </head>
>```
> **i kopiujemy to co następuje od**
>```XML
<!-- good down -->
>```
> **do (praktycznie samego końca)**
>```XML
</dsc>
</archdesc>
</ead>
>```
> **i wklejamy do pliku SYG, zapisując**
> ### 2) Teraz trzba obrobić pół automatycznie dane do tego przyda się dobry edytor tekstu, polecam darmowe: `https://atom.io/` i `https://code.visualstudio.com/` chyba że ktoś zna lepszy?
> **Istoną funkcą jest szukanie i zastępowanie, tekstów przedzielonych znakami końca lini (Enter). Następnie na podstawie dołączonej struktury jaką potrzebuję uzyskać trzeba trochę pogłówkować :) wykonując na początek szereg operacji zastępowania tekstu, a następnie korygując to czego automatycznie sie nie dało.** 
> #### PLIK GEO ( jak ja to robiłem)
> #### Opreracja 1 (podział na obiekty)
> > znajdź
> >```XML
<geogname>
<emph render="italic">
> >```
> > i zastąp na: 
> >```JSON
{
    "GDZIE": ["
> >```

> #### Opreracja 2 (podział na obiekty)
> > znajdź
> >```XML
</geogname>
> >```
> > i zastąp na: 
> >```JSON
   ]
}, 
> >```

> #### Opreracja 3 (typ miejsa) szereg operacji dla każdego typu a później ręczna poprawka typów indywidualnych na wzór, przykłąd dla przedieścia, 
> > znajdź
> >```XML
, przedmieście</emph>
> >```
> > i zastąp na: 
> >```JSON
"],
    "COTO": "przedmieście",
    "SYGNATURY": [
    
> >```

> #### Opreracja 4 (szukanie zduplikowanych miejsc)
> > znajdź
> >```
patrz
> >```
> > podaje przykłąd o co chodzi 
> >```
Augustendorf, patrz Augustdorf
> >```
> > Następnie trzeba usunąć całą to pozycję kopiując nazwę wariantową i znaleźć ten `Augustdorf` i dodać wariant nazwy w postaci (oto cały obiekt) 
> >```JSON
{
        "GDZIE": ["Augustdorf", "Augustendorf", "Augustendorf"],
        "COTO": ["wieś"],
        "SYGNATURY": [1888]
},
> >```

> #### Opreracja 5 (SYGNATURY) niekiedy sygnatury są podane w przedizale 23 - 30 niestety jeśli ten "-" program potraktuje to jako działanie arytmetyczne..
> > znajdź
> >```
 - 
> >```
> > i zastąp na
> >```JSON
, "od-do", 
> >```
> > Następnie trzeba usunąć całą to pozycję kopiując nazwę wariantową i znaleźć ten `Augustdorf` i dodać wariant nazwy w postaci (oto cały obiekt) 
> >```JSON
{
        "GDZIE": ["Augustdorf", "Augustendorf", "Augustendorf"],
        "COTO": ["wieś"],
        "SYGNATURY": [1888]
},
> >```

> #### Opreracja 6 (KORYGOWANIE) Teraz Trzeba sprawdzić czy plik przypomina wzorcowy i wszystkie inne dane które zostały a nie pasują do wzorca umieścić w UWAGACH np
> >```JSON
{
    "GDZIE": "Camp Morton, Manitoba (Kanada)",
    "UWAGI": "informacja o ślubie",
    "SYGNATURY": [1732]
},
> >```
> > albo np. 
> >```JSON
{
    "GDZIE": "Hostów",
    "COTO": "parafia",
    "UWAGI" : "gr.-kat.",
    "SYGNATURY": [1679]
},
> >```
> > na koniec można jeszcze sprawdzić czy w dokumencie nie ma znaków `</` , `<` i `>` jeżeli są trzeba odpoiednio poprawić otaczające ich miejsce.

> **Tak sporządzony plik można zapisać jako GEO.json dodając w pierwszej lini znak "[" i w ostatniej "]" można też na samym początku utworzyć rozszerzenie JSON, wówczas program pokoloruje składnie, co może ułatwić wykrycie błędów.**
