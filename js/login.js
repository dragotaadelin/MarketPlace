let form = document.querySelector("form");
let inputs = form.getElementsByTagName("input");
let email = inputs[0];
let password = inputs[1];
const togglePassword = document.querySelector("#togglePassword");

function verifyUser(mail, pass) {
  if (localStorage.getItem(mail) === pass) {
    window.location.href = "../home.html";
  } else {
    alert("Wrong user info. Try again.");
  }
}

email.addEventListener("keyup", () => {
  if (email.checkValidity()) {
    email.style.border = "1px solid green";
  } else {
    email.style.border = "1px solid red";
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
  verifyUser(emailInput, passwordInput);
});
