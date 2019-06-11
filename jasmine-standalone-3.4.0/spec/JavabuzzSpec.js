describe('Javabuzz', function() {

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function(){
    it('divisble by 3', function() {
        expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisble by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true)
    })
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(4)).toBe(false)
    })
  });

  describe('knows when a number is', function() {
    it('divisble by 5 and 3', function() {
      expect(javabuzz.isDivisibleByFiveAndThree(15)).toBe(true)
    });
  });

  describe('knows when a number is', function() {
    it('divisble by 5 and 3', function() {
      expect(javabuzz.isDivisibleByFiveAndThree(12)).toBe(false)
    });
  });

  describe('when playing, says', function() {
    it('"java" when a number is divisble by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });

  describe('when playing, says', function() {
    it('"buzz" when a number is divisble by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing, says', function() {
    it('"JavaBuzz" when a number is divisble by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });
  });
});
