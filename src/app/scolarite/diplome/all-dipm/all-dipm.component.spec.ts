import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDipmComponent } from './all-dipm.component';

describe('AllDipmComponent', () => {
  let component: AllDipmComponent;
  let fixture: ComponentFixture<AllDipmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDipmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDipmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
