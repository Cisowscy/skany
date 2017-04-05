import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkanyInfoComponent } from './skany-info.component';

describe('SkanyInfoComponent', () => {
  let component: SkanyInfoComponent;
  let fixture: ComponentFixture<SkanyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkanyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
