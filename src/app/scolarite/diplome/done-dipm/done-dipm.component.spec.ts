import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneDipmComponent } from './done-dipm.component';

describe('DoneDipmComponent', () => {
  let component: DoneDipmComponent;
  let fixture: ComponentFixture<DoneDipmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneDipmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneDipmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
