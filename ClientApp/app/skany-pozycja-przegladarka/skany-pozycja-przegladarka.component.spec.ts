import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkanyPozycjaPrzegladarkaComponent } from './skany-pozycja-przegladarka.component';

describe('SkanyPozycjaPrzegladarkaComponent', () => {
  let component: SkanyPozycjaPrzegladarkaComponent;
  let fixture: ComponentFixture<SkanyPozycjaPrzegladarkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkanyPozycjaPrzegladarkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkanyPozycjaPrzegladarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
