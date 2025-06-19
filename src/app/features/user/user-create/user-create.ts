import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './user-create.html',
  // styleUrl: './user-create.scss'
})
export class UserCreate {
   userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      fullName: [''],
      username: [''],
      password: [''],
      phoneNumber: [''],
      role: ['']
    });
  }

  createUser() {
    this.http.post('http://localhost:8086/user/register', this.userForm.value)
      .subscribe({
        next: (res) => {
          alert('User Created Successfully!');
        },
        error: (err) => {
          alert('Error Creating User!');
        }
      });
  }
}