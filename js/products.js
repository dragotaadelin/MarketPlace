const main = document.querySelector(".main");
const icons = main.getElementsByTagName("i");
const filters = main.getElementsByClassName("filter-categories");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    filters[i].classList.toggle("hidden");
    icons[i].classList.toggle("fa-arrow-circle-up");
  });
}
