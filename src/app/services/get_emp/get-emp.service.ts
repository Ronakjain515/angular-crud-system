import { Injectable } from '@angular/core';
import { getEmpoyeeURL } from 'src/app/utils/api-urls';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/app/models/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetEmpService {

  private _url: string = getEmpoyeeURL;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
