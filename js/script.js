var floatingEmail = document.getElementById('floatingEmail');
var floatingPassword = document.getElementById('floatingPassword');
var signInButton = document.getElementById('signInButton');
var formMessageSuccess = document.getElementById('formMessageSuccess');
var formMessageFailed = document.getElementById('formMessageFailed');
var signUpButton = document.getElementById('signUpButton');
var listOfUsers = [];

form.addEventListener('click', function (e) {
    e.preventDefault();
})


if (localStorage.getItem("UsersData") !== null) {
    listOfUsers = JSON.parse(localStorage.getItem("UsersData"));

}

else {
    listOfUsers = [];

}

signUpButton.addEventListener('click', function () {
    window.location = './signup.html'
})


signInButton.addEventListener('click', function () {
    for (i = 0; i < listOfUsers.length; i++) {
        if (floatingEmail.value == listOfUsers[i].userEmail && floatingPassword.value == listOfUsers[i].userPassword) {
            formMessageFailed.classList.add('d-none')
            formMessageSuccess.classList.remove('d-none')
            localStorage.setItem('Username', listOfUsers[i].userName)
            window.location = './welcome.html'

        }

        else {
            formMessageSuccess.classList.add('d-none')
            formMessageFailed.classList.remove('d-none')
        }
    }
})
