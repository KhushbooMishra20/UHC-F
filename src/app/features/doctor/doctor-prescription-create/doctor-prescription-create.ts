import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-prescription-create',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './doctor-prescription-create.html',
  styleUrl: './doctor-prescription-create.scss'
})
export class DoctorPrescriptionCreate {
 prescriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.prescriptionForm = this.fb.group({
      patientId: ['', Validators.required],
      doctorId: ['', Validators.required],
      medicines: ['', Validators.required],
      labTests: [''],
      labType: ['', Validators.required] // 'INTERNAL' or 'EXTERNAL'
    });
  }

  createPrescription() {
    const formValue = this.prescriptionForm.value;
    
    if (formValue.labType === 'INTERNAL') {
      // Send to internal lab
      this.http.post('http://localhost:8088/lab/add-lab-test', formValue)
        .subscribe(res => alert('Sent to Internal Lab'));
    } else {
      // Send to external lab (Patient Service)
      this.http.post('http://localhost:8089/patient/add-external-prescription', formValue)
        .subscribe(res => alert('Sent to External Lab'));
    }
  }
}
