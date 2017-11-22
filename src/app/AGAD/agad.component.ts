import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agad',
  templateUrl: './agad.component.html',
  styleUrls: ['./agad.component.scss']
})
export class AgadComponent /** implements OnInit  */ {
  tabLinks = [
    {label: 'Wstep', link: 'info'},
    {label: 'Lokalizacje', link: 'lokalizacje'},
    {label: 'Wykaz Ksiag', link: 'wykaz-ksiag'}
  ];
  constructor() { }


}
