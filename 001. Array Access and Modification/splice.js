const fruits = ["apple", "banana", "cherry"];

const removedItems = fruits.splice(1, fruits.length - 1, "papaya", "mango");

console.log(removedItems);
console.log(fruits);
