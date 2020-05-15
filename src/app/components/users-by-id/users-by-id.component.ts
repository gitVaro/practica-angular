import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { RequestService } from "src/app/services/request-service/request.service";
import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-users-by-id",
  templateUrl: "./users-by-id.component.html",
  styleUrls: ["./users-by-id.component.scss"],
})
export class UsersByIdComponent implements OnInit {
  form: FormGroup;
  user;
  faSearch = faSearch;
  urlRequest = `${environment.host}:${environment.port}/users`;
  users;
  max: number;

  constructor(
    private requestService: RequestService,
    private dialog: MatSnackBar
  ) {
    this.form = new FormGroup({
      id: new FormControl(0, Validators.required),
    });
  }

  getById() {
    const id = this.form.value.id;
    if (id !== 0) {
      const httpParams = new HttpParams().set("id", id);
      this.requestService
        .request(this.urlRequest, httpParams)
        .subscribe((data) => {
          this.user = data;
        });
    } else this.openDialog("Debes seleccionar un ID de usuario", 3000);
  }

  getAllUsers() {
    this.requestService.request(this.urlRequest).subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.getAllUsers();
    // console.log(this.users);
  }

  openDialog(message, duration) {
    this.dialog.open(message);
    setTimeout(() => this.dialog.dismiss(), duration);
  }
}
