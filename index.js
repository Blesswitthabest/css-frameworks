document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const learnMoreBtn = document.querySelector('a[href="#about"]');
    const signUpBtn = document.querySelector('a[href="#contact"]');

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            console.log("Learn More clicked");
        });
    }

    if (signUpBtn) {
        signUpBtn.addEventListener("click", function () {
            console.log("Sign Up clicked");
        });
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || email === "") {
                alert("Please fill out your name and email.");
                return;
            }

            alert("Thanks for signing up, " + name + "!");
            form.reset();
        });
    }
});// Add JavaScript below
