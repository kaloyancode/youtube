// const fruits = ["apple", "banana", "cherry"];

// const firstFruit = fruits.shift();
// console.log(firstFruit);
// console.log(fruits);

const carouselItems = ["image1.jpg", "image2.jpg", "image3.jpg"];

function rotateCarousel() {
  const currentItem = carouselItems.shift();
  carouselItems.push(currentItem);
}

for (let i = 0; i < 3; i++) {
  rotateCarousel();
  console.log("Updated carousel items:", carouselItems);
}
