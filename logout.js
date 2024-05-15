var signinA = document.getElementById('sign-in-a');
var signupA = document.getElementById('sign-up-a');
var logoutA = document.getElementById('log-out-a');
var signinMobA = document.getElementById('sign-in-mob-a');
var signupMobA = document.getElementById('sign-up-mob-a');
var logoutMobA = document.getElementById('log-out-mob-a');
var userBox = document.getElementById('user-box');

let gmail = localStorage.getItem('loggedInUsergmail');
console.log(gmail);
function myNavigation() {
    currentState = true;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cross').style.display = 'block';
    document.getElementById('nav-menu').style.display = 'block';
    signinMobA.style.display = gmail ? 'none' : 'block';
    signupMobA.style.display = gmail ? 'none' : 'block';
    logoutMobA.style.display = gmail ? 'block' : 'none';

}
function myCross() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('cross').style.display = 'none';
    document.getElementById('nav-menu').style.display = 'none';

}

function showBox() {
    document.getElementById('box').style.display = 'block';
    signinA.style.display = gmail ? 'none' : 'block';
    signupA.style.display = gmail ? 'none' : 'block';
    logoutA.style.display = gmail ? 'block' : 'none';
    eventOccur();
}

function show() {
    //console.log("button clicked");
    localStorage.removeItem('loggedInUsergmail');
    signinA.style.display = 'block';
    signupA.style.display = 'block';
    logoutA.style.display = 'none';
    console.log(gmail);
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
