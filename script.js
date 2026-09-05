// ==============================
// GK RESTAURANT - JAVASCRIPT
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

})