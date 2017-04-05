import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkanyFiltrowanieComponent } from './skany-filtrowanie.component';

describe('SkanyFiltrowanieComponent', () => {
  let component: SkanyFiltrowanieComponent;
  let fixture: ComponentFixture<SkanyFiltrowanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkanyFiltrowanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkanyFiltrowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
