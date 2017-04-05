import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-skany-info',
  templateUrl: './skany-info.component.html',
  styleUrls: ['./skany-info.component.scss'],
  providers: [MdIconRegistry]
})
export class SkanyInfoComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  public LICENCJA() {
    let url = '#';
    window.open(url);
  }  
  public AGAD() {
    let url = 'http://www.agad.gov.pl/inwentarze/testy.html';
    window.open(url);
  }  
  public KONTAKT() {
    let url = 'https://www.facebook.com/JanRomanCisowski';
    window.open(url);
  }  
public GIT_HUB() {
    let url = 'https://github.com/Cisowscy/skany/';
    window.open(url);
  }  public GIT_MTS() {
    let url = 'https://cisowscy.visualstudio.com/skany';
    window.open(url);
  }  public GIT_GFB() {
    let url = 'https://console.firebase.google.com/project/skany-1490141465819';
    window.open(url);
  }  

  tytul01 = "Angular 4";
  opis01 = "środowisko";
  public klik01() {
    let url = 'https://angular.io/docs/ts/latest/api/';
    window.open(url);
  }  
  tytul02 = "Material";
  opis02 = "stylizacja";
  public klik02() {
    let url = 'https://material2-demo-314e9.firebaseapp.com';
    window.open(url);
  }  
  tytul03 = "Flex";
  opis03 = "stylizacja";
  public klik03() {
    let url = 'https://tburleson-layouts-demos.firebaseapp.com';
    window.open(url);
  }  
  tytul04 = "Color";
  opis04 = "stylizacja";
  public klik04() {
    let url = 'https://www.materialui.co/colors';
    window.open(url);
  }  
  tytul05 = "MDL";
  opis05 = "stylizacja";
  public klik05() {
    let url = 'http://mseemann.io/angular2-mdl';
    window.open(url);
  }  
  tytul06 = "TypeScript";
  opis06 = "jenzyk";
  public klik06() {
    let url = 'https://www.typescriptlang.org/docs/tutorial.html';
    window.open(url);
  }
   
  tytul07 = "SASS/SCSS";
  opis07 = "jenzyk";
  public klik07() {
    let url = '';
    window.open(url);
  }
  tytul08 = "HTML 5.1";
  opis08 = "jenzyk";
  public klik08() {
    let url = '';
    window.open(url);
  }
   tytul09 = "node.js";
  opis09 = "środowisko";
  public klik09() {
    let url = '';
    window.open(url);
  }
   tytul10 = "ChakraCore";
  opis10 = "środowisko";
  public klik10() {
    let url = '';
    window.open(url);
  }
   tytul11 = "NTVS";
  opis11 = "środowisko";
  public klik11() {
    let url = '';
    window.open(url);
  }
  tytul12 = "dotnet";
  opis12 = "środowisko";
  public klik12() {
    let url = '';
    window.open(url);
  }
   tytul13 = "AspNetCore";
  opis13 = "środowisko";
  public klik13() {
    let url = '';
    window.open(url);
  }
   tytul14 = "...";
  opis14 = "...";
  public klik14() {
    let url = '';
    window.open(url);
  }
   tytul15 = "...";
  opis15 = "...";
  public klik15() {
    let url = '';
    window.open(url);
  }
   tytul16 = "...";
  opis16 = "...";
  public klik16() {
    let url = '';
    window.open(url);
  }
   tytul17 = "...";
  opis17 = "...";
  public klik17() {
    let url = '';
    window.open(url);
  }
   tytul18 = "...";
  opis18 = "...";
  public klik18() {
    let url = '';
    window.open(url);
  }
   tytul19 = "...";
  opis19 = "...";
  public klik19() {
    let url = '';
    window.open(url);
  }
   tytul20 = "...";
  opis20 = "...";
  public klik20() {
    let url = '';
    window.open(url);
  }
}
