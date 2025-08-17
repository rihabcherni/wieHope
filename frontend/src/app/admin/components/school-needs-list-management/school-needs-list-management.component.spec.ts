import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNeedsListManagementComponent } from './school-needs-list-management.component';

describe('SchoolNeedsListManagementComponent', () => {
  let component: SchoolNeedsListManagementComponent;
  let fixture: ComponentFixture<SchoolNeedsListManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolNeedsListManagementComponent]
    });
    fixture = TestBed.createComponent(SchoolNeedsListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
