// Menú móvil del NavMenu. Se escucha en document para que siga funcionando
// después de la navegación mejorada de Blazor, que reemplaza el HTML del header.
document.addEventListener('click', (e) => {
    const header = e.target.closest('.bz-navbar');
    if (!header) return;

    const burger = e.target.closest('.bz-navbar__burger');
    if (burger) {
        const open = header.classList.toggle('bz-navbar--open');
        burger.setAttribute('aria-expanded', open);
        burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    } else if (e.target.closest('a')) {
        header.classList.remove('bz-navbar--open');
        header.querySelector('.bz-navbar__burger')?.setAttribute('aria-expanded', 'false');
        header.querySelector('.bz-navbar__burger')?.setAttribute('aria-label', 'Abrir menú');
    }
});
