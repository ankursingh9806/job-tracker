const signupButton = document.getElementById("signup-button");
const loginButton = document.getElementById("login-button");
const secondSignupButton = document.getElementById("second-signup-button");

signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/signup.html";
});

loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../html/login.html";
});

secondSignupButton.addEventListener("click", function (e) {
    window.location.href = "../html/signup.html";
    e.preventDefault();
});