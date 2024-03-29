var House = /** @class */ (function () {
    function House(owner, location, tree) {
        if (tree === void 0) { tree = []; }
        this.owner = owner;
        this.location = location;
        this.tree = tree;
        this.tree = tree;
        this.owner = owner;
        this.location = location;
    }
    House.prototype.geeter = function (tree) {
        this.tree.push(tree);
    };
    House.prototype.getInfo = function (tree) {
        "Hello, This house owner is ".concat(this.owner, ", there are ").concat(this.tree);
    };
    return House;
}());
var Tree = /** @class */ (function () {
    function Tree(age, size, height, quantity) {
        this.age = age;
        this.size = size;
        this.height = height;
        this.quantity = quantity;
        this.age = age;
        this.size = size;
        this.height = height;
        this.quantity = quantity;
    }
    return Tree;
}());
var tree1 = new Tree(3, 5, 5, 1);
var mengkorngHouse = new House("mengkorng", "KPC");
mengkorngHouse.geeter(tree1);
console.log(mengkorngHouse.getInfo(tree1));
console.log(mengkorngHouse);
