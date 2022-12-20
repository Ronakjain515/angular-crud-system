import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeleteEmpoyeeURL } from "src/app/utils/api-urls";

@Injectable({
  providedIn: 'root'
})
export class DeleteEmpService {

  private _url: string = DeleteEmpoyeeURL;

  constructor(private http: HttpClient) { }

  deleteEmployees(id: number): Observable<any> {
    return this.http.delete<any>(this._url + `/${id}/`);
  }
}
