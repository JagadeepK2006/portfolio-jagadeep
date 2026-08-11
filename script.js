/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

// Page loaded message
console.log("Jagadeep's Portfolio Loaded Successfully!");


// =========================================
// ACTIVE NAVIGATION LINK
// =========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .internship-card, .certificate-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {

    observer.observe(element);

});


// =========================================
// CONTACT MESSAGE
// =========================================

const contactLinks = document.querySelectorAll("#contact a");

contactLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log("Contact link clicked");

    });

});


// =========================================
// CURRENT YEAR IN FOOTER
// =========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Jagadeep. All Rights Reserved.`;

}
// =========================================
// TYPING ANIMATION
// =========================================

const typingText = document.getElementById("typing-text");

const roles = [
    "AI/ML Student",
    "Full Stack Developer",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();