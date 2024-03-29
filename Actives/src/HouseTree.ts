class House {
    constructor(
        public owner: string,
        public location: string,
        public tree: Tree[] = [],
    ) {
        this.tree = tree;
        this.owner = owner;
        this.location = location;
    }

    geeter(tree: Tree) {
        this.tree.push(tree);
    }

    getInfo(tree: Tree) {
        `Hello, This house owner is ${this.owner}, there are ${this.tree}`;
    }
}

class Tree {
    constructor(
        public age: number,
        public size: number,
        public height: number,
        public quantity: number
    ) {
        this.age = age;
        this.size = size;
        this.height = height;
        this.quantity = quantity;
    }
}

const tree1 = new Tree(3, 5, 5, 1);

const mengkorngHouse = new House("mengkorng", "KPC");
mengkorngHouse.geeter(tree1);
console.log(mengkorngHouse.getInfo(tree1));

console.log(mengkorngHouse);
