import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescriptionDelete } from './doctor-prescription-delete';

describe('DoctorPrescriptionDelete', () => {
  let component: DoctorPrescriptionDelete;
  let fixture: ComponentFixture<DoctorPrescriptionDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPrescriptionDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPrescriptionDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
