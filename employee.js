class Person {
  constructor(name, age) {
    this.empName = name;
    this.empAge = age;
  }
  getDetail() {
    return (
      "The details of Employee  are:  " +
      "Name : " +
      this.empName +
      " Age : " +
      this.empAge
    );
  }
}

class Employee extends Person {
  constructor(name, age, role, contact) {
    super(name, age);
    this.empRole = role;
    this.contact = contact;
  }

  getDetails() {
    return (
      super.getDetail() +
      " Role : " +
      this.empRole +
      "   Contact : " +
      this.contact
    );
  }
}

let employee = new Employee(
  "aman kumamr gupta",
  21,
  "Software engineer",
  "8707724107"
);
console.log(employee.getDetails());
