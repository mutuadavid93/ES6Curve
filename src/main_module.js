
// import the exposed object / class 
 
import {Employee} from './Employee.js';
 
let emp = new Employee("Street Rose");

// Try Modifying i.e Setting Employee Name;
// You can't do it because it only exposes a Getter.
//
// Unless you expose a Setter too.
emp.name = "Draymond Green";  

let myEmpWork = emp.doWork();
 
console.log(myEmpWork);