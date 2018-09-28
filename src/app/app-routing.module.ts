import { NgModule } from "@angular/core";
import { RouterModule, Routes,CanActivate } from "@angular/router";
import { AuthService as AuthGuard } from './services/auth.service';
const routes: Routes = [
  {path: "login",loadChildren:'../app/pages/login/login.module#LoginModule' },
  {path: "king",loadChildren: "../app/pages/king/king.module#KingModule",canActivate: [AuthGuard]},
  { path: '',redirectTo: 'login',pathMatch:'full'},
  { path: '**', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
