import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurActiviteComponent } from './our-activite.component';

describe('OurActiviteComponent', () => {
  let component: OurActiviteComponent;
  let fixture: ComponentFixture<OurActiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurActiviteComponent]
    });
    fixture = TestBed.createComponent(OurActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
