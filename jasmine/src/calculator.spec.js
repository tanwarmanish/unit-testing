// describe('Calculator',function(){
// 	it('Should Have ',function(){})
// });
// describe('Validate Query');
// describe('Extract Operator');

describe("Add", function () {
  it("should add two positive numbers", function () {
    let a = 10,
      b = 12;
    expect(add(a, b)).toBe(22);
  });

  it("Should add two negative numbers", function () {
    let a = -10,
      b = -32;
    expect(add(a, b)).toBe(-42);
  });

  it("Should add two positive & negative numbers", function () {
    let a = 10,
      b = -32;
    expect(add(a, b)).toBe(-22);
  });

  it("Should add two negative & positive numbers", function () {
    let a = -10,
      b = 2;
    expect(add(a, b)).toBe(-8);
  });
});

describe("Subtract", function () {
  it("should subtract two positive numbers", function () {
    let a = 10,
      b = 12;
    expect(subtract(a, b)).toBe(-2);
  });

  it("Should subtract two negative numbers", function () {
    let a = -10,
      b = -32;
    expect(subtract(a, b)).toBe(22);
  });

  it("Should subtract two positive & negative numbers", function () {
    let a = 10,
      b = -32;
    expect(subtract(a, b)).toBe(42);
  });

  it("Should subtract two negative & positive numbers", function () {
    let a = 10,
      b = 2;
    expect(subtract(a, b)).toBe(8);
  });
});

describe('Multiply',function(){
	it("should add two positive numbers", function () {
    let a = 5,
      b = 6;
    expect(multiply(a, b)).toBe(30);
  });


	it("should add two negative numbers", function () {
    let a = -5,
      b = -6;
    expect(multiply(a, b)).toBe(30);
  });

	it("should add two negative & positive numbers", function () {
    let a = 5,
      b = -6;
    expect(multiply(a, b)).toBe(-30);
  });

	it("should add two positive & zero numbers", function () {
    let a = 5,
      b = 0;
    expect(multiply(a, b)).toBe(0);
  });
});

describe('Divide',function(){
	it("Should divide two numbers",function(){
		let a=8,b=2;
		expect(divide(a,b)).toBe(4);
	});

	it("Should throw error when divided by 0",function(){
		let a=188,b=0;
		expect(divide(a,b)).toThrow();
	});
});
