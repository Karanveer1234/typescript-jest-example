import  {multiply,subtract}  from "../src/mul";
describe("test add function", () => {
  it("should return 50 for add(10,5)", () => {
    expect(multiply(10, 5)).toBe(50);
  });
it("should return 2 for add(5,3)", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
