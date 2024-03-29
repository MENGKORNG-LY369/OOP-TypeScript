class School {
    constructor(
        public name: string,
        public location: string,
        public director: Director[] = []
    ) {
        console.log(director);
        
        this.name = name;
        this.location = location;
        this.director = director
    }

    setDirector(director: Director) {
        this.director.push(director);
    }
}

class Director {
    constructor(
        public name: string,
        public age: number,
    ) {
        this.name = name;
        this.age = age;
    }
}

class Student {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public school: School[] = []
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = school;
    }

    setSchool(school: School) {
        this.school.push(school);
    }
}

const Eren = new Student(1, "Eren", 19);
const school1 = new School("PNC", "PP");
const director1 = new Director("Unknown", 65);

Eren.setSchool(school1);
school1.setDirector(director1);

console.log(Eren);
