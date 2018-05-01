import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeComponent } from './diplome.component';

describe('DiplomeComponent', () => {
  let component: DiplomeComponent;
  let fixture: ComponentFixture<DiplomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
