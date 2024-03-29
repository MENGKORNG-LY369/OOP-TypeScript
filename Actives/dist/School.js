var School = /** @class */ (function () {
    function School(name, location, director) {
        if (director === void 0) { director = []; }
        this.name = name;
        this.location = location;
        this.director = director;
        console.log(director);
        this.name = name;
        this.location = location;
        this.director = director;
    }
    School.prototype.setDirector = function (director) {
        this.director.push(director);
    };
    return School;
}());
var Director = /** @class */ (function () {
    function Director(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return Director;
}());
var Student = /** @class */ (function () {
    function Student(id, name, age, school) {
        if (school === void 0) { school = []; }
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = school;
        this.id = id;
        this.name = name;
        this.age = age;
        this.school = school;
    }
    Student.prototype.setSchool = function (school) {
        this.school.push(school);
    };
    return Student;
}());
var Eren = new Student(1, "Eren", 19);
var school1 = new School("PNC", "PP");
var director1 = new Director("Unknown", 65);
Eren.setSchool(school1);
school1.setDirector(director1);
console.log(Eren);
