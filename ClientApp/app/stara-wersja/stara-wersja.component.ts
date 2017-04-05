import { Component, Inject, ViewChild, TemplateRef } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { GoogleAnalyticsService } from 'angular-ga';



//(jquery ale usunolem z CLI seting -angular ) 
/*declare var $: any;*/

@Component({
  moduleId: module.id,
  selector: 'app-stara-wersja',
  templateUrl: './stara-wersja.component.html',
  styleUrls: ['./stara-wersja.component.scss']
})
export class StaraWersjaComponent  {

 // dialogRef: MdDialogRef<DIALOG01>;
 /* lastCloseResult: string;
  actionsAlignment: string;
  config: MdDialogConfig = {
    disableClose: false,
    width: '600px',
    height: '700px',    
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      message: 'Jazzy jazz jazz'
    }
  };
  numTemplateOpens = 0;

  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
    // Possible useful example for the open and closeAll events.
    // Adding a class to the body if a dialog opens and
    // removing it after all open dialogs are closed
    dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }*/
/*
  openDIALOG01() {
    this.dialogRef = this.dialog.open(DIALOG01, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }

  openDIALOG02a() {
    let dialogRef = this.dialog.open(DIALOG02a, this.config);
    dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
  }

  openDIALOG() {
    this.numTemplateOpens++;
    this.dialog.open(this.template, this.config);
  } */

//----------------------------------------------------  


  title = 'abc..';
  podtytul = "SZTUCZKA NA ŁATWIEJSZY DOSTĘP DO SKANÓW AGAD (możliwość szybkiego przeglądania danej księgi, lub zapisu skanow na dysk w celu dostępu offline np przy indeksacji ..w podroży)";
  krok1 = "Otworz notatnik a następnie udaj się na stronę AGAD-u zaglądając przy tym do interesującej Cię księgi";
  krok2 = "Teraz skopiuj i wklej do notatnikalub bezpośrednio poniżej, 2 linki: PIERWSZY ELEMENT KSIEGI i OSTATNI ELEMENT KSIEGI, powinny one wyglądać podobnie jak w przykładzie";
  krok3 = "UWAGA!!! jeśli pierwszy element nie koczy się (_0000-metryczka) ręcznie przemianuj koncowke!!";

  ngAfterViewInit(){
         /*  $(document).ready(function(){
             $("p").click(function(){
             //$(this).hide();
             });
           });*/
     }


  ngOnInit() {
  }

}

//----------------------------------------------------  

/*
@Component({
  selector: 'dialog-01',
  templateUrl: './dialog-01.component.html',
  styleUrls: ['./dialog-01.component.scss'] 
})
export class DIALOG01 {
  private _dimesionToggle = false;

  constructor(
    public dialogRef: MdDialogRef<DIALOG01>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  togglePosition(): void {
    this._dimesionToggle = !this._dimesionToggle;

    if (this._dimesionToggle) {
      this.dialogRef
        .updateSize('500px', '500px')
        .updatePosition({ top: '25px', left: '25px' });
    } else {
      this.dialogRef
        .updateSize()
        .updatePosition();
    }
  }
}

@Component({
  selector: 'demo-content-element-dialog',
  styles: [
    `img {
      max-width: 100%;
    }`
  ],
  template: `
    <h2 md-dialog-title>Neptune</h2>

    <md-dialog-content>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"/>

      <p>
        Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the
        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,
        and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more
        massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger
        than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1
        astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the
        astronomical symbol ♆, a stylised version of the god Neptune's trident.
      </p>
    </md-dialog-content>

    <md-dialog-actions [attr.align]="actionsAlignment">
      <button
        md-raised-button
        color="primary"
        md-dialog-close>Close</button>

      <a
        md-button
        color="primary"
        href="https://en.wikipedia.org/wiki/Neptune"
        target="_blank">Read more on Wikipedia</a>

      <button
        md-button
        color="secondary"
        (click)="showInStackedDialog()">
        Show in Dialog</button>
    </md-dialog-actions>
  `
})
export class DIALOG02a {
  actionsAlignment: string;

  constructor(public dialog: MdDialog) { }

  showInStackedDialog() {
    this.dialog.open(DIALOG02b);
  }
}

@Component({
  selector: 'demo-iframe-dialog',
  styles: [
    `iframe {
      width: 800px;
    }`
  ],
  template: `
    <h2 md-dialog-title>Neptune</h2>

    <md-dialog-content>
      <iframe frameborder="0" src="https://en.wikipedia.org/wiki/Neptune"></iframe>
    </md-dialog-content>

    <md-dialog-actions>
      <button
        md-raised-button
        color="primary"
        md-dialog-close>Close</button>
    </md-dialog-actions>
  `
})
export class DIALOG02b {
}
*/