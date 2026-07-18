const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }
    else{

        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});

/* ================= HAMBURGER MENU ================= */

const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");
const navOverlay = document.getElementById("nav-overlay");

function closeMenu(){
    navLinks.classList.remove("show");
    hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    navOverlay.classList.remove("show");
}

function openMenu(){
    navLinks.classList.add("show");
    hamburgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    navOverlay.classList.add("show");
}

if(hamburgerBtn){

    hamburgerBtn.addEventListener("click", () => {

        if(navLinks.classList.contains("show")){
            closeMenu();
        } else {
            openMenu();
        }

    });

}

// close the menu when a nav link is tapped
if(navLinks){
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

// close the menu when tapping outside of it
if(navOverlay){
    navOverlay.addEventListener("click", closeMenu);
}

// close the menu automatically if the screen is resized back to desktop
window.addEventListener("resize", () => {
    if(window.innerWidth > 1024){
        closeMenu();
    }
});

/* ================= COPY EMAIL ================= */

const copyBtn = document.getElementById("copy-email-btn");
const emailCard = document.getElementById("email-card");
const copyTooltip = document.getElementById("copy-tooltip");

if(copyBtn){

    copyBtn.addEventListener("click", (e) => {

        // prevent the mailto link from opening when copying
        e.preventDefault();
        e.stopPropagation();

        const email = "krithikaananth2603@gmail.com";

        navigator.clipboard.writeText(email).then(() => {

            copyTooltip.classList.add("show");
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

            setTimeout(() => {
                copyTooltip.classList.remove("show");
                copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
            }, 1800);

        });

    });

}
/* ================= SCROLL REVEAL ANIMATIONS ================= */

const revealEls = document.querySelectorAll(".reveal");

if("IntersectionObserver" in window && revealEls.length){

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold:0.15,
        rootMargin:"0px 0px -60px 0px"
    });

    revealEls.forEach(el => revealObserver.observe(el));

} else {

    // fallback: just show everything if IntersectionObserver isn't supported
    revealEls.forEach(el => el.classList.add("in-view"));

}
