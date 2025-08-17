import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAmbassadorComponent } from './be-ambassador.component';

describe('BeAmbassadorComponent', () => {
  let component: BeAmbassadorComponent;
  let fixture: ComponentFixture<BeAmbassadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeAmbassadorComponent]
    });
    fixture = TestBed.createComponent(BeAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
