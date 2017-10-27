// Employee Records
// You are to create a collection of employee's information for your company. Each employee has the following attributes:
//
// Name
// Job title
// Salary
// Status

var employees = [];

function Employee (name, jobTitle, salary) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = 'Full Time';
  this.printEmployeeForm = function () {
    console.log(this.name, this.jobTitle, this.salary, this.status);
  }
  employees.push([this.name, this.jobTitle, this.salary, this.status]);
}

var bob = new Employee('Bob', 'Instructor', '$3000000');
bob.status = 'Part Time';
var eric = new Employee('Eric', 'Instructor', '$5000000');
var marcus = new Employee('Marcus', 'Guru', '$7000000');

bob.printEmployeeForm();
eric.printEmployeeForm();
marcus.printEmployeeForm();

console.log(employees);
