class Airport {
    constructor(planes = [], weather) {
      this.planes = [...planes];
      this.weather = 'good';
    }
    land(plane) {
      if(this.weather === 'good') {
        this.planes.push(plane);
      } else {
        console.log('bad weather stops landing!')
      }
    }
    takeOff(plane) {
      if(this.weather === 'good') {
        var index = this.planes.indexOf(plane)
        this.planes.splice(index, 1)
      } else {
        console.log('bad weather stops takeoff!')
      }
    }
    badWeather() {
      this.weather = 'bad';
    }
    goodWeather() {
      this.weather = 'good';
    }
}
