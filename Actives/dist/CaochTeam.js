var Team = /** @class */ (function () {
    function Team(id, name, coach) {
        this.id = id;
        this.name = name;
        this.coach = coach;
        this.name = name;
        this.coach = coach;
    }
    return Team;
}());
var Coach = /** @class */ (function () {
    function Coach(name, age) {
        this.name = name;
        this.age = age;
        this.age = age;
        this.name = name;
    }
    return Coach;
}());
var teamPanda = new Team(1, "Foodpanda", new Coach("Mengheang", 21));
console.log(teamPanda);
