import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private http: HttpClient) {}

  request(urlRequest: string, httpParams?: HttpParams): Observable<Object> {
    const params = {};
    if (httpParams) {
      httpParams.keys().forEach((element) => {
        params[element] = httpParams.get(element);
      });
    }
    return this.http
      .get(urlRequest, httpParams ? { params } : undefined)
      .pipe(catchError(this.handleError));
  }

  post(urlRequest: string, httpParams?: HttpParams): Observable<Object> {
    const headers = new HttpHeaders();
    headers.append("accept", "application/json");

    const params = {};
    if (httpParams) {
      httpParams.keys().forEach((element) => {
        params[element] = httpParams.get(element);
      });
    }

    return this.http
      .post(urlRequest, httpParams ? params : undefined, { headers })
      .pipe(catchError(this.handleError));
  }

  public delete(path: string, body: object = {}): Observable<any> {
    return this.http
      .delete(path + "/" + body)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = {};
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = { error: error.error.message };
    } else {
      // server-side error
      errorMessage = { errorCode: error.status, message: error.message };
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
