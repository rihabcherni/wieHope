import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableEcoleComponent } from './responsable-ecole.component';

describe('ResponsableEcoleComponent', () => {
  let component: ResponsableEcoleComponent;
  let fixture: ComponentFixture<ResponsableEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableEcoleComponent]
    });
    fixture = TestBed.createComponent(ResponsableEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
