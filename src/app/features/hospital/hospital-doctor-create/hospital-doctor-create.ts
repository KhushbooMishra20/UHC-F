import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital-doctor-create',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './hospital-doctor-create.html',
  styleUrl: './hospital-doctor-create.scss'
})
export class HospitalDoctorCreate {
doctorForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.doctorForm = this.fb.group({
      doctorName: ['', Validators.required],
      specialization: ['', Validators.required],
      hospitalId: ['', Validators.required] // Pass logged-in Hospital ID here
    });
  }

  createDoctor() {
    if (this.doctorForm.valid) {
      this.http.post('http://localhost:8087/hospital/hospitals/doctors/create-doctor', this.doctorForm.value)
        .subscribe({
          next: res => alert('Doctor Created!'),
          error: err => alert('Error!')
        });
    }
  }
}