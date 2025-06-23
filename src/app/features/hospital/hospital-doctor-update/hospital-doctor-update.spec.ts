import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDoctorUpdate } from './hospital-doctor-update';

describe('HospitalDoctorUpdate', () => {
  let component: HospitalDoctorUpdate;
  let fixture: ComponentFixture<HospitalDoctorUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalDoctorUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalDoctorUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
