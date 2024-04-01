export class House {
  bedroom: Room
  livingRoom: Room
  constructor() {
      this.bedroom = new Room();
      this.livingRoom = new Room();
  }
}
export class Room {
  mainWindows: Windows[]
  constructor() {
      this.mainWindows = [];
  }
}
export class Windows {
  color: string
  constructor(color: string) {
      this.color = "red";
  }
}

