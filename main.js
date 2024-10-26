function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}

function signup() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorMessage = document.getElementById("error-message");

    // Clear previous error messages and border styles
    errorMessage.textContent = ""; // Clear previous message
    [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => input.classList.remove("error-border"));

    // Validation checks
    if (!usernameInput.value.trim()) {
        errorMessage.textContent = "Please enter a username";
        usernameInput.classList.add("error-border");
        return;
    }

    if (!emailInput.value.trim()) {
        errorMessage.textContent = "Please enter an email";
        emailInput.classList.add("error-border");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        errorMessage.textContent = "Please enter a valid email";
        emailInput.classList.add("error-border");
        return;
    }

    if (!passwordInput.value) {
        errorMessage.textContent = "Please enter a password";
        passwordInput.classList.add("error-border");
        return;
    }

    if (passwordInput.value.length < 8) {
        errorMessage.textContent = "Password should be at least 8 characters long";
        passwordInput.classList.add("error-border");
        return;
    }

    if (!confirmPasswordInput.value) {
        errorMessage.textContent = "Please confirm your password";
        confirmPasswordInput.classList.add("error-border");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.textContent = "Passwords do not match 😓";
        confirmPasswordInput.classList.add("error-border");
        return;
    }

    // Success: Show alert and redirect
    alert("Signup successful 🎉\nWelcome aboard!");
    window.location.href = "main.html"; 
}
