/**
 * Start Randomizing the background of the landing page
 */

let landingPage = document.querySelector(".landing-page");

// get the arr of images
let images = ["bg1.jpg", "bg2.jpg", "bg4.jpg", "bg5.jpg"];

// get random element
let randomImage = images[Math.floor(Math.random() * images.length)];

// change the background every num of seconds
let interval = 3000;

setInterval(() => {
  let randomImage = images[Math.floor(Math.random() * images.length)];
  landingPage.style.backgroundImage = `url(images/${randomImage})`;
}, interval);

// * End Randomizing the background of the landing page
