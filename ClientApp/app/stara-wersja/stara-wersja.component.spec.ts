import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaraWersjaComponent } from './stara-wersja.component';

describe('StaraWersjaComponent', () => {
  let component: StaraWersjaComponent;
  let fixture: ComponentFixture<StaraWersjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaraWersjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaraWersjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
