import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; // <-- add this line
 
const routes: Routes = [
 { path: '', redirectTo: 'employees', pathMatch: 'full' },
 { path: 'employees', component: EmployeesListComponent },
 { path: 'employees/new', component: AddEmployeeComponent }, // <-- add this line
]
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }