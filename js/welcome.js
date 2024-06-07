var logoutButton = document.getElementById('logoutButton')
var userNameLogin;

if (localStorage.getItem("Username") !== null) {
    userNameLogin = localStorage.getItem("Username")
}

var displayName = document.getElementById('displayName');
displayName.innerHTML = `${userNameLogin}  <i class="fa-solid fa-user fs-1"></i> <i class="fa-solid fa-check fs-1"></i>`


logoutButton.addEventListener('click', function () {
    localStorage.removeItem("Username")
    window.location = './index.html'
})