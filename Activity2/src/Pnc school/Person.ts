
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

    greeter() {
        return { firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age };
    }
}

export class Student {
    constructor(
        public firstName: string,
        public lastName: string, 
        public email: string,
        public age: number
        ) {
    }
}

