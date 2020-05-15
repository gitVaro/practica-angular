import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/services/request-service/request.service";
import { environment } from "src/environments/environment";
import { LoginService } from "../../services/login-service/login.service";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { HttpParams } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private loginService: LoginService,
    private dialog: MatSnackBar
  ) {}

  faUserTimes = faUserTimes;
  users;
  urlRequest = `${environment.host}:${environment.port}/users`;
  deleted;

  ngOnInit() {
    this.fillTable();
  }

  fillTable() {
    this.users = null;
    this.requestService.request(this.urlRequest).subscribe((data) => {
      this.users = data;
    });
  }

  isAdmin() {
    return this.loginService.isAdmin();
  }

  deleteUser(idUser: string) {
    const httpParams = new HttpParams().set("id", idUser);
    this.requestService
      .request(this.urlRequest, httpParams)
      .subscribe((data) => {
        if (data !== undefined)
          this.requestService
            .delete(this.urlRequest, data[0].id)
            .subscribe((response) => {
              this.openDialog("Usuario eliminado", 2000);
              this.fillTable();
            });
      });
  }

  openDialog(message, duration) {
    this.dialog.open(message);
    setTimeout(() => this.dialog.dismiss(), duration);
  }
}
