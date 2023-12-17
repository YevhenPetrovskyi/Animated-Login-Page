const registerBtn = document.getElementById("register");
const container = document.getElementById("container");
const loginBtn = document.getElementById("login");
const formSignUp = document.getElementById("form-sign-up");
const formSignIn = document.getElementById("form-sign-in");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

formSignIn.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    formSignIn.elements.email.value.trim() !== "" &&
    formSignIn.elements.password.value.trim() !== ""
  ) {
    formSignIn.reset();
  } else {
    alert("Please, fill in all fields correctly!");
  }
});

formSignUp.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    formSignUp.elements.email.value.trim() !== "" &&
    formSignUp.elements.password.value.trim() !== "" &&
    formSignUp.elements.userName.value.trim() !== ""
  ) {
    formSignUp.reset();
  } else {
    alert("Please, fill in all fields correctly!");
  }
});
