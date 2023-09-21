import LoginModule from "../modules/LoginModule.js";

function login() {
    let username = document.getElementById("login-uid").value;
    let password = document.getElementById("login-pwd").value;
    // Martin: check if username and password written is the same as username and password from the LoginModule. Username is not case sensitive
    if (username.toLowerCase() == LoginModule.getLoginInfo().username.toLowerCase() && password == LoginModule.getLoginInfo().password) {
        // Martin: successfully logged in. Redirecting
        window.location.assign("landingpage.html");
    } else {
        // Martin: username and/or password was incorrect
        document.getElementById("login-btn").classList.remove("is-success");
        document.getElementById("login-btn").classList.add("is-danger");
    }
}

document.getElementById("login-btn").addEventListener("click", function() {
    login();
});
document.getElementById("login-uid").addEventListener("keydown", function() {
    if (event.keyCode == 13) { // Martin: try to login if user press ENTER
        login();
    }
});
document.getElementById("login-pwd").addEventListener("keydown", function() {
    if (event.keyCode == 13) { // Martin: try to login if user press ENTER
        login();
    }
});

// Martin: auto focus on input field, so you don't need to click it
document.getElementById("login-uid").focus();