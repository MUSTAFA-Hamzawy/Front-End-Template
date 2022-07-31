let mainColor = localStorage.getItem("mainColor");
if (mainColor !== null)
  document.documentElement.style.setProperty("--primary-color", mainColor);
/**
 * Start Setting Section
 */
// show options
showOptions();
// switch colors
const colorsListItemsArr = document.querySelectorAll(".colors li");

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

// check whether the user wants a random bg or not
let id;
let interval = 5000;
document.querySelector(".random-bg .accept").onclick = function () {
  id = randomizeBackgrounds(interval);
};
document.querySelector(".random-bg .decline").onclick = function () {
  clearInterval(id);
};
id = randomizeBackgrounds(interval);
//  End Setting Section

// progress section

let skills = document.querySelector(".skills");

window.onscroll = function () {
  let scrollTop = this.pageYOffset;
  let allSkills = document.querySelectorAll(".skills .skill-container span");
  if (scrollTop > 250) {
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Start Gallery

let imgs = document.querySelectorAll(".gallery img");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create a div as an overlay window
    let overlayDiv = document.createElement("div");
    overlayDiv.className = "overlay-popup";
    document.body.appendChild(overlayDiv);

    // create a div as a box for the image
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    document.body.appendChild(popupBox);

    // Create the heading
    let heading = document.createElement("h2");
    heading.appendChild(document.createTextNode(img.alt));
    popupBox.appendChild(heading);

    // Create the close button
    let closeSpan = document.createElement("span");
    closeSpan.appendChild(document.createTextNode("X"));
    closeSpan.className = "close-button";
    popupBox.appendChild(closeSpan);

    // create the img
    let targetImage = document.createElement("img");
    targetImage.src = e.target.src;
    targetImage.className = "larger-img";
    popupBox.appendChild(targetImage);
  });
});

// add event to the close button
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".overlay-popup").remove();
  }
});

// End Gallery
