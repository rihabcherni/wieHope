import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeBenefitComponent } from './become-benefit.component';

describe('BecomeBenefitComponent', () => {
  let component: BecomeBenefitComponent;
  let fixture: ComponentFixture<BecomeBenefitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeBenefitComponent]
    });
    fixture = TestBed.createComponent(BecomeBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
