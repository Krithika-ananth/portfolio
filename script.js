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