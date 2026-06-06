// Función para cerrar todos los menús
function cerrarTodos() {
    document.getElementById('menu-porque').style.display = "none";
    document.getElementById('menu-dedicamos').style.display = "none";
}

// BOTÓN 1 — ¿Porqué nosotros?
document.getElementById('btn-porque').addEventListener('click', () => {
    const menu = document.getElementById('menu-porque');

    // Si está abierto, ciérralo
    if (menu.style.display === "block") {
        menu.style.display = "none";
        return;
    }

    // Cierra los demás y abre este
    cerrarTodos();
    menu.style.display = "block";
});


// BOTÓN 2 — A qué nos dedicamos
document.getElementById('btn-dedicamos').addEventListener('click', () => {
    const menu = document.getElementById('menu-dedicamos');

    // Si está abierto, ciérralo
    if (menu.style.display === "block") {
        menu.style.display = "none";
        return;
    }

    // Cierra los demás y abre este
    cerrarTodos();
    menu.style.display = "block";
});
