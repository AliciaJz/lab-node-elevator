class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
  }

  start() {
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
    if (this.requests.length == 0) {
      this.stop();
    } else {
      if (this.direction == "up") {
        this.floorUp();
        this.waitingList.forEach((element, index) => {
          this._passengersEnter(element, index);
        });
        this.passengers.forEach((element, index) => {
          this._passengersLeave(element, index);
        });
      } else if (this.direction == "down") {
        this.floorDown();
        this.waitingList.forEach((element, index) => {
          this._passengersEnter(element, index);
        });
        this.passengers.forEach((element, index) => {
          this._passengersLeave(element, index);
        });
      }
    }
  }

  _passengersEnter(person, index) {
    if (this.floor == person.originFloor) {
      this.passengers.push(person);
      console.log(`${person.name} has enter the elevator`);
      this.waitingList.splice(index, 1);
      this.requests.push(person.destinationFloor);
      this.requests.splice(this.requests.indexOf(person.originFloor), 1);
    }
  }

  _passengersLeave(person, i) {
    if (this.floor == person.destinationFloor) {
      console.log(`${person.name} has left the elevator`);
      this.passengers.splice(i, 1);
      this.requests.splice(this.requests.indexOf(person.destinationFloor), 1);
    }
  }

  floorUp() {
    if (this.floor < 10) {
      this.floor++;
    } else {
      this.direction = "down";
      console.log(`You are at the top floor`);
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    } else {
      this.direction = "up";
      console.log(`You are at the bottom floor`);
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Direction : ${this.direction} Floor : ${this.floor}`);
  }
}

module.exports = Elevator;
