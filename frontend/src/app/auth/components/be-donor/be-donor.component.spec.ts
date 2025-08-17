import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeDonorComponent } from './be-donor.component';

describe('BeDonorComponent', () => {
  let component: BeDonorComponent;
  let fixture: ComponentFixture<BeDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeDonorComponent]
    });
    fixture = TestBed.createComponent(BeDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
