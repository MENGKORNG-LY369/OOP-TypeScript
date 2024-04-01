"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Pnc school/Person");
var Class_1 = require("./Pnc school/Class");
var teacherA = new Person_1.Teacher("Rady", "Y", "rady.y@gmail.com", 30);
var studentA = new Person_1.Student("Mengkorng", "Ly", "mengkorng.ly@gmail.com", 19);
var studentAClass = new Class_1.Class("WEB-B", 2024);
studentA.setClass(studentAClass);
console.log(studentA.greeter());
