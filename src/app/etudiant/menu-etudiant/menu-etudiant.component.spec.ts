import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEtudiantComponent } from './menu-etudiant.component';

describe('MenuEtudiantComponent', () => {
  let component: MenuEtudiantComponent;
  let fixture: ComponentFixture<MenuEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
