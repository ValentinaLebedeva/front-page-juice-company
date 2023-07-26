/* opening/closing mobile menu */

const mobileMenu = document.querySelector(".mobile-nav-wrapper");
const mobileNav = document.querySelector(".mobile-nav");

document.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    if (e.target == mobileMenu) {
        mobileNav.classList.toggle("mobile-nav--active");
        console.log("yes")
    }

    if (e.target != mobileMenu && e.target != mobileNav) {
        if (mobileNav.classList.contains("mobile-nav--active")) {
            mobileNav.classList.remove("mobile-nav--active");
        }
    }
}

