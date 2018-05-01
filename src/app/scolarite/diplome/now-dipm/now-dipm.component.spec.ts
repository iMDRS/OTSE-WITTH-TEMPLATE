import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowDipmComponent } from './now-dipm.component';

describe('NowDipmComponent', () => {
  let component: NowDipmComponent;
  let fixture: ComponentFixture<NowDipmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowDipmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowDipmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
