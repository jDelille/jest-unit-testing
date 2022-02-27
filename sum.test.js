const sum = require("./sum");

test("properly adds two numbers", () => {
 // expect takes in anything we want to test
 // toBe tests if its parameter equals the expect
  expect(sum(1, 2)).toBe(3);
});
