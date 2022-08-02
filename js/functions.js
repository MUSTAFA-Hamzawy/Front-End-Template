// this function sets an interval for random bg, and return the id of set interval
function randomizeBackgrounds(interval) {
  let landingPage = document.querySelector(".landing-page");

  // get the arr of images
  let images = ["bg1.jpg", "bg2.jpg", "bg4.jpg"];

  // get random element
  let randomImage = images[Math.floor(Math.random() * images.length)];

  // change the background every num of seconds
  let id = setInterval(() => {
    let randomImage = images[Math.floor(Math.random() * images.length)];
    landingPage.style.backgroundImage = `url(images/${randomImage})`;
  }, interval);

  return id;
}

// To show option box
function showOptions() {
  document.querySelector(".settings img").onclick = function () {
    document.querySelector(".settings").classList.toggle("opened");
    document.querySelector(".header ul").classList.remove("open");
  };
}

// To switch the color of website
function switchColors(...colorsListItemsArr) {
  colorsListItemsArr.forEach((li) => {
    li.addEventListener("click", (el) => {
      colorsListItemsArr.forEach((li) => {
        li.classList.remove("active");
      });

      li.classList.add("active");

      document.documentElement.style.setProperty(
        "--primary-color",
        el.target.dataset.color
      );
      localStorage.setItem("mainColor", el.target.dataset.color);
    });
  });
}
