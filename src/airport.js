class Airport {
    constructor(planes = []) {
      this.planes = [...planes];
    }
    land(plane) {
      this.planes.push(plane);
    }

  takeOff(plane) {
    var index = this.planes.indexOf(plane)
    this.planes.splice(index, 1)
  }
}
