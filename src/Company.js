
import {Employee} from './Employee';

export class Company {
    hire(...names){
        // Create an array from received names:
        this.employees = names.map(n => new Employee(n));
    }
    
    doWork() {
        //Combine all values.
        // return the value on invoking doWork() from each Employee Object.
        //return [for (e of this.employees) e.doWork()];
    }
}

