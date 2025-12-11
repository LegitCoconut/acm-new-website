// Smart Navbar Logic
(function() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 15;

    if (!navbar) {
        console.error('Navbar element not found!');
        return;
    }

    console.log('Navbar Smart Scroll Initialized');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Mobile bounce protection
        if (currentScrollY < 0) return;

        // Always show if at very top
        if (currentScrollY < 10) {
            navbar.classList.remove('navbar-hidden');
            lastScrollY = currentScrollY;
            return;
        }

        // Determine Direction
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            // SCROLLING DOWN -> HIDE
            if (!navbar.classList.contains('navbar-hidden')) {
                navbar.classList.add('navbar-hidden');
            }
        } else if (currentScrollY < lastScrollY) {
            // SCROLLING UP -> SHOW
            if (navbar.classList.contains('navbar-hidden')) {
                navbar.classList.remove('navbar-hidden');
            }
        }

        lastScrollY = currentScrollY;
    });
})();
