class HumanHouse {
    constructor(
        public color: string,
        public location: string,
        public owner: string,
        public room: Room[] = [],
    ) {
        this.color = color;
        this.location = location;
        this.owner = owner;
        this.room = room;
    }

    setRoom(room: Room) {
        this.room.push(room);
    }

}

class Room {
    constructor(
        public id: number,
        public color: string,
        public bed: number,
        public door: Door[] = []
    ) {
        this.id = id;
        this.color = color;
        this.bed = bed;
        this.door = door;
    }
    setDoor(door: Door) {
        this.door.push(door);
    }
}

class Door {
    constructor(
        public id: number,
        public color: string
    ) {
        this.id = id;
        this.color = color;
    }
}

const door1 = new Door(2, "skyblue");
const room1 = new Room(1, "lightseagreen", 2);
const room2 = new Room(2, "tomato", 3);
const house = new HumanHouse("teal", "KPC", "Eren");

room1.setDoor(door1);
room2.setDoor(door1);

house.setRoom(room1);
house.setRoom(room2);

console.log(house);
