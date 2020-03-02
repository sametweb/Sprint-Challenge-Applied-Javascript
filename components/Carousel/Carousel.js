/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, 
    you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//My image files source
let images = [
  "mountains.jpeg",
  "computer.jpeg",
  "trees.jpeg",
  "turntable.jpeg"
];

let current = 0; //Displaying image index
let counter = 0; //To make first one visible

//My image component
const createImage = imgURL => {
  let image = $("<img />");
  image.attr("src", `./assets/carousel/${imgURL}`);
  counter == 0
    ? image.css({ display: "block", opacity: "1" })
    : image.css("display", "none");
  counter++;
  return image;
};

//Carousel container
let createCarousel = () => {
  let carousel = $(`<div class="carousel"></div>`);
  let left = $(`<div class="left-button"> < </div>`);
  let right = $(`<div class="right-button"> > </div>`);

  //Carousal slider method
  function moveCarousel(direction) {
    let allImages = document.querySelectorAll(".carousel img");

    direction == "left"
      ? (current = current == 0 ? images.length - 1 : current - 1)
      : direction == "right"
      ? (current = current == images.length - 1 ? 0 : current + 1)
      : null;

    allImages.forEach((item, index) => {
      index == current
        ? (item.style.display = "block")
        : item.removeAttribute("style");
    });
  }
  left.on("click", () => {
    moveCarousel("left");
  });

  right.on("click", () => {
    moveCarousel("right");
  });

  setInterval(() => moveCarousel("right"), 3000);

  carousel.append(left);
  images.forEach((item, index) => {
    carousel.append(createImage(item));
  });
  carousel.append(right);

  let carouselContainer = $(".carousel-container");

  carouselContainer.append(carousel);
};

createCarousel();
