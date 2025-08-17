import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDonateurComponent } from './gestion-donateur.component';

describe('GestionDonateurComponent', () => {
  let component: GestionDonateurComponent;
  let fixture: ComponentFixture<GestionDonateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDonateurComponent]
    });
    fixture = TestBed.createComponent(GestionDonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
