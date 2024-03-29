class Team {
    constructor(
        public id: number,
        public name: string,
        public coach?: Coach,
    ) {
        this.name = name;
        this.coach = coach;
    }
}

class Coach {
    constructor(
        public name: string,
        public age: number,
    ) {
        this.age = age;
        this.name = name;
    }
}

const teamPanda = new Team(1, "Foodpanda", new Coach("Mengheang", 21));
console.log(teamPanda);
