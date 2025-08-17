import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionListeBesoinsEcoleComponent } from './gestion-liste-besoins-ecole.component';

describe('GestionListeBesoinsEcoleComponent', () => {
  let component: GestionListeBesoinsEcoleComponent;
  let fixture: ComponentFixture<GestionListeBesoinsEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionListeBesoinsEcoleComponent]
    });
    fixture = TestBed.createComponent(GestionListeBesoinsEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
