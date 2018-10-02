import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  { path: '', component:SignupComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);