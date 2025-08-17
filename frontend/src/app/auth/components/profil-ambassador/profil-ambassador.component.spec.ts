import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAmbassadorComponent } from './profil-ambassador.component';

describe('ProfilAmbassadorComponent', () => {
  let component: ProfilAmbassadorComponent;
  let fixture: ComponentFixture<ProfilAmbassadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilAmbassadorComponent]
    });
    fixture = TestBed.createComponent(ProfilAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
