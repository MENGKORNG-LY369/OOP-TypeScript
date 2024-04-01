import { Teacher, Student } from "./Person";
import { Class } from "./Class";

const teacherA = new Teacher("Rady", "Y", "rady.y@gmail.com", 30);

const studentA = new Student("Mengkorng", "Ly", "mengkorng.ly@gmail.com", 19);
const studentAClass = new Class("WEB-B", 2024);

studentA.setClass(studentAClass);

console.log(studentA.greeter());
