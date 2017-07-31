describe("Airport", function() {
  var airport;
  var plane1 = 'plane1';
  var plane2 = 'plane2';

  beforeEach(function() {
    airport = new Airport();
  });

  describe("landing a plane", function() {
    it("lands a plane", function() {
      airport.land(plane1);
      expect(airport.planes).toContain(plane1);
    });
  });

  describe("taking off a plane", function() {
    it("takes off a plane", function(){
      airport.land(plane1);
      airport.land(plane2);
      airport.takeOff(plane1);
      expect(airport.planes).not.toContain(plane1);
    });
  });

});
