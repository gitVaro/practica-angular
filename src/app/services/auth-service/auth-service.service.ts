import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login-service/login.service";

@Injectable({
  providedIn: "root",
})
export class AuthService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.loginService.isLogged()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
