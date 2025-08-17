import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopGestionComponent } from './pop-gestion.component';

describe('PopGestionComponent', () => {
  let component: PopGestionComponent;
  let fixture: ComponentFixture<PopGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopGestionComponent]
    });
    fixture = TestBed.createComponent(PopGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
