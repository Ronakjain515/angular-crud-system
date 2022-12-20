import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './pages/add-emp/add-emp.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'add-emp', component: AddEmpComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
