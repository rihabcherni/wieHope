import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionResponsableComponent } from './gestion-responsable.component';

describe('GestionResponsableComponent', () => {
  let component: GestionResponsableComponent;
  let fixture: ComponentFixture<GestionResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionResponsableComponent]
    });
    fixture = TestBed.createComponent(GestionResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
