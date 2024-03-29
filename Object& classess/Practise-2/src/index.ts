
class WebAlumni {
    public salary: number;

    constructor(
        public name: string,
        public canOopCode: boolean, 
        public experience: { vueJs: number; nodeJs: number }
    ) {
        this.name = name;
        this.canOopCode = canOopCode;
        this.experience.nodeJs = experience.nodeJs;
        this.experience.vueJs = experience.vueJs;
    }

    getSalary(): string {
        switch (true) {
            case !this.canOopCode && this.experience.nodeJs < 1 && this.experience.vueJs < 1:
                this.salary = 250
                break;
            case !this.canOopCode && this.experience.vueJs == 1 && this.experience.nodeJs < 1:
                this.salary = 350
                break;
            case !this.canOopCode && this.experience.vueJs >= 2 && this.experience.nodeJs >= 2:
                this.salary = 450
                break;
            default:
                this.salary = 700;
                break;
        }
        return `${this.name}'s salary is ${this.salary}`;
    }
}

const mengheang = new WebAlumni("Mengheang", false, {vueJs: 2, nodeJs: 2});
console.log(mengheang.getSalary());
