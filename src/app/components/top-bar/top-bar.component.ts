import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login-service/login.service";
import { Router } from "@angular/router";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
  constructor(private loginService: LoginService, protected router: Router) {}

  faSignOutAlt = faSignOutAlt;
  faHome = faHome;
  faUser = faUser;
  isActive: boolean = true;
  ngOnInit() {
    this.getUsername();
  }

  logOut() {
    this.loginService.logOut();
  }

  isAdmin() {
    return this.loginService.isAdmin();
  }

  getUsername() {
    return this.loginService.getUsername();
  }
}
