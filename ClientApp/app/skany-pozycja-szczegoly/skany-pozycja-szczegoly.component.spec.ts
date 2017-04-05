import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkanyPozycjaSzczegolyComponent } from './skany-pozycja-szczegoly.component';

describe('SkanyPozycjaSzczegolyComponent', () => {
  let component: SkanyPozycjaSzczegolyComponent;
  let fixture: ComponentFixture<SkanyPozycjaSzczegolyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkanyPozycjaSzczegolyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkanyPozycjaSzczegolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
