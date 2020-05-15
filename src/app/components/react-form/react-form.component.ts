import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-react-form",
  templateUrl: "./react-form.component.html",
  styleUrls: ["./react-form.component.scss"],
})
export class ReactFormComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        // , this.validateEmail
      ]),
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        // this.validatePassword,
      ]),
    });
  }

  onSubmit() {
    console.log(this.form.value.name);
    console.log(this.form.value.lastname);
  }

  validatePassword(control: AbstractControl) {
    const password = control.value.password;

    // al menos un número, una minúscula y una mayúscula
    // al menos 6 carácteres
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(password);
  }

  validateEmail(control: AbstractControl) {
    const email = control.value.password;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
