import { Component, OnInit, NgModule } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login-service/login.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  mensajeConst = {
    NO: "Credenciales incorrectas",
    // OK: "Login correcto",
    // REGISTRADO: "Usuario registrado correctamente",
    // REGISTRADO_NO: "El usuario ya existe",
    // ERROR: "Hubo un error en la petición",
  };

  mensaje = "";

  mensajeSuccess = true;

  duration = 3000; //Duración en miliosegundos de la notificación de error por falta de credenciales

  constructor(
    private loginService: LoginService,
    private router: Router,
    private dialog: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.mensaje = "";
    const username = this.loginForm.get("username").value;
    const password = this.loginForm.get("password").value;
    this.loginService.login(username, password).subscribe(
      (data) => {
        if (data.length > 0) {
          // this.mensaje = this.mensajeConst.OK;
          this.mensajeSuccess = true;
          this.loginService.setLogged(true, data[0].profile_id);
          this.loginService.setUsername(data[0].username);
          this.router.navigate(["/home"]);
        } else {
          // this.mensaje = this.mensajeConst.NO;
          this.openDialog(this.mensajeConst.NO, this.duration);
          this.mensajeSuccess = false;
          this.loginService.logOut();
        }
      },
      (error) => {
        // this.mensaje = this.mensajeConst.ERROR;
        this.mensajeSuccess = false;
        this.loginService.logOut();
      }
    );
  }

  openDialog(message, duration) {
    this.dialog.open(message);
    setTimeout(() => this.dialog.dismiss(), duration);
  }
}
