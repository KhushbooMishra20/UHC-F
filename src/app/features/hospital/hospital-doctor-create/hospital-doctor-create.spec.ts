import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDoctorCreate } from './hospital-doctor-create';

describe('HospitalDoctorCreate', () => {
  let component: HospitalDoctorCreate;
  let fixture: ComponentFixture<HospitalDoctorCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalDoctorCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalDoctorCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
