const main = document.querySelector(".main");
const icons = main.getElementsByTagName("i");
const filters = main.getElementsByClassName("filter-categories");
const backgrounds = main.getElementsByClassName("background");
const buttons = main.getElementsByTagName("button");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    filters[i].classList.toggle("hidden");
    icons[i].classList.toggle("fa-arrow-circle-up");
  });
}

// for (let i = 0; i < backgrounds.length; i += 2) {
//   backgrounds[i].addEventListener("mouseover", () => {
//     buttons[i].classList.toggle("hidden");
//     buttons[i + 1].classList.toggle("hidden");
//   });
//   backgrounds[i].addEventListener("mouseleave", () => {
//     buttons[i].classList.toggle("hidden");
//     buttons[i + 1].classList.toggle("hidden");
//   });
// }
