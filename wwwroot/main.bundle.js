webpackJsonp([1,4],{

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 127;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(249);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(237);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { MdlLayoutComponent } from '@angular-mdl/core';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.otherCountryCode = null;
        this.countries = [
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'Italy', code: 'IT' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Poland', code: 'PL' },
            { name: 'Spain', code: 'ES' },
            { name: 'United Kingdom', code: 'UK' },
        ];
        /*constructor(private dialogService: MdlDialogService){}
      
        public test(){
          this.dialogService.alert("test");
        }
        public componentSelected(mainLayout: MdlLayoutComponent) {
          mainLayout.closeDrawerOnSmallScreens();
        }*/
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(408),
        styles: [__webpack_require__(397)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_google_maps_core__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_ga__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skany_info_skany_info_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__skany_filtrowanie_skany_filtrowanie_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__skany_odfiltrowane_skany_odfiltrowane_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__skany_pozycja_przegladarka_skany_pozycja_przegladarka_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__skany_pozycja_szczegoly_skany_pozycja_szczegoly_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__skany_filtrowanie_mapy_mapy_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__skany_filtrowanie_mapy_angular2_google_maps_angular2_google_maps_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stara_wersja_stara_wersja_component__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {} from '@angular/platform-server';



//import { MdlModule } from '@angular-mdl/core';
//import { MdlSelectModule } from '@angular-mdl/select';
//import { MdlPopoverModule } from '@angular-mdl/popover';
//import { MdlExpansionPanelModule } from '@angular-mdl/expansion-panel';
//import { PrismDirective } from '@mseemann/prism';













// import {DIALOG01, DIALOG02a, DIALOG02b} from './stara-wersja/stara-wersja.component'; 
//
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            //RouterModule.forRoot(appRoutes),    
            /*[MaterialModule],*/
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular_ga__["a" /* GoogleAnalyticsModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_10_angular_ga__["b" /* GA_TOKEN */],
                useValue: 'UA-93512619-1'
            }),
            // MdlModule,
            //  MdlSelectModule,
            // MdlPopoverModule,
            //  MdlExpansionPanelModule,
            __WEBPACK_IMPORTED_MODULE_9_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDPPObRPjynWdIGc86wy-kjonb823BBOCg'
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__skany_info_skany_info_component__["a" /* SkanyInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__skany_filtrowanie_skany_filtrowanie_component__["a" /* SkanyFiltrowanieComponent */],
            __WEBPACK_IMPORTED_MODULE_15__skany_odfiltrowane_skany_odfiltrowane_component__["a" /* SkanyOdfiltrowaneComponent */],
            __WEBPACK_IMPORTED_MODULE_16__skany_pozycja_przegladarka_skany_pozycja_przegladarka_component__["a" /* SkanyPozycjaPrzegladarkaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__skany_pozycja_szczegoly_skany_pozycja_szczegoly_component__["a" /* SkanyPozycjaSzczegolyComponent */],
            __WEBPACK_IMPORTED_MODULE_18__skany_filtrowanie_mapy_mapy_component__["a" /* MapyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__skany_filtrowanie_mapy_angular2_google_maps_angular2_google_maps_component__["a" /* Angular2GoogleMapsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__stara_wersja_stara_wersja_component__["a" /* StaraWersjaComponent */]
        ],
        //providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2GoogleMapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Angular2GoogleMapsComponent = (function () {
    function Angular2GoogleMapsComponent() {
        // google maps zoom level
        this.zoom = 6;
        // initial center position for the map
        this.lat = 49.839426;
        this.lng = 24.029996;
        /* jakiś error niewiem co kamon
           mapClicked($event: MouseEvent) {
            this.markers.push({
              lat: $event.coords.lat,
              lng: $event.coords.lng
            });
          }
          */
        /* kurde!!!!!!!!!!!!!!!!!!!!!! jak dodać zmienną w angular ??
        let pinezka_dom: string = 'https://maps.gstatic.com/mapfiles/ms2/micons/homegardenbusiness.png';*/
        this.markers = [
            {
                lat: 48.997633,
                lng: 25.197839,
                tytul: 'Puźniki',
                label: '',
                draggable: false,
                pinezka: 'https://maps.gstatic.com/mapfiles/ms2/micons/homegardenbusiness.png'
            }
        ];
        this.circlers = [
            {
                lat: 48.997633,
                lng: 25.197839,
                rad: 1500,
                barwa: 'red',
                draggable: false,
                editable: false
            }
        ];
    }
    Angular2GoogleMapsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    Angular2GoogleMapsComponent.prototype.clickedCircle = function (index) {
        console.log("clicked the marker: " + index);
    };
    Angular2GoogleMapsComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    Angular2GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    return Angular2GoogleMapsComponent;
}());
Angular2GoogleMapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-angular2-google-maps',
        template: __webpack_require__(409),
        styles: [__webpack_require__(398)]
    }),
    __metadata("design:paramtypes", [])
], Angular2GoogleMapsComponent);

