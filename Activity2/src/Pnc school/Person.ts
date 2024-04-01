import { Class } from "./Class";

export class Teacher {
    constructor(
        public firstName: string,
        public lastName: string, 
        public email: string,
        public age: number
        ) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    greeter() : object {
        return { firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age };
    }
}

export class Student {
    constructor(
        public firstName: string,
        public lastName: string, 
        public email: string,
        public age: number,
        public Studentclass: Class[] = []
        ) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.Studentclass = Studentclass;
    }

    setClass(Studentclass: Class) {
        this.Studentclass.push(Studentclass);
    }

    greeter() : object {
        return { firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age, Studentclass: this.Studentclass };
    }
}