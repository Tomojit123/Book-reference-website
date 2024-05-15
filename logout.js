var signinA = document.getElementById('sign-in-a');
var signupA = document.getElementById('sign-up-a');
var logoutA = document.getElementById('log-out-a');
var signinMobA = document.getElementById('sign-in-mob-a');
var signupMobA = document.getElementById('sign-up-mob-a');
var logoutMobA = document.getElementById('log-out-mob-a');
var userBox = document.getElementById('user-box');

let email = localStorage.getItem('loggedInUserEmail');
console.log(email);
function myNavigation() {
    currentState = true;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cross').style.display = 'block';
    document.getElementById('nav-menu').style.display = 'block';
    signinMobA.style.display = email ? 'none' : 'block';
    signupMobA.style.display = email ? 'none' : 'block';
    logoutMobA.style.display = email ? 'block' : 'none';

}
function myCross() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('cross').style.display = 'none';
    document.getElementById('nav-menu').style.display = 'none';

}

function showBox() {
    document.getElementById('box').style.display = 'block';
    signinA.style.display = email ? 'none' : 'block';
    signupA.style.display = email ? 'none' : 'block';
    logoutA.style.display = email ? 'block' : 'none';
    eventOccur();
}

function show() {
    //console.log("button clicked");
    localStorage.removeItem('loggedInUserEmail');
    signinA.style.display = 'block';
    signupA.style.display = 'block';
    logoutA.style.display = 'none';
    console.log(email);
}
function eventOccur() {
    console.log("hello");
    return (
        document.body.addEventListener('click', function (event) {
            if (event.target !== userBox && !userBox.contains(event.target)) {
                box.style.display = 'none';
            }
            else {
                box.style.display = 'block';
            }
        })
    )
}