

PLIKI PREZEKONWERTOWANE Z XML 17 III 2017 DO JOSON 
ZA POMOCĄ
 http://codebeautify.org/xmltojson

________________________________________________
## ZMIANY 
reczne lub przy pomocy http://www.jsoneditoronline.org/
__________

> PLIK `300_H_MOJZESZ_ZABUZ_1789-1943.json`
> DOKONANO ZMIANY POLOZENIA OBIEKTU, PRZESUWAJĆ GO NA SAM KONIEC.
>```JSON
> "arrangement": {
>        "head": "Układ",
>        "p": "Alfabetyczny wg nazw gmin i chronologiczny w obrębie poszczególnych serii wpisów (podobnie dopływy).",
>        "_id": "a5"
>      }
>```
>  


> PLIK `300_H_MOJZESZ_ZABUZ_1789-1943.json`
> USUNIETO OBIEKT
> ```JSON
>  {
>               "did": {
>                 "unitid": {
>                   "_label": "Sygn",
>                   "__text": "1744"
>                 },
>                 "unitdate": "\nbrak",
>                 "unittitle": "brak",
>                 "physdesc": "brak"
>               },
>               "note": {
>                "p": "Wpis pusty, pomyłka w inwentaryzacji."
>               },
>               "altformavail": {
>                 "p": ""
>               },
>               "_level": "file"
>             },
> ```

> PLIK `302_I_PRAWOSLAW_WOLYN_POLESIE_1823-1913_1929-1939.json`
> POPRAWIONO ZAPIS JEZYKU W OBIEKCIE:
> ```JSON
> {
>     "did": {
>         "unitid": [{
>                 "_label": "Sygn",
>                 "__text": "15"
>             },
>             {
>                 "_type": "former",
>                 "__text": "brak"
>             }
>         ],
>         "unittitle": "Par. Kamień Koszyrski, św. Eliasza proroka; księga zeznań przedślubnych. ",
>         "unitdate": {
>             "_type": "inclusive",
>             "_normal": "1827/1834",
>             "__text": "1827–1834"
>         },
>         "physdesc": "księga oprawna, s. 18",
>         "langmaterial": [
>             "pol.",
>             {
>                 "language": {
>                     "_langcode": "pol",
>                     "__text": "pol."
>                 }
>             }
>         ],
>         "daogrp": {
>             "daodesc": {
>                 "p": "galeria ze skanami:  "
>             },
>             "daoloc": {
>                 "_linktype": "locator",
>                 "_href": "http://agadd.home.net.pl/metrykalia/302/sygn.%2015/indeks.htm"
>             },
>             "_linktype": "extended"
>         }
>     },
>     "note": {
>         "p": "parafia wyznania greckokatolickiego (do r. 1828 greckokatolicka diecezja łucka, w l. 1828-1839 – połocka); ze względu na brak ksiąg tego wyznania, pochodzących z omawianego terenu w zbiorach AGAD, została ona włączona do niniejszego zespołu; od roku 1839 – parafia prawosławna (w okresie międzywojennym prawosławna diecezja wołyńska); zły stan zachowania"
>     },
>     "altformavail": {
>         "p": "Mikrofilm: 83 504"
>     },
>     "_level": "file"
> },
> ```
> Z
> ```JSON
> "langmaterial": [
>     "pol.",
>     {
>         "language": {
>             "_langcode": "pol",
>             "__text": "pol."
>         }
>     }
> ],
> ```
> NA
> ```JSON
> "langmaterial": {
>     "language": {
>         "_langcode": "pol",
>         "__text": "pol."
>     }
> },
> ```

