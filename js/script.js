let form = document.querySelector("form");
let inputs = form.getElementsByTagName("input");
let city = inputs[4];
let country = inputs[5];
let email = inputs[2];
let password = inputs[3];
let isValid = document.getElementById("isValid");
const togglePassword = document.querySelector("#togglePassword");

function saveInfo(mail, pass) {
  localStorage.setItem(mail, pass);
}

email.addEventListener("keyup", () => {
  if (email.checkValidity()) {
    email.style.border = "1px solid green";
    isValid.classList.remove("hidden");
  } else {
    email.style.border = "1px solid red";
    isValid.classList.add("hidden");
  }
});

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = email.value;
  const passwordInput = password.value;
  saveInfo(emailInput, passwordInput);

  window.location.href = "../login.html";
});

city.addEventListener("keyup", () => {
  if (city.value) {
    country.removeAttribute("disabled");
  } else {
    country.setAttribute("disabled", "");
  }
});
