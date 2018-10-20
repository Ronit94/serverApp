import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
//import {NotAuthGuard,AuthGuard} from './services/auth.service'
import {AuthGuard,NotAuthGuard} from './auth/auth.guard'
const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch:'full'},
  { path: 'login',loadChildren: '../app/pages/login/login.module#LoginModule',canActivate:[NotAuthGuard]},
 { path: 'signup',loadChildren: '../app/pages/signup/signup.module#SignUpModule',canActivate:[NotAuthGuard]},
  { path: 'forgot-password',loadChildren: '../app/pages/forgot-password/forgot-password.module#ForgotPasswordModule',canActivate:[NotAuthGuard]},
  { path: 'dashboard',loadChildren: '../app/pages/dashboard/dashboard.module#DashboardModule',canActivate:[AuthGuard]},
 // { path: 'pageNotFound', loadChildren: 'app/pages/404/404.module#testModule'}, 
  { path: '**', redirectTo:'pageNotFound'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
