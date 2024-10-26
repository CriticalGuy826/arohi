function signup() {
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!username) {
        errorMessage.textContent = "Please enter username";
        return;
    }

    if (!email) {
        errorMessage.textContent = "Please enter email";
        return;
    }

    if (!password) {
        errorMessage.textContent = "Please enter password";
        return;
    }

    if (!confirmPassword) {
        errorMessage.textContent = "Please confirm password";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.. 😓";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "Password should be at least 8 characters long";
        return;
    }

    alert("Signup successful\nSomeone's looking excited to see a doctor!👀");
    window.location.href = "main.html"; 
}
