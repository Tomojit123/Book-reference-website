function showAlert(title,text,email) {
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        localStorage.setItem('loggedInUserEmail', email);
        window.location.href = "https://tomojit123.github.io/Book-reference-website/Pages/index.html"
    })
}

const showSuccessToast = (title,result,color) => {
    Swal.fire({
        icon: result,
        title: title,
        toast: true,
        iconColor:color,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true
    })
};

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    try {
        if (loginForm) {
            loginForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                fetch("https://book-app-backend-1.onrender.com/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error("response is not ok");
                    }
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    if (data.success) {
                        const title = "Login Successfully";
                        const text = "Login Successfully";
                        showAlert(title,text,email);
                    }
                    else {
                        alert(data.message);
                    }
                })
            })
        }
    }
    catch (error) {
        console.log("unknown server error");
    }

    const registerForm = document.querySelector(".registration-form");

    try {
        if (registerForm) {
            registerForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const userName = document.getElementById("userName").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;

                fetch("https://book-app-backend-1.onrender.com/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userName, email, password }),
                }).then((response) => {
                    if (!response.ok) {
                        throw new error("Responst is not OK");
                    }
                    return response.json();
                }).then((data) => {
                    if (data.success) {
                        const title = "Registration Successfully";
                        const text = "Registration Successfully";

                        showAlert(title,text);
                    }
                    else {
                        alert(data.message);
                    }
                })
            })
        }
    }
    catch (error) {
        console.log("Unknown server error");
    }

    const forgetPasswordForm = document.querySelector(".forget-form");
    try {
        if (forgetPasswordForm) {
            forgetPasswordForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                console.log(email);
                console.log(password);
                const confirmPassword = document.getElementById("confirm-password").value;
                if (password !== confirmPassword) {
                    const result = 'error';
                    const title = 'Password mismatched';
                    const color = 'red';
                    showSuccessToast(result,title,color);
                    return;
                }

                fetch("https://book-app-backend-1.onrender.com/forget-password", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error("response is not ok");
                    }
                    return response.json();
                }).then((data) => {
                    if (data.success && data.message === "same") {
                        const result = 'error';
                        const title = "It's your last password";
                        const color = 'red';
                        showSuccessToast(result,title,color);
                    }
                    else if (data.success) {
                        const title = "Password changed successfully";
                        const result = 'error';
                        const color = 'green';
                        showSuccessToast(result,title,color);
                        window.location.href = "https://tomojit123.github.io/Book-reference-website/Components/login.html/";
                    }
                    else {
                        alert(data.message);
                    }
                })
            })
        }
    }
    catch (error) {
        console.log(error);
    }
})