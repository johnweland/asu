const toggle = document.getElementById('themeToggle');
const listings = document.getElementById('producttable');
import data from './data.js';

const toggleTheme = () => {
    const lightBackgrounds = document.querySelectorAll('.bg-light');
    const darkBackgrounds = document.querySelectorAll('.bg-dark');
    const lightText = document.querySelectorAll('.text-light');
    const darkText = document.querySelectorAll('.text-dark');
    const navLight = document.querySelector('.navbar-light');
    const navDark = document.querySelector('.navbar-dark');
    const borderLight = document.querySelectorAll('.border-light');
    const borderDark = document.querySelectorAll('.border-dark');
    const lightTables = document.querySelectorAll('.table-light');
    const darkTables = document.querySelectorAll('.table-dark');

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

    if (lightTables.length) {
        lightTables.forEach(table => {
            table.classList.remove('table-light');
            table.classList.add('table-dark');   
        });          
    }

    if (darkTables.length) {
        darkTables.forEach(table => {
            table.classList.remove('table-dark');
            table.classList.add('table-light');   
        });             
    }
}

toggle.addEventListener("click", toggleTheme);

if ('content' in document.createElement('template')) {

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const tbody = document.querySelector("tbody");
    const template = document.querySelector('#productrow');
    if (listings) {
        data.forEach(item => {
            let clone = template.content.cloneNode(true);
            let td = clone.querySelectorAll("td");
            let img = document.createElement("img");
            img.src = item.img;
            img.className= "img-thumbnail";
            img.alt = `${item.count} - ${item.desc}`;
            td[0].appendChild(img);
            td[1].textContent = item.desc;
            td[2].textContent = item.count;
            td[3].textContent = item.price;
            tbody.appendChild(clone);
        });
    }

} else {
  // Find another way to add the rows to the table because 
  // the HTML template element is not supported.
}


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("../sw.js")
        .catch((err) => console.error(`Service Worker: Error: ${err}`));
    });
}

