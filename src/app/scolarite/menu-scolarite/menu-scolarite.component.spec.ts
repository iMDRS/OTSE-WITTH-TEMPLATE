import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuScolariteComponent } from './menu-scolarite.component';

describe('MenuScolariteComponent', () => {
  let component: MenuScolariteComponent;
  let fixture: ComponentFixture<MenuScolariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuScolariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
