import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescriptionList } from './doctor-prescription-list';

describe('DoctorPrescriptionList', () => {
  let component: DoctorPrescriptionList;
  let fixture: ComponentFixture<DoctorPrescriptionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPrescriptionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPrescriptionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