> PLIK `301_A_RZ-KAT_ARCH-LWOW_1604-1945.json`
> USUNIENTO OBIEKTY
```JSON
{
							"did": {
								"unitid": [
									{
										"_label": "Sygn",
										"__text": "1673*"
									},
									{
										"_type": "former"
									}
								],
								"unitdate": " ",
								"unittitle": " ",
								"langmaterial": " ",
								"physdesc": " "
							},
							"note": {
								"p": "*błędna kwalifikacja księgi; jest opisana pod sygn. 1645"
							},
							"_level": "file"
						},
```
i
```JSON
{
              "did": {
                "unitid": [
                  {
                    "_label": "Sygn",
                    "__text": "1491*"
                  },
                  {
                    "_type": "former"
                  }
                ],
                "unitdate": "  ",
                "unittitle": " ",
                "langmaterial": " ",
                "physdesc": " "
              },
              "note": {
                "p": "*pod tą sygn. znajdowała się mylnie zakwalifikowana do zespołu księga metrykalna urodzeń 1870-1890, ślubów 1873-1890 i zgonów 1870-1890 z gr.-kat. parafii Milno dla wsi Gontowa, Blich i Milno; księga została przeniesiona do zespołu nr 298"
              },
              "altformavail": {
                "p": "Mikrofilm: 75290"
              },
              "_level": "file"
            },
```            

> PLIK `301_A_RZ-KAT_ARCH-LWOW_1604-1945.json`
> KOREKTA ZAPISU JENZYKA
```JSON
{
              "did": {
                "unitid": [
                  {
                    "_label": "Sygn",
                    "__text": "570"
                  },
                  {
                    "_type": "former",
                    "__text": "3Śl., 82"
                  }
                ],
                "unitdate": {
                  "_type": "inclusive",
                  "_normal": "1868/1872",
                  "__text": "\n1868-1872"
                },
                "unittitle": "Par. Kołomyja,\n dek. Kołomyja;\n Księga metrykalna ślubów tylko dla wojskowych zamieszkałych w Kołomyji (tzw. Liber militaris)",
                "langmaterial": "niem.",
                "physdesc": "księga oprawna, s. 33",
                "daogrp": {
                  "daodesc": {
                    "p": "galeria ze skanami:  "
                  },
                  "daoloc": {
                    "_linktype": "locator",
                    "_href": "http://agadd.home.net.pl/metrykalia/301/sygn.%20570/indeks.htm"
                  },
                  "_linktype": "extended"
                }
              },
              "note": {
                "p": "t. III; AGAD"
              },
              "altformavail": {
                "p": "Mikrofilm: 74366"
              },
              "_level": "file"
            },
```
> Z
> ```JSON
> "langmaterial": "niem.",
> ```
> NA
> ```JSON
> "langmaterial": {
>     "language": {
>         "_langcode": "ger",
>         "__text": "niem."
>     }
> },
> ```

ORAZ w OBIEKCIE
```JSON
{
              "did": {
                "unitid": [
                  {
                    "_label": "Sygn",
                    "__text": "1083"
                  },
                  {
                    "_type": "former",
                    "__text": "1Ur., Śl., Zg., 136"
                  }
                ],
                "unitdate": {
                  "_type": "inclusive",
                  "_normal": "1825/1873",
                  "__text": "\n1825-1873*"
                },
                "unittitle": "Par. Podkamień Brodzki,\n dek. Brody;\n Ekstrakty z księgi metrykalnej urodzeń 1825-1847 i zgonów 1825-1873 dla całej parafii",
                "langmaterial": "niem., ros.",
                "physdesc": "księga oprawna, s. 13",
                "daogrp": {
                  "daodesc": {
                    "p": "galeria ze skanami:  "
                  },
                  "daoloc": {
                    "_linktype": "locator",
                    "_href": "http://agadd.home.net.pl/metrykalia/301/sygn.%201083/indeks.htm"
                  },
                  "_linktype": "extended"
                }
              },
              "note": {
                "p": "*w księdze jedynie kilka wpisów; podano daty skrajne (liczne wakaty roczników); akta oprawione w księgę; AGAD"
              },
              "altformavail": {
                "p": "Mikrofilm: 74883"
              },
              "_level": "file"
            },
```
> Z
> ```JSON
> "langmaterial": "niem., ros.",
> ```
> NA
> ```JSON
> "langmaterial": {
>  "language": [{
>      "_langcode": "ger",
>      "__text": "niem."
>    },
>    {
>      "_langcode": "rus",
>      "__text": "ros."
>    }
>  ]
>},
> ```

