import { Injectable } from "@angular/core";
import { RequestService } from "../request-service/request.service";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  constructor(private requestService: RequestService) {}

  getProfileData(profile_id: string): Observable<any> {
    const httpParams = new HttpParams().set("id", profile_id);

    const urlRequest = `${environment.host}:${environment.port}/profiles`;

    return this.requestService.request(urlRequest, httpParams);
  }
}
