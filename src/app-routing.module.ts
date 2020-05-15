import { NgModule } from "@angular/core";
import { AuthService } from "./app/services/auth-service/auth-service.service";
import { LoginComponent } from "./app/components/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/components/home/home.component";
import { AllUsersComponent } from "./app/components/all-users/all-users.component";
import { UsersByIdComponent } from "./app/components/users-by-id/users-by-id.component";
import { AddUserComponent } from "./app/components/add-user/add-user.component";
import { ReactFormComponent } from "./app/components/react-form/react-form.component";

const rutas: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthService] },
  { path: "form", component: ReactFormComponent, canActivate: [AuthService] },
  {
    path: "all-users",
    component: AllUsersComponent,
    canActivate: [AuthService],
  },
  {
    path: "user-by-id",
    component: UsersByIdComponent,
    canActivate: [AuthService],
  },
  { path: "add-user", component: AddUserComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
