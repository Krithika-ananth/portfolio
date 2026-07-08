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