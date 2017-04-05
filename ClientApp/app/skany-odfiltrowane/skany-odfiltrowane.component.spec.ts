import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkanyOdfiltrowaneComponent } from './skany-odfiltrowane.component';

describe('SkanyOdfiltrowaneComponent', () => {
  let component: SkanyOdfiltrowaneComponent;
  let fixture: ComponentFixture<SkanyOdfiltrowaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkanyOdfiltrowaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkanyOdfiltrowaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