// just an interface for type safety.
//# sourceMappingURL=angular2-google-maps.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapyComponent = (function () {
    function MapyComponent() {
    }
    MapyComponent.prototype.ngOnInit = function () {
    };
    return MapyComponent;
}());
MapyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mapy',
        template: __webpack_require__(410),
        styles: [__webpack_require__(399)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    })
], MapyComponent);

//# sourceMappingURL=mapy.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_ga__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkanyFiltrowanieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkanyFiltrowanieComponent = (function () {
    function SkanyFiltrowanieComponent(gaService) {
        this.gaService = gaService;
    }
    SkanyFiltrowanieComponent.prototype.ngOnInit = function () {
        this.gaService.event.emit({
            category: 'app',
            action: 'bootstrap'
        });
    };
    return SkanyFiltrowanieComponent;
}());
SkanyFiltrowanieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skany-filtrowanie',
        template: __webpack_require__(411),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */]) === "function" && _a || Object])
], SkanyFiltrowanieComponent);

var _a;
//# sourceMappingURL=skany-filtrowanie.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_ga__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkanyInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkanyInfoComponent = (function () {
    function SkanyInfoComponent(gaService) {
        this.gaService = gaService;
        this.tytul01 = "Angular 4";
        this.opis01 = "środowisko";
        this.tytul02 = "Material";
        this.opis02 = "stylizacja";
        this.tytul03 = "Flex";
        this.opis03 = "stylizacja";
        this.tytul04 = "Color";
        this.opis04 = "stylizacja";
        this.tytul05 = "MDL";
        this.opis05 = "stylizacja";
        this.tytul06 = "TypeScript";
        this.opis06 = "jenzyk";
        this.tytul07 = "SASS/SCSS";
        this.opis07 = "jenzyk";
        this.tytul08 = "HTML 5.1";
        this.opis08 = "jenzyk";
        this.tytul09 = "node.js";
        this.opis09 = "środowisko";
        this.tytul10 = "ChakraCore";
        this.opis10 = "środowisko";
        this.tytul11 = "NTVS";
        this.opis11 = "środowisko";
        this.tytul12 = "dotnet";
        this.opis12 = "środowisko";
        this.tytul13 = "AspNetCore";
        this.opis13 = "środowisko";
        this.tytul14 = "...";
        this.opis14 = "...";
        this.tytul15 = "...";
        this.opis15 = "...";
        this.tytul16 = "...";
        this.opis16 = "...";
        this.tytul17 = "...";
        this.opis17 = "...";
        this.tytul18 = "...";
        this.opis18 = "...";
        this.tytul19 = "...";
        this.opis19 = "...";
        this.tytul20 = "...";
        this.opis20 = "...";
    }
    SkanyInfoComponent.prototype.ngOnInit = function () {
        this.gaService.event.emit({
            category: 'app',
            action: 'bootstrap'
        });
    };
    SkanyInfoComponent.prototype.LICENCJA = function () {
        var url = '#';
        window.open(url);
    };
    SkanyInfoComponent.prototype.AGAD = function () {
        var url = 'http://www.agad.gov.pl/inwentarze/testy.html';
        window.open(url);
    };
    SkanyInfoComponent.prototype.KONTAKT = function () {
        var url = 'https://www.facebook.com/JanRomanCisowski';
        window.open(url);
    };
    SkanyInfoComponent.prototype.GIT_HUB = function () {
        var url = 'https://github.com/Cisowscy/skany/';
        window.open(url);
    };
    SkanyInfoComponent.prototype.GIT_MTS = function () {
        var url = 'https://cisowscy.visualstudio.com/skany';
        window.open(url);
    };
    SkanyInfoComponent.prototype.GIT_GFB = function () {
        var url = 'https://console.firebase.google.com/project/skany-1490141465819';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik01 = function () {
        var url = 'https://angular.io/docs/ts/latest/api/';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik02 = function () {
        var url = 'https://material2-demo-314e9.firebaseapp.com';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik03 = function () {
        var url = 'https://tburleson-layouts-demos.firebaseapp.com';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik04 = function () {
        var url = 'https://www.materialui.co/colors';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik05 = function () {
        var url = 'http://mseemann.io/angular2-mdl';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik06 = function () {
        var url = 'https://www.typescriptlang.org/docs/tutorial.html';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik07 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik08 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik09 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik10 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik11 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik12 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik13 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik14 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik15 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik16 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik17 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik18 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik19 = function () {
        var url = '';
        window.open(url);
    };
    SkanyInfoComponent.prototype.klik20 = function () {
        var url = '';
        window.open(url);
    };
    return SkanyInfoComponent;
}());
SkanyInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skany-info',
        template: __webpack_require__(412),
        styles: [__webpack_require__(401)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdIconRegistry */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_ga__["c" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_ga__["c" /* GoogleAnalyticsService */]) === "function" && _a || Object])
], SkanyInfoComponent);

var _a;
//# sourceMappingURL=skany-info.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_ga__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkanyOdfiltrowaneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkanyOdfiltrowaneComponent = (function () {
    function SkanyOdfiltrowaneComponent(gaService) {
        this.gaService = gaService;
    }
    SkanyOdfiltrowaneComponent.prototype.ngOnInit = function () {
        this.gaService.event.emit({
            category: 'app',
            action: 'bootstrap'
        });
    };
    return SkanyOdfiltrowaneComponent;
}());
SkanyOdfiltrowaneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skany-odfiltrowane',
        template: __webpack_require__(413),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */]) === "function" && _a || Object])
], SkanyOdfiltrowaneComponent);

