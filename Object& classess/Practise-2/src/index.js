var WebAlumni = /** @class */ (function () {
    function WebAlumni(name, canOopCode, vueJs, nodeJs) {
        this.name = name;
        this.canOopCode = canOopCode;
        this.vueJs = vueJs;
        this.nodeJs = nodeJs;
    }
    WebAlumni.prototype.getSalary = function () {
        switch (true) {
            case !this.canOopCode && this.vueJs < 1 && this.nodeJs < 1:
                this.salary = 250;
                break;
            case !this.canOopCode && this.vueJs == 1 && this.nodeJs < 1:
                this.salary = 350;
                break;
            case !this.canOopCode && this.vueJs >= 2 && this.nodeJs >= 2:
                this.salary = 450;
                break;
            default:
                this.salary = 700;
                break;
        }
        return "".concat(this.name, "'s salary is ").concat(this.salary);
    };
    return WebAlumni;
}());
var mengheang = new WebAlumni("Mengheang", false, 2, 2);
console.log(mengheang.getSalary());
