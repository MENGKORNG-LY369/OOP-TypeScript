"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    Teacher.prototype.greeter = function () {
        return { firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age };
    };
    return Teacher;
}());
exports.Teacher = Teacher;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, email, age, Studentclass) {
        if (Studentclass === void 0) { Studentclass = []; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.Studentclass = Studentclass;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.Studentclass = Studentclass;
    }
    Student.prototype.setClass = function (Studentclass) {
        this.Studentclass.push(Studentclass);
    };
    Student.prototype.greeter = function () {
        return { firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age, Studentclass: this.Studentclass };
    };
    return Student;
}());
exports.Student = Student;
