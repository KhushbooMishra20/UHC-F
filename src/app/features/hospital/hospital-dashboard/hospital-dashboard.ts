import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-dashboard',
  imports: [CommonModule],
  templateUrl: './hospital-dashboard.html',
  // styleUrl: './hospital-dashboard.scss'
})
export class HospitalDashboard {
 constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
