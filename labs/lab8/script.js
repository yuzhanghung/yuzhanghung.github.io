function toggleTheme(){
    let bodyDarkmode = document.body;
    bodyDarkmode.classList.toggle("dark-mode");
}

let darkBottom = document.getElementById("toggleButton");
darkBottom.onclick = toggleTheme;