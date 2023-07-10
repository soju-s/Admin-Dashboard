import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadsComponent } from './leads/leads.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'add',component:AddEmployeeComponent
  },
  {
    path:'leads',component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
