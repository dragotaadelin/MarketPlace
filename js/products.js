const main = document.querySelector(".main");
const icons = main.getElementsByTagName("i");
const filters = main.getElementsByClassName("filter-categories");
const backgrounds = main.getElementsByClassName("background");
const buttons = main.getElementsByTagName("button");
const checkboxes = main.getElementsByTagName("input");
let showcases = main.getElementsByClassName("showcase");
const search = document.getElementsByClassName("search")[0];
const seatchButton = search.getElementsByTagName("button")[0];
const searchInput = search.getElementsByTagName("input")[0];
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

function filterSelectionModel(category) {
  showcases = main.getElementsByClassName("showcase");
  for (let showcase of showcases) {
    if (showcase.classList.contains(category)) {
      showcase.classList.toggle("show3");
    }
  }
}

seatchButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (all.checked === true) {
    all.click();
  }
  document.getElementById(searchInput.value).click();
});

filterSelection("all");
