import { Injectable } from '@angular/core';
import { MarkerInterface } from './marker.model';

@Injectable()
export class LokalizacjeService {
  constructor() {}

  // Lokalizacje: MarkerInterface[] = [
  Lokalizacje = [
    { label: "Adamówka", gps: [24.9432, 49.4352], pozycje: [
      {zesp: 301, sygn: 112, rodzaj: "chrzty", zakres: "1777-1784", lokalizacja: "Adamówka (wieś)", rewir: "Par. Brzeżany, dek. Brzeżany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 117, rodzaj: "śluby", zakres: "1777-1782", lokalizacja: "Adamówka (wieś)", rewir: "Par. Brzeżany, dek. Brzeżany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 120, rodzaj: "zgony", zakres: "1776-1784", lokalizacja: "Adamówka (wieś)", rewir: "Par. Brzeżany, dek. Brzeżany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 122, rodzaj: "urodzenia, śluby, zgony",  zakres: "1872-1881", lokalizacja: "Adamówka (przedmieście Brzeżan)", rewir: "Par. Brzeżany, dek. Brzeżany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 123, rodzaj: "urodzenia, śluby, zgony",  zakres: "1882-1887", lokalizacja: "Adamówka (przedmieście Brzeżan)", rewir: "Par. Brzeżany, dek. Brzeżany", religia:"rzymskokatolicka"}
    ]},
    { label: "Adamy", gps: [24.6910, 50.0368], pozycje: [
      {zesp: 301, sygn: 159, rodzaj: "urodzenia", zakres: "1832-1839", lokalizacja: "Adamy (przysiółek wsi Grabowa)", rewir: "Par. Busk, dek. Busk", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 166, rodzaj: "urodzenia", zakres: "1839-1857", lokalizacja: "Adamy (przysiółek wsi Grabowa)", rewir: "Par. Busk, dek. Busk", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 169, rodzaj: "śluby", zakres: "1834-1847",  lokalizacja: "Adamy (przysiółek wsi Grabowa)", rewir: "Par. Busk, dek. Busk", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 1832, rodzaj: "urodzenia, śluby, zgony", zakres: "1908",  lokalizacja: "Adamy (przysiółek wsi Grabowa)", rewir: "Par. Busk, dek. Busk", religia:"rzymskokatolicka"}
    ]},
    { label: "Alfredówka", gps: [24.4828, 49.7694], pozycje: [
      {zesp: 301, sygn: 1460, rodzaj: "urodzenia", zakres: "1820-1851", lokalizacja: "Alfredówka (wieś)", rewir: "Par. Wyżniany, dek. Gliniany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 1461, rodzaj: "urodzenia", zakres: "1851-1886", lokalizacja: "Alfredówka (wieś)", rewir: "Par. Wyżniany, dek. Gliniany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 1468, rodzaj: "zgony", zakres: "1820-1855", lokalizacja: "Alfredówka (wieś)", rewir: "Par. Wyżniany, dek. Gliniany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 1816, rodzaj: "urodzenia, śluby, zgony", zakres: "1898", lokalizacja: "Alfredówka (wieś)", rewir: "Par. Wyżniany, dek. Gliniany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 1977, rodzaj: "urodzenia, zgony", zakres: "1915", lokalizacja: "Alfredówka (wieś)", rewir: "Par. Pohorylce/Pogorzelce, dek. Gliniany", religia:"rzymskokatolicka"}
    ]},
    { label: "Artasów", gps: [24.1272, 50.0102], pozycje: [
      {zesp: 301, sygn: 728, rodzaj: "urodzenia, śluby, zgony", zakres: "1818, 1823, 1825, 1838, 1839", lokalizacja: "Artasów (wieś)", rewir: "Par. Kulików, dek. Żółkiew", religia:"rzymskokatolicka"}
    ]},
    { label: "Artyszczów", gps: [23.6767, 49.7674], pozycje: [
      {zesp: 301, sygn: 347, rodzaj: "urodzenia", zakres: "1846-1863", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 353, rodzaj: "śluby", zakres: "1834-1846", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 356, rodzaj: "śluby", zakres: "1846-1857", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 360, rodzaj: "zgony", zakres: "1834-1845", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 362, rodzaj: "zgony", zakres: "1848-1855", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 363, rodzaj: "zgony", zakres: "1856-1891", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 372, rodzaj: "urodzenia, śluby, zgony", zakres: "1785-1833", lokalizacja: "Artyszczów (wieś)", rewir: "Par. Gródek Jagielloński, dek. Gródek Jagielloński", religia:"rzymskokatolicka"},
     ]},
    { label: "Agustdorf", gps: [25.5825, 48.4668], pozycje: [
      {zesp: 301, sygn: 1888, rodzaj: "zgony", zakres: "1845-1853", lokalizacja: "Agustdorf (wieś)", rewir: "Par. Śniatyn, dek. Horodenka", religia:"rzymskokatolicka"}
    ]},
    { label: "Augustówka", gps: [25.0991, 49.5925], pozycje: [
      {zesp: 301, sygn: 181, rodzaj: "chrzty", zakres: "1760-1762", lokalizacja: "Augustówka (wieś)", rewir: "Par. Buszcze, dek. Brzeżany", religia:"rzymskokatolicka"},
      {zesp: 301, sygn: 182, rodzaj: "śluby", zakres: "1784-1821", lokalizacja: "Augustówka (wieś)", rewir: "Par. Buszcze, dek. Brzeżany", religia:"rzymskokatolicka"}
    ]},
    { label: "Babianka", gps: [24.858, 48.7233], pozycje: [
      {zesp: 301, sygn: 1055, rodzaj: "urodzenia, śluby, zgony", zakres: "1841", lokalizacja: "Babianka (wieś)", rewir: "Par. Otynia, dek. Stanisławów", religia:"rzymskokatolicka"}
    ]},
  ];
}

