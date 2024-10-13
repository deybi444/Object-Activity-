let car = {
  type: "Honda",
  model: "Civic",
  color: "Red"
};

console.log(typeof car); // Output: "object"

car.type = "Toyota";
console.log(car); // Output: { type: 'Toyota', model: 'Civic', color: 'Red' }
