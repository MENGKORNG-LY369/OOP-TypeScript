var HumanHouse = /** @class */ (function () {
    function HumanHouse(color, location, owner, room) {
        if (room === void 0) { room = []; }
        this.color = color;
        this.location = location;
        this.owner = owner;
        this.room = room;
        this.color = color;
        this.location = location;
        this.owner = owner;
        this.room = room;
    }
    HumanHouse.prototype.setRoom = function (room) {
        this.room.push(room);
    };
    return HumanHouse;
}());
var Room = /** @class */ (function () {
    function Room(id, color, bed, door) {
        if (door === void 0) { door = []; }
        this.id = id;
        this.color = color;
        this.bed = bed;
        this.door = door;
        this.id = id;
        this.color = color;
        this.bed = bed;
        this.door = door;
    }
    Room.prototype.setDoor = function (door) {
        this.door.push(door);
    };
    return Room;
}());
var Door = /** @class */ (function () {
    function Door(id, color) {
        this.id = id;
        this.color = color;
        this.id = id;
        this.color = color;
    }
    return Door;
}());
var door1 = new Door(2, "skyblue");
var room1 = new Room(1, "lightseagreen", 2);
var room2 = new Room(2, "tomato", 3);
var house = new HumanHouse("teal", "KPC", "Eren");
room1.setDoor(door1);
room2.setDoor(door1);
house.setRoom(room1);
house.setRoom(room2);
console.log(house);
