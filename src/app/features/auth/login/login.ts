import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
  this.auth.login(this.loginForm.value).subscribe({
    next: (res: any) => {
      this.auth.saveToken(res.token);

      const role = res.role;  // your backend must return role in login response
      switch (role) {
        case 'HOSPITAL': this.router.navigate(['/dashboard/hospital']); break;
        case 'DOCTOR': this.router.navigate(['/dashboard/doctor']); break;
        case 'LAB': this.router.navigate(['/dashboard/lab']); break;
        case 'PATIENT': this.router.navigate(['/dashboard/patient']); break;
        default: this.router.navigate(['/']); break;
      }
    },
    error: () => { alert('Login Failed'); }
  });
}
  
}
