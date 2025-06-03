document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger");
        const toggles = document.querySelectorAll(".toggle-item");

        hamburger.addEventListener("click", function () {
            toggles.forEach(el => el.classList.toggle("active"));
        });
    });