import { Component } from '@angular/core';
import { IEmployee } from 'src/app/models/employee';
import { GetEmpService } from 'src/app/services/get_emp/get-emp.service';
import { DeleteEmpService } from 'src/app/services/delete_emp/delete-emp.service';
import { ToastersService } from 'src/app/services/notifications/toasters.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public employees: IEmployee[] = []

  constructor(
    private _getGmployeeService: GetEmpService,
    private _deleteEmployeeService: DeleteEmpService,
    private _toasterService: ToastersService,
    private router: Router
    ) {}

  ngOnInit() {
    this._getGmployeeService.getEmployees().subscribe(data => this.employees = data);
  }

  onDelete(emp: any) {
    this._deleteEmployeeService.deleteEmployees(emp.id).subscribe(
      data => this.showResponsePopup(data, false),
      error => this.showResponsePopup(error, true)
      );
  }

  showResponsePopup(response: any, isError: boolean){

    if(isError){
      console.log(response.error);
      const title: string = Object.keys(response.error)[0];
      const msg: string = Object.values(response.error)[0] as string;
      this._toasterService.showError(msg, title);
    }
    else{
      this._toasterService.showSuccess("successfully delete", "Employee");
      this._getGmployeeService.getEmployees().subscribe(data => this.employees = data);
    }
  }
}
