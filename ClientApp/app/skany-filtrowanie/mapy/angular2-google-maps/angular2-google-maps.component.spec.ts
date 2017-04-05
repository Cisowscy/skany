import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2GoogleMapsComponent } from './angular2-google-maps.component';

describe('Angular2GoogleMapsComponent', () => {
  let component: Angular2GoogleMapsComponent;
  let fixture: ComponentFixture<Angular2GoogleMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2GoogleMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2GoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
