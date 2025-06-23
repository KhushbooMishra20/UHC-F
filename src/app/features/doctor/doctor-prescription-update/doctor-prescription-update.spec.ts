import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescriptionUpdate } from './doctor-prescription-update';

describe('DoctorPrescriptionUpdate', () => {
  let component: DoctorPrescriptionUpdate;
  let fixture: ComponentFixture<DoctorPrescriptionUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPrescriptionUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPrescriptionUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
