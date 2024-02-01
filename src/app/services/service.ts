import {HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

export class Service {
  static handleError(err: HttpErrorResponse): Observable<never> {
    if (err.error instanceof ErrorEvent) {
      console.error('An ERROR occured: ', err.error.message);
    } else {
      console.error(
        `Server ERROR occured: ${err.status}, body: ${err.error}`
      );
    }

    return throwError(() => err);
  }
}
