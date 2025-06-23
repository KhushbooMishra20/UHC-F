import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDoctorDelete } from './hospital-doctor-delete';

describe('HospitalDoctorDelete', () => {
  let component: HospitalDoctorDelete;
  let fixture: ComponentFixture<HospitalDoctorDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalDoctorDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalDoctorDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
