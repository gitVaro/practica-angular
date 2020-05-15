import { Component, OnInit } from "@angular/core";
import { RequestService } from "../../services/request-service/request.service";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";
import { HttpParams } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from "src/app/services/login-service/login.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private requestService: RequestService,
    private loginService: LoginService,
    private dialog: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      profile: new FormControl(0, Validators.required),
    });
  }

  faPlus = faPlus;
  urlRequest = `${environment.host}:${environment.port}/users`;
  total;
  nextId;

  addUser() {
    const username = this.loginForm.get("username").value;
    const password = this.loginForm.get("password").value;
    const profile = this.loginForm.get("profile").value;

    if (username !== "" && password !== "" && profile !== 0) {
      this.loginService.checkUserName(username).subscribe((data) => {
        if (data.length > 0) {
          this.openDialog("El usuario ya existe", 3000);
        } else {
          this.requestService.request(this.urlRequest).subscribe((response) => {
            this.total = response;

            let last: any = this.total[this.total.length - 1];

            const httpParams = new HttpParams()
              .set("id", last.id + 1)
              .set("username", username)
              .set("password", password)
              .set("profile_id", profile);

            this.requestService
              .post(this.urlRequest, httpParams)
              .subscribe((data) => {
                if (data !== undefined)
                  this.openDialog("Usuario registrado", 2000);
                else
                  this.openDialog(
                    "Ha habido un problema con el registro",
                    2000
                  );
              });
          });
        }
      });
    } else this.openDialog("Debes rellenar todos los campos", 3000);
  }

  openDialog(message, duration) {
    this.dialog.open(message);
    setTimeout(() => this.dialog.dismiss(), duration);
  }

  ngOnInit() {}
}
