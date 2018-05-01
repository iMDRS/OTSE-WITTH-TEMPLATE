import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDipmComponent } from './new-dipm.component';

describe('NewDipmComponent', () => {
  let component: NewDipmComponent;
  let fixture: ComponentFixture<NewDipmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDipmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDipmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
