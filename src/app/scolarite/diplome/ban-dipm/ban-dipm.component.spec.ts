import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanDipmComponent } from './ban-dipm.component';

describe('BanDipmComponent', () => {
  let component: BanDipmComponent;
  let fixture: ComponentFixture<BanDipmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanDipmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanDipmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
