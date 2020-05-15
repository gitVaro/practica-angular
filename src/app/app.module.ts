import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { AllUsersComponent } from "./components/all-users/all-users.component";
import { UsersByIdComponent } from "./components/users-by-id/users-by-id.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { ReactFormComponent } from './components/react-form/react-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopBarComponent,
    AllUsersComponent,
    UsersByIdComponent,
    AddUserComponent,
    ReactFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
