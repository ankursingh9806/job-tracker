const logo = document.getElementById("logo");
const logoutButton = document.getElementById("logout-button");
const home = document.getElementById("home");
const profile = document.getElementById("profile");
const reminder = document.getElementById("reminder");
const settings = document.getElementById("settings");
const jobApplication = document.getElementById("jobApplication");
const jobSearch = document.getElementById("jobSearch");

logo.addEventListener("click", function () {
    window.location.href = "../html/home.html";
});
home.addEventListener("click", function () {
    window.location.href = "../html/home.html";
});
profile.addEventListener("click", function () {
    window.location.href = "../html/profile.html";
});
reminder.addEventListener("click", function () {
    window.location.href = "../html/reminder.html";
});
settings.addEventListener("click", function () {
    window.location.href = "../html/settings.html";
});
jobApplication.addEventListener("click", function () {
    window.location.href = "../html/jobApplication.html";
});
jobSearch.addEventListener("click", function () {
    window.location.href = "../html/jobSearch.html";
});
logoutButton.addEventListener("click", logout);

async function logout() {
    try {
        await axios.post("http://localhost:3000/user/logout");
        localStorage.clear();
        window.location.href = "../html/login.html";
    } catch (err) {
        console.error("failed to logout:", err);
    }
}