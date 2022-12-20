import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppEmpService } from "src/app/services/add_emp/app-emp.service";
import { ToastersService } from "src/app/services/notifications/toasters.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  
  public employeeForm =  this.formBuilder.group(
    {
      "first_name": "",
      "last_name": "",
      "email": "",
      "address": "",
      "address2": "",
      "city": "",
      "state": "",
      "zipcode": ""
    }
  );
  
  constructor(
    private formBuilder: FormBuilder, 
    private _employeeService: AppEmpService, 
    private _toasterService: ToastersService,
    private router: Router
    ) {}

  onSubmit() {
    this._employeeService.addEmployees(this.employeeForm.value).subscribe(
      data => this.showResponsePopup(data, false),
      error => this.showResponsePopup(error, true)
      );
  }

  showResponsePopup(response: any, isError: boolean){

    if(isError){
      const title: string = Object.keys(response.error)[0];
      const msg: string = Object.values(response.error)[0] as string;
      this._toasterService.showError(msg, title);
    }
    else{
      this._toasterService.showSuccess("successfully saved", "Employee");
      this.router.navigate(['']);
    }
  }
}
