class Human {
    constructor(
        public name: string,
        public age: number,
        public gender: string,
        public humanArm: Arms
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.humanArm = humanArm;
    }
}

class Arms {
    constructor(
        public leftArm: boolean,
        public rightArm: boolean
    ) {
        this.leftArm = leftArm;
        this.rightArm = rightArm;
    }
}

const MENGKORNG = new Human("MENGKORNG", 19, "Male", {leftArm: true, rightArm: true})
console.log(MENGKORNG);
