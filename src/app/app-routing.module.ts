import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {path: "login",loadChildren:'../app/pages/login/login.module#LoginModule'},
  {path: "king",loadChildren: "../app/pages/king/king.module#KingModule"},
  { path: '',redirectTo: 'login',pathMatch:'full'},
  { path: '**', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
