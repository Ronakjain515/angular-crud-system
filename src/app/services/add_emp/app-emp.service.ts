import { Injectable } from '@angular/core';
import { AddEmpoyeeURL } from 'src/app/utils/api-urls';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/app/models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppEmpService {
  private _url: string = AddEmpoyeeURL;

  constructor(private http: HttpClient) { }

  addEmployees(data: any): Observable<any> {
    return this.http.post<any>(this._url, data);
  }
}
