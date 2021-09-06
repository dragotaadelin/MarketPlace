const main = document.querySelector(".main");
const icons = main.getElementsByTagName("i");
const filters = main.getElementsByClassName("filter-categories");
const backgrounds = main.getElementsByClassName("background");
const buttons = main.getElementsByTagName("button");
const checkboxes = main.getElementsByTagName("input");
let showcases = main.getElementsByClassName("showcase");
const all = document.getElementById("all");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    filters[i].classList.toggle("hidden");
    icons[i].classList.toggle("fa-arrow-circle-up");
  });
}
function filterSelection(category) {
  showcases = main.getElementsByClassName("showcase");
  if (category === "all") {
    for (let showcase of showcases) {
      showcase.classList.toggle("show");
    }
  } else {
    for (let showcase of showcases) {
      if (showcase.classList.contains(category)) {
        showcase.classList.toggle("show2");
      }
    }
  }
}

filterSelection("all");