ORAZ W OBIIEKCIE
```JSON
{
              "did": {
                "unitid": [
                  {
                    "_label": "Sygn",
                    "__text": "1714"
                  },
                  {
                    "_type": "former",
                    "__text": "911"
                  }
                ],
                "unitdate": {
                  "_type": "inclusive",
                  "_normal": "1871/1902, 1908, 1913, 1925, 1930, 1947, 1949/1950",
                  "__text": "\n1871-1902 [1908, 1913, 1925, 1930, 1947, 1949-1950]*"
                },
                "unittitle": "Par. Złotniki,\n dek. Podhajce;\n Księga metrykalna urodzeń dla całej parafii",
                "langmaterial": {
                  "language": {
                    "_langcode": "lat",
                    "__text": "łac."
                  },
                  "__text": ", pol., franc."
                },
                "physdesc": "księga oprawna, s. 321",
                "daogrp": {
                  "daodesc": {
                    "p": "galeria ze skanami:  "
                  },
                  "daoloc": {
                    "_linktype": "locator",
                    "_href": "http://agadd.home.net.pl/metrykalia/301/sygn.%201714/indeks.htm"
                  },
                  "_linktype": "extended"
                }
              },
              "note": {
                "p": "*w księdze liczne dodatkowe dokumenty (wszyte i luzem): informacje o ur. i chrztach, z 1871 r., s. 7, z 1889 r., sporz. 1908 r., s. 139, z 1891 r., s. 190-191, z 1892 r., s. 203, z 1896 r., s. 248, 251, b.d., s. 210; zaświadczenie o ur. z 1891 r., wyst. 1925 r., s. 174-175; pisma od osób prywatnych z prośbą o wydanie metryk chrztów z l. 1947 (prawdopodobnie jest to pismo z koperty, s. 135-135a), 1937, s. 140-141, 163; świadectwa chrztu z 1877 r., wyst. 1897 r., s. 156 i z 1895 r., wyst. 1900 r., s. 235-235a; pismo Konsystorza we Lwowie do urzędu par. w Złotnikach z poleceniem wpisania do księg ur. właściwego nazwiska dziecka, 1913 r., s. 198; informacja o śl. w 1930 r., s. 308; pusta koperta  zadresowana w Ustroniu, pow. Zgorzelec, do proboszcza we Wrocławiu, 1947 r., s. 135-135a; korespondencja między zarządem gminy w Laskowicach a starostwem powiatowym w Oławie dot. przekazania w 1949 r. ksiąg metrykalnych z par. Złotniki (zał. wykaz ksiąg i protokół zdawczo-odbiorczy), 1949-1950, s. 136-138; księga źle zszyta, lata przemieszane (1872-1875, s. 1-34; 1881-1884, s. 35-54; ponownie 1881, s. 55-56; 1879-1881, s. 57-72; 1878-1879, s. 73-74; ponownie 1881, s. 75-80; 1873-1874, s. 81-84; 1878, s. 85-90; 1884-1889, s. 91-147; 1876-1878, s. 148-167; 1890-1902, s. 168-321); (bzs)"
              },
              "altformavail": {
                "p": "Mikrofilm: 90524"
              },
              "_level": "file"
            },
```
> Z
> ```JSON
> "langmaterial": {
>                  "language": {
>                    "_langcode": "lat",
>                    "__text": "łac."
 >                 },
>                  "__text": ", pol., franc."
>                },
> ```
> NA
> ```JSON
> "langmaterial": {
>  "language": [{
>      "_langcode": "lat",
>      "__text": "łac."
>    },
>    {
>      "_langcode": "pol",
>      "__text": "pol."
>    },
>    {
>      "_langcode": "fre",
>      "__text": "franc."
>    }
>  ]
>},
> ```
