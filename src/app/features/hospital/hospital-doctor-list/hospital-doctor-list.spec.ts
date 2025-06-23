import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDoctorList } from './hospital-doctor-list';

describe('HospitalDoctorList', () => {
  let component: HospitalDoctorList;
  let fixture: ComponentFixture<HospitalDoctorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalDoctorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalDoctorList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
