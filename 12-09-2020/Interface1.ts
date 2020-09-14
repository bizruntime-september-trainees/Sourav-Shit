interface Person {  
    firstName: string;  
    lastName: string;  
    age: number;  
    FullName();  
    GetAge();  
}  

class Employee implements Person {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
let myEmployee = new Employee('Sourav', 'Shit', 23);  
let fullName = myEmployee.FullName();  
let Age = myEmployee.GetAge();  
console.log("Name of Person: " +fullName + '\nAge: ' + Age);  