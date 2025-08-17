import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAmbassadorComponent } from './become-ambassador.component';

describe('BecomeAmbassadorComponent', () => {
  let component: BecomeAmbassadorComponent;
  let fixture: ComponentFixture<BecomeAmbassadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAmbassadorComponent]
    });
    fixture = TestBed.createComponent(BecomeAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
