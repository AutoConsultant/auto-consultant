// BOTÓN 1 — ¿Porqué nosotros?
document.getElementById('btn-porque').addEventListener('click', () => {
    const menu = document.getElementById('menu-porque');

    // Alternar visibilidad
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});


// BOTÓN 3 — A qué nos dedicamos
document.getElementById('btn-dedicamos').addEventListener('click', () => {
    const menu = document.getElementById('menu-dedicamos');

    // Alternar visibilidad
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
