import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  constructor(private employeService: EmployeeService, private router: Router) { }

  employee: employee;

  ngOnInit(): void {
    var employeeId = window.localStorage.getItem("employeeId");
    if (!employeeId) {
      this.router.navigate(['/inicio/employees-list']);
      return;    
  }
  this.getEmployee(employeeId);
}

  getEmployee(id:any){
    this.employeService.getEmployeeById(id)
    .subscribe(empl => this.employee=empl);
  }

  getBack(){
    this.router.navigate(['/inicio/employees-list']);
  }

}