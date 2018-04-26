import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnseignantComponent } from './menu-enseignant.component';

describe('MenuEnseignantComponent', () => {
  let component: MenuEnseignantComponent;
  let fixture: ComponentFixture<MenuEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
