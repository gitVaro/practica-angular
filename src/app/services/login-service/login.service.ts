import { Injectable } from "@angular/core";
import { RequestService } from "../request-service/request.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private requestService: RequestService, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const httpParams = new HttpParams()
      .set("username", username)
      .set("password", password);

    const urlRequest = `${environment.host}:${environment.port}/users`;

    return this.requestService.request(urlRequest, httpParams);
  }

  logOut() {
    sessionStorage.removeItem(environment.logginSessionToken);
    sessionStorage.removeItem(environment.userNameSessionToken);
    this.router.navigate(["login"]);
  }

  setLogged(loggedStatus: boolean, profile: string) {
    sessionStorage.setItem(
      environment.logginSessionToken,
      loggedStatus ? "true" : "false"
    );
    sessionStorage.setItem(environment.profileIdSessionToken, profile);
  }
  isLogged(): boolean {
    return sessionStorage.getItem(environment.logginSessionToken)
      ? true
      : false;
  }

  isAdmin(): boolean {
    if (+sessionStorage.getItem(environment.profileIdSessionToken) == 2)
      return true;

    return false;
  }

  checkUserName(username: string): Observable<any> {
    const httpParams = new HttpParams().set("username", username);

    const urlRequest = `${environment.host}:${environment.port}/users`;

    return this.requestService.request(urlRequest, httpParams);
  }

  setUsername(username: string) {
    sessionStorage.setItem(environment.userNameSessionToken, username);
  }

  getUsername(): string {
    return sessionStorage.getItem(environment.userNameSessionToken);
  }
}
