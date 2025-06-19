import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { UserCreate } from './features/user/user-create/user-create';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'login', component: LoginComponent },
  { path: 'user/create', component: UserCreate },
];
