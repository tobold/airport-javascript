class Airport {
    constructor(planes = []) {
      this.planes = [...planes];
    }
    land(plane) {
      this.planes.push(plane);
    }
}
