import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { UserCreate } from './features/user/user-create/user-create';
import { Dashboard } from './features/dashboard/dashboard';
import { HospitalDashboard } from './features/hospital/hospital-dashboard/hospital-dashboard';
import { DoctorDashboard } from './features/doctor/doctor-dashboard/doctor-dashboard';
import { LabDashboard } from './features/lab/lab-dashboard/lab-dashboard';
import { PatientDashboard } from './features/patient/patient-dashboard/patient-dashboard';
import { HospitalDoctorCreate } from './features/hospital/hospital-doctor-create/hospital-doctor-create';
import { DoctorPrescriptionCreate } from './features/doctor/doctor-prescription-create/doctor-prescription-create';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'login', component: LoginComponent },
  { path: 'user/create', component: UserCreate },
  { path: 'hospital/create-doctor', component: HospitalDoctorCreate },
  { path: 'doctor/create-prescription', component: DoctorPrescriptionCreate },

  // Role-based dashboards:
  { path: 'dashboard/hospital', component: HospitalDashboard },
  { path: 'dashboard/doctor', component: DoctorDashboard },
  { path: 'dashboard/lab', component: LabDashboard },
  { path: 'dashboard/patient', component: PatientDashboard }
];
