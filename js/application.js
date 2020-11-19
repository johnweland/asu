const toggle = document.getElementById('themeToggle');

const toggleTheme = () => {
    const lightBackgrounds = document.querySelectorAll('.bg-light');
    const darkBackgrounds = document.querySelectorAll('.bg-dark');
    const lightText = document.querySelectorAll('.text-light');
    const darkText = document.querySelectorAll('.text-dark');
    const navLight = document.querySelector('.navbar-light');
    const navDark = document.querySelector('.navbar-dark');
    const borderLight = document.querySelectorAll('.border-light');
    const borderDark = document.querySelectorAll('.border-dark');

    if (lightBackgrounds.length) {
        lightBackgrounds.forEach(background => {
            background.classList.remove('bg-light');
            background.classList.add('bg-dark');            
        });
    }

    if (lightText.length) {
        lightText.forEach(text => {
            text.classList.remove('text-light');
            text.classList.add('text-dark');            
        });
    }

    if (darkBackgrounds.length) {
        darkBackgrounds.forEach(background => {
            background.classList.remove('bg-dark');
            background.classList.add('bg-light');            
        });
    }

    if (darkText.length) {
        darkText.forEach(text => {
            text.classList.remove('text-dark');
            text.classList.add('text-light');            
        });
    }

    if (navLight) {
        navLight.classList.remove('navbar-light');
        navLight.classList.add('navbar-dark');            
    }

    if (navDark) {
        navDark.classList.remove('navbar-dark');
        navDark.classList.add('navbar-light');            
    }
    if (borderLight.length) {
        borderLight.forEach(border => {
            border.classList.remove('border-light');
            border.classList.add('border-dark');   
        });          
    }

    if (borderDark.length) {
        borderDark.forEach(border => {
            border.classList.remove('border-dark');
            border.classList.add('border-light');   
        });             
    }
}

toggle.addEventListener("click", toggleTheme);


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("../sw.js")
        .catch((err) => console.error(`Service Worker: Error: ${err}`));
    });
}