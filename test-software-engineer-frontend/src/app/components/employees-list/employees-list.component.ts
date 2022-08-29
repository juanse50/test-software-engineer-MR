import { Component, OnInit } from '@angular/core';
import { employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeService: EmployeeService, private router: Router) { }

  employees: employee[]=[];
  idEmployee:string='';

  ngOnInit(): void {
    
    this.getEmployees();
   
  }

  getDetails(employee: employee){
    localStorage.removeItem("employeeId");
    localStorage.setItem("employeeId", ""+employee.id);
    this.router.navigate(['/inicio/employees-details']);
  }

  getEmployees(){
    this.employeService.getEmployees()
    .subscribe(employeeArray => this.employees=employeeArray);
  }

  getEmployee(id:any){
    if(this.idEmployee.length<1){
      this.getEmployees();
    }
    else{
      this.employees=[];
    this.employeService.getEmployeeById(+this.idEmployee)
    .subscribe(empl => this.employees.push(empl));
    }
  }
  }


