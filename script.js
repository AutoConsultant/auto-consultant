// Toggle de menús desplegables
function toggleMenu(btnId, menuId) {
    const btn  = document.getElementById(btnId);
    const menu = document.getElementById(menuId);

    const isOpen = menu.style.display === "block";

    // Cerrar todos primero
    document.querySelectorAll('.hidden-menu').forEach(m => m.style.display = "none");
    document.querySelectorAll('.box[aria-expanded]').forEach(b => b.setAttribute('aria-expanded', 'false'));

    // Si no estaba abierto, abrir este
    if (!isOpen) {
        menu.style.display = "block";
        btn.setAttribute('aria-expanded', 'true');
    }
}

document.getElementById('btn-porque').addEventListener('click', () => {
    toggleMenu('btn-porque', 'menu-porque');
});

document.getElementById('btn-dedicamos').addEventListener('click', () => {
    toggleMenu('btn-dedicamos', 'menu-dedicamos');
});

// Cerrar menús al hacer click fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.box-group')) {
        document.querySelectorAll('.hidden-menu').forEach(m => m.style.display = "none");
        document.querySelectorAll('.box[aria-expanded]').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
});
