import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    //component: LoginComponent
    loadChildren:'../app/login/login.module#LoginModule'
  },
  {
    path: "posts",
    loadChildren: "../app/posts/posts.module#PostsModule"
  },
  {
    path: "king",
    loadChildren: "../app/king/king.module#KingModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