var _a;
//# sourceMappingURL=skany-odfiltrowane.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_ga__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkanyPozycjaPrzegladarkaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkanyPozycjaPrzegladarkaComponent = (function () {
    function SkanyPozycjaPrzegladarkaComponent(gaService) {
        this.gaService = gaService;
    }
    SkanyPozycjaPrzegladarkaComponent.prototype.ngOnInit = function () {
        this.gaService.event.emit({
            category: 'app',
            action: 'bootstrap'
        });
    };
    return SkanyPozycjaPrzegladarkaComponent;
}());
SkanyPozycjaPrzegladarkaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skany-pozycja-przegladarka',
        template: __webpack_require__(414),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */]) === "function" && _a || Object])
], SkanyPozycjaPrzegladarkaComponent);

var _a;
//# sourceMappingURL=skany-pozycja-przegladarka.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_ga__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkanyPozycjaSzczegolyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkanyPozycjaSzczegolyComponent = (function () {
    function SkanyPozycjaSzczegolyComponent(gaService) {
        this.gaService = gaService;
    }
    SkanyPozycjaSzczegolyComponent.prototype.ngOnInit = function () {
        this.gaService.event.emit({
            category: 'app',
            action: 'bootstrap'
        });
    };
    return SkanyPozycjaSzczegolyComponent;
}());
SkanyPozycjaSzczegolyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skany-pozycja-szczegoly',
        template: __webpack_require__(415),
        styles: [__webpack_require__(404)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_ga__["c" /* GoogleAnalyticsService */]) === "function" && _a || Object])
], SkanyPozycjaSzczegolyComponent);

