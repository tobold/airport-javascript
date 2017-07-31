describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("landing a plane", function() {
    it("lands a plane", function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });
});
