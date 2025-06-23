import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescriptionCreate } from './doctor-prescription-create';

describe('DoctorPrescriptionCreate', () => {
  let component: DoctorPrescriptionCreate;
  let fixture: ComponentFixture<DoctorPrescriptionCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPrescriptionCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPrescriptionCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
