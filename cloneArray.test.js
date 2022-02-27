const cloneArray = require("./cloneArray");

test("Make sure the clone array equals the array", () => {
  const array = ["dog", "cat"];
  // use toEqual to make sure it is not testing the same array memory address
  expect(cloneArray(array)).toEqual(array);
  // use .not.toBe to make sure cloneArray is making a copy and not returning same array.
  expect(cloneArray(array)).not.toBe(array);
});
