import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDonorComponent } from './profil-donor.component';

describe('ProfilDonorComponent', () => {
  let component: ProfilDonorComponent;
  let fixture: ComponentFixture<ProfilDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilDonorComponent]
    });
    fixture = TestBed.createComponent(ProfilDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
