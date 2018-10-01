import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
//import {NotAuthGuard,AuthGuard} from './services/auth.service'
import {AuthGuard} from './auth/auth.guard'
const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch:'full'},
  { path: 'login',loadChildren: '../app/pages/login/login.module#LoginModule'},
 // { path: 'signup',loadChildren: 'app/pages/signup/signup.module#signupModule'},
  //{ path: 'forgotpassword',loadChildren: 'app/pages/forgotpassword/forgotpassword.module#forgotpassModule'},
  { path: 'king',loadChildren: '../app/pages/king/king.module#KingModule',canActivate:[AuthGuard]},
 // { path: 'pageNotFound', loadChildren: 'app/pages/404/404.module#testModule'}, 
  { path: '**', redirectTo:'pageNotFound'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
