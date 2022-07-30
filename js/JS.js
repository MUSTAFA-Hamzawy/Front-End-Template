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
