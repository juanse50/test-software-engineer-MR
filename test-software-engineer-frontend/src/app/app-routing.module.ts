import { InicioPrincipalComponent } from './components/inicio-principal/inicio-principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
    children: [
      { path: "", component: InicioPrincipalComponent },
      { path: "employees-list", component: EmployeesListComponent },
      { path: "employees-details", component: EmployeesDetailsComponent }
    ]
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