var _a;
//# sourceMappingURL=skany-pozycja-szczegoly.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaraWersjaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//(jquery ale usunolem z CLI seting -angular ) 
/*declare var $: any;*/
var StaraWersjaComponent = (function () {
    function StaraWersjaComponent() {
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
        this.title = 'abc..';
        this.podtytul = "SZTUCZKA NA ŁATWIEJSZY DOSTĘP DO SKANÓW AGAD (możliwość szybkiego przeglądania danej księgi, lub zapisu skanow na dysk w celu dostępu offline np przy indeksacji ..w podroży)";
        this.krok1 = "Otworz notatnik a następnie udaj się na stronę AGAD-u zaglądając przy tym do interesującej Cię księgi";
        this.krok2 = "Teraz skopiuj i wklej do notatnikalub bezpośrednio poniżej, 2 linki: PIERWSZY ELEMENT KSIEGI i OSTATNI ELEMENT KSIEGI, powinny one wyglądać podobnie jak w przykładzie";
        this.krok3 = "UWAGA!!! jeśli pierwszy element nie koczy się (_0000-metryczka) ręcznie przemianuj koncowke!!";
    }
    StaraWersjaComponent.prototype.ngAfterViewInit = function () {
        /*  $(document).ready(function(){
            $("p").click(function(){
            //$(this).hide();
            });
          });*/
    };
    StaraWersjaComponent.prototype.ngOnInit = function () {
    };
    return StaraWersjaComponent;
}());
StaraWersjaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stara-wersja',
        template: __webpack_require__(416),
        styles: [__webpack_require__(405)]
    })
], StaraWersjaComponent);

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
//# sourceMappingURL=stara-wersja.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* głwny pojemnik */\narticle.accordion {\n  display: block;\n  height: calc(100% - 10px);\n  width: calc(100% - 10px);\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n  background-color: #263238;\n  overflow: auto;\n  border-radius: 10px;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3); }\n\n/* podzial na sekcje - wywolywacze - panele*/\narticle.accordion section {\n  position: relative;\n  display: block;\n  float: left;\n  width: 3em;\n  height: calc(100% - 14px);\n  top: 0px;\n  bottom: 0px;\n  margin: 0.5em 0 0.5em 0.5em;\n  color: #37474f;\n  background-color: #37474f;\n  overflow: hidden;\n  border-radius: 5px 0px 0px 5px; }\n\n/* podzial na sekcje - wywolywacze - tytuly*/\narticle.accordion section h2 {\n  position: absolute;\n  font-size: 1.5em;\n  font-weight: bold;\n  width: 12em;\n  height: 2em;\n  top: 60%;\n  left: 0;\n  text-indent: 0em;\n  padding: 0;\n  margin: 0;\n  color: #cfd8dc;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg); }\n\n/* podzial na sekcje - wywolywacze - korekcja linkow*/\narticle.accordion section h2 a {\n  display: block;\n  width: 100%;\n  line-height: 2em;\n  text-decoration: none;\n  color: inherit;\n  outline: 0 none; }\n\n/* podzial na sekcje - kontener sekcji*/\narticle.accordion section:target {\n  width: calc(100% - 17em);\n  padding: 0 1em;\n  color: #212121;\n  background-color: #eceff1;\n  border-radius: 5px 5px 5px 5px; }\n\n/* podzial na sekcje - kontener sekcji - umiejscowienie tytulu*/\narticle.accordion section:target h2 {\n  position: static;\n  font-size: 1.3em;\n  text-indent: 0;\n  color: #263238;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg); }\n\n/*article.accordion section:target h2\r\n{\r\n\tfont-size: 1.5em;\r\n\tfont-weight: bold;\r\n\tcolor: rgba(38,50,56 ,1);\r\n}*/\n/* animacja*/\narticle.accordion section,\narticle.accordion section h2 {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease; }\n\narticle.accordion section p {\n  visibility: hidden; }\n\narticle.accordion section:target p {\n  visibility: visible;\n  height: calc(100% - 10px);\n  width: calc(100%-5em);\n  position: absolute;\n  left: 0em;\n  padding: 0.5em;\n  right: 0;\n  top: 5em;\n  bottom: 0;\n  margin: auto;\n  overflow-x: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".skany-mapy {\n  border: 3px solid #455a64;\n  margin-bottom: 40px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .skany-mapy .mat-tab-header {\n    background: #455a64;\n    color: #cfd8dc; }\n\n.tab-content {\n  padding: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".problemy-z-dialogami {\n  display: inline; }\n\n.pustostan-plynny {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n\n.karta {\n  margin: 10px;\n  height: 100%;\n  border-radius: 25px 25px 10px 60px; }\n  .karta .mat-card-content {\n    color: rgba(0, 0, 0, 0.9);\n    font-weight: bolder;\n    background-color: rgba(255, 255, 255, 0.5);\n    padding: 10px;\n    border-radius: 10px 10px 0px 1px;\n    text-align: center; }\n  .karta .mat-card-actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .karta .mat-card-actions .mat-raised-button {\n      background-color: rgba(0, 0, 0, 0.25);\n      border-radius: 5px 5px 5px 5px;\n      color: rgba(255, 255, 255, 0.9);\n      font-weight: bolder;\n      text-align: center; }\n      .karta .mat-card-actions .mat-raised-button .mat-card-title {\n        color: rgba(255, 255, 255, 0.8);\n        text-align: center;\n        font-weight: bolder;\n        padding-top: 20px; }\n\n.czerwo400 {\n  background-color: rgba(239, 83, 80, 0.9); }\n\n.fiolet400 {\n  background-color: rgba(171, 71, 188, 0.9); }\n\n.granat400 {\n  background-color: rgba(92, 107, 192, 0.9); }\n\n.rozowy300 {\n  background-color: rgba(240, 98, 146, 0.9); }\n\n.bursztyn300 {\n  background-color: rgba(255, 138, 101, 0.9); }\n\n.jesien700 {\n  background-color: rgba(175, 180, 43, 0.9); }\n\n.morze700 {\n  background-color: rgba(0, 121, 107, 0.9); }\n\n.null000 {\n  background-color: rgba(0, 0, 0, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".example-full-width {\n  width: 100%; }\n\n.mat-input-placeholder {\n  color: #455A64; }\n\n.demo-dialog {\n  color: rebeccapurple; }\n\n.demo-dialog-card {\n  max-width: 350px;\n  margin: 20px 0; }\n\nmd-dialog-container {\n  display: block;\n  height: calc(100% - 10px);\n  width: calc(100% - 10px);\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n  background-color: #263238;\n  overflow: auto;\n  border-radius: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<article class=\"accordion\">\r\n\r\n\t<section id=\"INFO\">\r\n\t\t<h2><a href=\"#INFO\">SKANY.CISOWSCY.COM</a></h2>\r\n\t\t<p><app-skany-info></app-skany-info></p>\r\n\t</section>\r\n\t\r\n\t<section id=\"SZUKAJ\">\r\n\t\t<h2><a href=\"#SZUKAJ\">PRZEGLĄDAJ ZASÓB</a></h2>\r\n\t\t<p><app-skany-filtrowanie></app-skany-filtrowanie></p>\r\n\t</section>\r\n\t\r\n\t<section id=\"WYBIERZ\">\r\n\t\t<h2><a href=\"#WYBIERZ\">REZULTAT FILTROWANIA</a></h2>\r\n\t\t<p><app-skany-odfiltrowane></app-skany-odfiltrowane></p>\r\n\t</section>\r\n\t\r\n\t<section id=\"PRZEGLADAJ\">\r\n\t\t<h2><a href=\"#PRZEGLADAJ\">PRZEGLĄDAJ POZYCJE</a></h2>\r\n\t\t<p><app-skany-pozycja-przegladarka></app-skany-pozycja-przegladarka></p>\r\n\t</section>\r\n\t\r\n\t<section id=\"SZCZEGOLY\">\r\n\t\t<h2><a href=\"#SZCZEGOLY\">INFORMACJE O POZYCJI</a></h2>\r\n\t\t<p><app-skany-pozycja-szczegoly></app-skany-pozycja-szczegoly></p>\r\n\t</section>\r\n\r\n</article>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: \r\n\r\n<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n</sebm-google-map>-->\r\n\r\n\r\n<sebm-google-map \r\n      [latitude]=\"lat\"\r\n      [longitude]=\"lng\"\r\n      [zoom]=\"zoom\"\r\n      [disableDefaultUI]=\"false\"\r\n      [zoomControl]=\"false\">\r\n      <!--(mapClick)=\"mapClicked($event)\"-->\r\n    \r\n      <sebm-google-map-marker \r\n          *ngFor=\"let m of markers; let i = index\"\r\n          (markerClick)=\"clickedMarker(m.label, i)\"\r\n          [latitude]=\"m.lat\"\r\n          [longitude]=\"m.lng\"   \r\n          [title]=\"m.tytul\"      \r\n          [label]=\"m.label\"\r\n          [markerDraggable]=\"m.draggable\"\r\n          [iconUrl]=\"m.pinezka\"         \r\n          (dragEnd)=\"markerDragEnd(m, $event)\">\r\n          \r\n        <sebm-google-map-info-window>\r\n          <strong>InfoWindow content</strong>\r\n        </sebm-google-map-info-window>\r\n        \r\n      </sebm-google-map-marker>     \r\n    \r\n      <sebm-google-map-circle \r\n        *ngFor=\"let c of circlers; let i = index\"\r\n        (circleClick)=\"clickedCircle(i)\" \r\n          [latitude]=\"c.lat\"\r\n          [longitude]=\"c.lng\"\r\n          [radius]=\"c.rad\"         \r\n          [fillColor]=\"c.barwa\"\r\n          [circleDraggable]=\"c.draggable\"\r\n          [editable]=\"c.editable\">\r\n\r\n          <sebm-google-map-info-window >\r\n         Hi, this is the content of the <strong>info window</strong>\r\n       </sebm-google-map-info-window>\r\n          \r\n      </sebm-google-map-circle>\r\n\r\n    </sebm-google-map>"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<md-tab-group class=\"skany-mapy\" headerPosition=\"below\">  \r\n  <md-tab label=\"Google Maps\">\r\n    <div class=\"tab-content\">\r\n     <app-angular2-google-maps></app-angular2-google-maps>\r\n    </div>\r\n  </md-tab>\r\n  <md-tab label=\"Bing Maps\">\r\n    <div class=\"tab-content\">\r\n      This tab is about the Earth!\r\n    </div>\r\n  </md-tab>\r\n</md-tab-group>\r\n\r\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  skany-filtrowanie works!\r\n</p>\r\n<p>\r\n  <app-mapy></app-mapy>\r\n</p>\r\n"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"problemy-z-dialogami\">\r\n  <app-stara-wersja></app-stara-wersja><br>\r\n  <hr /><br></div>-->\r\n \r\n  <md-card>\r\n    <md-card-title> <h2>POSTANOWIENIA LICENCYJNE</h2></md-card-title>\r\n    <md-card-content>\r\n      <p>Całokształ stanowi autorska mozolna kilkumiesieczna praca, metodą prob i błedw, dlatego też osoby chcące użyć kod do aplikacj bardzo proszę o wcześniejszy kontakt!! Niemniej licząc na rozwoj, udostępniam ją na uogolnionych postanowieniach licencyjnych zgodnych z licencją  <button md-raised-button color=\"primary\" (click)=\"LICENCJA()\">AGPL-3.0</button>  dodatkowo każda technologia i element środowiska zarwno z wymienionych poniżej jak i pominiętych rządzi sie swoimi postanowieniami licencyjnymi ktrych należy przestrzegać.</p><br>\r\n      <p><strong>\r\n        Osobne postanowieni tyczą się bazy danych <br><br> materiał tj. SKANY, jako takie nie stanowią rzadnego podzespołu niniejsz aplikacji, a jedynie owa aplikacja za pośrednictwem bazy linkow do tychże skanow daje mozliwość wygodnego wglądu do nichże, jak i analizowania dostępnego zasobu na stronach   <button md-raised-button color=\"primary\" (click)=\"AGAD()\">AGAD-u</button>\r\n        <br><br> BAZA LINKOW, stanowi jako tako wolną strukturę, każdy może ją w dowolny sposb utworzyć wchodząc na stronę materiału i kopiując link, niemniej tych linkw jest ponad 200 tysięcy i wiele czasu ponad miesiąc zejeło mi jej utworzenie. Zostały skorygowane błedy ze strony AGAD, niektre materiały bowiem posiadają link a nie posiadają skanow. \r\n        <br><br> SKANY jak jż wsponiałem nie stanowią części aplikacji, ani bazy, jednakże pragnę poinformować iż nie nalżey przedrukowywać, ani na dużą skalę kopiować zasobu pierwotnego AGAD-u, \r\n        <br><br> BAZA MIEJSCOWOSCI i DATACJI ZASOBU AGAD, dotego zastrzegam sobie prawo autorskie, gdyż faktycznie pobrałem wstępne nazwy z ewidencji haseł geograficznych. Aczkolwiek posłużyło mi to jako spis treści, są tam ogromne błedy rzedu 6% zasobu w nazewnictwie a w opisach ksiąg w obszarze wytępujących haseł wewnątrz księgi, jak i roczniki występpujące wewnątrz są traktowane zgrubnie zdarza sie że danego rocznika dla danego przysiłka w księdze brak, a nie ma takowej informacji, także bazę utworzyłem od nowa, część zasobu posiada przypis weryfikacji, są to te obiekty dla ktrych szczegłowo sprawdziłem lokalizacje jak i datację zasoby, pozostała część niebawem zostanie zweryfikowana.        </strong>\r\n        <br><br> KOREKTA GRAFICZNA, skrypt korekty rzadzi się swoim prawem licencyjnym\r\n         <br><br> INDEKSY, jest to porzyszła autorska funkcjonalność, będzie polegała w pierwszej kolejności na wyświetlaniu tabeliki zawartości danej strony skanu, w następnej kolejności złożoną aplikację umożliwiającą indeksację, w kolejnej  kolejności, zbudowanie wyszukiwarki że po wpisaniu nazwiska, zostaną wyświetlone wszystkie skany posiadające dane nazwisko i inne określone parametry , lecz w formie wycięty fragmentw, skanu, do ktrych będzie można pobrać link lub zapisać na dysk.. bezpośrednio ze strony agadu z obrubką graficzną w locie.\r\n      \r\n      </p><button md-raised-button color=\"accent\" (click)=\"KONTAKT()\">Jan Roman J.S. Cisowski Sas</button> \r\n      <button md-raised-button color=\"primary\" (click)=\"GIT_HUB()\">GitHub</button> <button md-raised-button color=\"primary\" (click)=\"GIT_MTS()\">TeamServices</button> \r\n      <button md-raised-button color=\"primary\" (click)=\"GIT_GFB()\">FireBase</button>\r\n    </md-card-content>\r\n  </md-card>\r\n  <hr />\r\n  <h2>TECHNOLOGIA WYKORZYSTANA W APLIKACJI</h2>  \r\n<div class=\"pustostan-plynny \">\r\n  <md-card class=\"karta czerwo400 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis01}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik01()\"><md-card-title>{{tytul01}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n<md-card class=\"karta fiolet400 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis02}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik02()\"><md-card-title>{{tytul02}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta fiolet400  mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis03}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik03()\"><md-card-title>{{tytul03}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta fiolet400  mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis04}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik04()\"><md-card-title>{{tytul04}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta fiolet400  mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis05}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik05()\"><md-card-title>{{tytul05}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta granat400 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis06}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik06()\"><md-card-title>{{tytul06}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n \r\n  <md-card class=\"karta rozowy300 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis07}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik07()\"><md-card-title>{{tytul07}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta bursztyn300 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis08}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik08()\"><md-card-title>{{tytul08}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta jesien700 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis09}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik09()\"><md-card-title>{{tytul09}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta jesien700 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis10}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik10()\"><md-card-title>{{tytul10}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n<md-card class=\"karta jesien700 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis11}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik11()\"><md-card-title>{{tytul11}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n<md-card class=\"karta morze700 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis12}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik12()\"><md-card-title>{{tytul12}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta morze700 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis13}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik13()\"><md-card-title>{{tytul13}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta morze700 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis14}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik14()\"><md-card-title>{{tytul14}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta null000 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis15}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik15()\"><md-card-title>{{tytul15}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta null000 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis16}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik16()\"><md-card-title>{{tytul16}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta null000 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis17}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik17()\"><md-card-title>{{tytul17}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta null000 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis18}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik18()\"><md-card-title>{{tytul18}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta null000 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis19}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik19()\"><md-card-title>{{tytul19}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n\r\n  <md-card class=\"karta null000 mat-card-flat\">    \r\n    <md-card-content>\r\n      <p>{{opis20}}</p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-raised-button (click)=\"klik20()\"><md-card-title>{{tytul20}}</md-card-title></button>\r\n    </md-card-actions>\r\n  </md-card>\r\n  \r\n\r\n   \r\n\r\n</div>  \r\n<hr />\r\n<md-card>\r\n <md-card-title> <h2>WSKAZOWKI DO ROZWOJU - SPOJNOSC PODZESPOLOW</h2></md-card-title>\r\n    <md-card-subtitle>Angular + Net.Core</md-card-subtitle>\r\n    <md-card-content>   \r\n      <ul>\r\n        <li>PS> choco install nuget.commandline -pre</li>\r\n        <li>PS> nuget install Microsoft.AspNetCore.Mvc.Core</li>\r\n        <li>PS> nuget install Microsoft.AspNetCore.SpaTemplates</li>\r\n        <li>PS> dotnet new --install Microsoft.AspNetCore.SpaTemplates::*</li>        \r\n        <li>instalacja NVS https://github.com/jasongin/nvs/releases</li>\r\n        <li>PS> nvs</li>\r\n        <li>PS> npm install -g @angular/cli</li>\r\n        <li>PS> ng new skany -lc -sd ClientApp --style scss --routing</li>\r\n        <li>PS> cd skany</li>\r\n        <li>PS> yarn</li>\r\n        <li>PS> ng s --open</li>\r\n        <li>PS> mkdir TMP</li>\r\n        <li>PS> cd TMP</li>\r\n        <li>PS> dotnet new web -n skany</li>\r\n        <li>PS> cd ..</li>\r\n        <li>PS> (niedziala) MOVE /-Y \"TMP/\" \"/\"</li>\r\n        <li>PS> dotnet add package Microsoft.AspNetCore.StaticFiles</li>\r\n        <li>po otwarciu VScode przywrocic i zatwierdzic pakiety</li>\r\n\r\n\r\n\r\n        <li></li>\r\n        <li></li>\r\n        \r\n        </ul>   \r\n      \r\n     \r\n    </md-card-content>\r\n  </md-card>\r\n  <hr />\r\n"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  skany-odfiltrowane works!\r\n</p>\r\n"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  skany-pozycja-przegladarka works!\r\n</p>\r\n"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  skany-pozycja-szczegoly works!\r\n</p>\r\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<!--<section >\r\n<button md-raised-button color=\"primary\" (click)=\"openDIALOG01()\" [disabled]=\"dialogRef\">\r\n  DIALOG 01\r\n</button>\r\n<button md-raised-button color=\"accent\" (click)=\"openDIALOG02a()\">\r\n  Open dialog with content elements\r\n</button>\r\n<button md-raised-button color=\"accent\" (click)=\"openDIALOG()\">\r\n  Open dialog with template content\r\n</button>\r\n\r\n<md-card class=\"demo-dialog-card\" >\r\n  <md-card-content>\r\n    <h2>Dialog dimensions</h2>\r\n    \r\n\r\n  </md-card-content>\r\n</md-card>\r\n\r\n\r\n</section>-->\r\n\r\n<section>\r\n  <md-card>\r\n    <md-card-title><strong>{{podtytul}}</strong></md-card-title>\r\n    <md-card-content>\r\n      \r\n      <md-list>\r\n       \r\n  <md-list-item>{{krok1}}</md-list-item>\r\n  \r\n  <md-list-item>{{krok2}}</md-list-item>\r\n  \r\n  <md-list-item>{{krok3}}</md-list-item>\r\n  \r\n</md-list>\r\n\r\n<form class=\"example-form\">\r\n  <p>\r\n    <md-input-container class=\"example-full-width\">\r\n      <textarea mdInput placeholder=\"LINK DO PIERWSZEJ STRONY\">http://agadd.home.net.pl/metrykalia/301/sygn.%20126/pages/PL_1_301_126_0000-metryczka.htm</textarea>\r\n    </md-input-container>\r\n    <md-input-container class=\"example-full-width\">\r\n      <textarea mdInput placeholder=\"LINK DO OSTATNIEJ STRONY\">http://agadd.home.net.pl/metrykalia/301/sygn.%20126/pages/PL_1_301_126_0161.htm</textarea>\r\n    </md-input-container>\r\n  </p>\r\n</form>\r\n\r\n    </md-card-content>\r\n  </md-card>\r\n\r\n  <b>KRÓTKI INSTRUKTAŻ</b>\r\n        <ol>\r\n            <li><b>Wejdź na stronę <a href=\"http://www.agad.gov.pl/inwentarze/testy.html\">http://www.agad.gov.pl/inwentarze/testy.html</a> i otwórz skany interesującej Cię pozycji np.:</b>\r\n                <i><table>\r\n                    <tr>\r\n                        <td>Sygn.:</td>\r\n                        <td>126</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Tytuł:</td>\r\n                        <td>Par. Buczacz, dek. Buczacz; Księga metrykalna chrztów dla całej parafii</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Daty:</td>\r\n                        <td>1752-1777</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Opis:</td>\r\n                        <td>księga oprawna, s. 320</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Dawna Sygn.:</td>\r\n                        <td>P-862, 36/2</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Skany:</td>\r\n                        <td><a href=\"http://agadd.home.net.pl/metrykalia/301/sygn.%20126/indeks.htm\">http://agadd.home.net.pl/metrykalia/301/sygn.%20126/indeks.htm</a></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Język:</td>\r\n                        <td>łac.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">wpisy bez rubryk; księga przekazana do AGAD z AP - Przemyśl w 1993 r. <br>Mikrofilm: 73922</td>\r\n                    </tr>\r\n                </table></i><br>\r\n            </li>\r\n            <li><b>Następnie otwórz pierwszy element (metryczke) i skopiuj adres jego linku <br>np.\r\n                </b><a href=\"http://agadd.home.net.pl/metrykalia/301/sygn.%20126/pages/PL_1_301_126_0000-metryczka.htm\">http://agadd.home.net.pl/metrykalia/301/sygn.%20126/pages/PL_1_301_126_0000-metryczka.htm</a><b>, i wklej go poniżej</b><br><br>\r\n                <form name=\"f1\">\r\n                    <input name=\"adresHTML_metryczki\" id=\"adresHTML_metryczki\" type=\"text\" size=\"125\" /> <br />\r\n                </form> <br></li>\r\n            <li><b>Następnie udaj się na sam koniec i otwórz ostatni skan poprzedzający tablicę końcową, i skopiuj adres jego linku <br>np.\r\n                </b><a href=\"http://agadd.home.net.pl/metrykalia/301/sygn.%20126/pages/PL_1_301_126_0161.htm\">http://agadd.home.net.pl/metrykalia/301/sygn.%20126/pages/PL_1_301_126_0161.htm</a><b>, i wklej poniżej</b><br><br>\r\n                <form name=\"f2\">\r\n                    <input name=\"adresHTML_ostatniego\" id=\"adresHTML_ostatniego\" type=\"text\" size=\"125\" /> <br />\r\n                </form> <br>\r\n                <button type=\"button\" id=\"load_us\">Zaladuj</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"view1\">Widok miniatur</button> <button type=\"button\" id=\"view2\">Widok pełny</button>\r\n            </li>\r\n            <!--<li><b>Jeśli zostały poprawnie wprowadzone powyższe adresy ten tekst zniknie i zostaną wyświetlone Wszystkie Skany, następnie zapisz stronę aby zapisać wszystkie elementy Dziękuję za uwagę,  😊 </b><br></li>-->\r\n        </ol>\r\n</section>\r\n<section>\r\n  <hr>\r\n    <div id=\"results_info\"></div>\r\n    <div id=\"results\" class=\"thumbs\"></div>\r\n    <hr>\r\n</section>\r\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);


/***/ })

},[466]);
//# sourceMappingURL=main.bundle.js.map