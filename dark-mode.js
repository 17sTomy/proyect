const btnDark = document.querySelector('.btn-dark-mode');

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode");
  btnDark.innerHTML = `<i class="far fa-sun"></i> Light Mode`;
  localStorage.setItem("theme", "dark");
} else {
  document.body.classList.remove("dark-mode");
  btnDark.innerHTML = `<i class="far fa-moon"></i> Dark Mode`
  localStorage.setItem("theme", "light");
}


const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.add("dark-mode");
    btnDark.innerHTML = `<i class="far fa-sun"></i> Light Mode`;
}

btnDark.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains('dark-mode')){
        btnDark.innerHTML = `<i class="far fa-sun"></i> Light Mode`;
        theme = "dark";
        localStorage.setItem("theme", theme);
    }else{
        btnDark.innerHTML = `<i class="far fa-moon"></i> Dark Mode`
        let theme = "light";
        localStorage.setItem("theme", theme);
    }
})


