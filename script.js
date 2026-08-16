function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let btn = document.getElementById("theme-btn");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Passer au thème clair";
    } else {
        btn.textContent = "Passer au thème sombre";
    }
}