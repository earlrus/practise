//es6 class and inheritance concept

class Department {
  constructor(department) {
    this.department = department;
  }
}

class Employee extends Department {
  constructor(department, name) {
    super(department);
    this.name = name;
  }

  displayDetails() {
    console.log(`Department ${this.department} ---Employee name ${this.name}`);
  }
}

let emp = new Employee("Software Engineer", "Aman");
emp.displayDetails();
