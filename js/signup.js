var floatingName = document.getElementById('floatingName');
var floatingEmail = document.getElementById('floatingEmail');
var floatingPassword = document.getElementById('floatingPassword');
var signUpButton = document.getElementById('signUpButton');
var signInButton = document.getElementById('signInButton');
var formMessageSuccess = document.getElementById('formMessageSuccess');
var formMessageFailed = document.getElementById('formMessageFailed');
var listOfUsers = [];

if (localStorage.getItem("UsersData") !== null) {
    listOfUsers = JSON.parse(localStorage.getItem("UsersData"));

}

else {
    listOfUsers = [];

}

form.addEventListener('click', function (e) {
    e.preventDefault();
})


signUpButton.addEventListener('click', function () {

    if (floatingName.value.length == 0 || floatingEmail.value.length == 0 || floatingPassword.value.length == 0) {
        formMessageFailed.classList.remove('d-none')
        formMessageSuccess.classList.add('d-none')

    } else {
        formMessageFailed.classList.add('d-none')
        formMessageSuccess.classList.remove('d-none')
        var user = {
            userName: floatingName.value,
            userEmail: floatingEmail.value,
            userPassword: floatingPassword.value
        }

        listOfUsers.push(user)
        localStorage.setItem('UsersData', JSON.stringify(listOfUsers))
        localStorage.setItem('Username', floatingName.value)

    }

})

signInButton.addEventListener('click', function () {
    window.location = './index.html'
})



