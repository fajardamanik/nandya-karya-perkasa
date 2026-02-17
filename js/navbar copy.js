const navbarHTML = `
<nav class="fixed w-full z-50 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center">
<a href="index.html" class="flex items-center gap-3">
    <img src="logonkp-color.svg" alt="NKP Logo" class="logoImg h-12 w-auto object-contain transition-opacity duration-300">
    
    <div class="hidden sm:flex flex-col justify-between h-12 py-0.5 uppercase">
        <div class="logo-text text-[2.1rem] font-black leading-none tracking-tighter transition-colors">
            NANDYA
        </div>
        <div class="karya-red text-[0.75rem] font-bold leading-none tracking-[0.22em] transition-colors">
            KARYA <span class="logo-text transition-colors">PERKASA</span>
        </div>
    </div>
</a>
        </div>

        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-blue-900 focus:outline-none">
                <svg id="menu-icon" class="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div class="hidden md:flex space-x-8 font-medium">
            <a href="index.html" class="nav-link transition-colors hover:text-red-600 transition">Home</a>
            <a href="about.html" class="nav-link transition-colors hover:text-red-600 transition">About</a>
            <a href="product.html" class="nav-link transition-colors hover:text-red-600 transition">Product</a>
            <a href="facilities.html" class="nav-link transition-colors hover:text-red-600 transition">Facilities</a>
            <a href="contact.html" class="nav-link transition-colors hover:text-red-600 transition">Contact Us</a>
        </div>
    </div>

    <div id="mobile-menu" class="md:hidden overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 bg-white border-t border-gray-100 shadow-lg">
        <div class="flex flex-col space-y-4 px-6 py-6 font-medium">
            <a href="index.html" class="hover:text-red-600 transition">Home</a>
            <a href="about.html" class="hover:text-red-600 transition">About</a>
            <a href="product.html" class="hover:text-red-600 transition">Product</a>
            <a href="facilities.html" class="hover:text-red-600 transition">Facilities</a>
            <a href="contact.html" class="hover:text-red-600 transition">Contact Us</a>
        </div>
    </div>



</nav>`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// 1. Get Elements (Only once!)
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('menu-icon');

// 2. Helper functions
const closeMenu = () => {
    menu.classList.replace('max-h-96', 'max-h-0');
    menu.classList.replace('opacity-100', 'opacity-0');
    icon.classList.remove('rotate-90');
};

const openMenu = () => {
    menu.classList.replace('max-h-0', 'max-h-96');
    menu.classList.replace('opacity-0', 'opacity-100');
    icon.classList.add('rotate-90');
};

// 3. Event Listeners
btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('max-h-96');
    isOpen ? closeMenu() : openMenu();
});

window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        closeMenu();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// 4. Highlight Active Page
const currentPath = window.location.pathname.split("/").pop() || "index.html";

const allLinks = document.querySelectorAll('nav a');

allLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentPath) {
        // Remove default colors first
        link.classList.remove('text-blue-900', 'hover:text-red-600');
        
        // Add yellow highlight classes
        link.classList.add('text-yellow-500', 'font-bold');
        
        // Optional: If it's the "Contact Us" button, you might want a yellow background instead
        if (link.classList.contains('bg-blue-900')) {
            link.classList.replace('bg-blue-900', 'bg-yellow-500');
            link.classList.replace('text-white', 'text-black');
        }
    }
});





document.addEventListener('DOMContentLoaded', () => {
    // Select the logo image element
    const logoImg = document.querySelector('.logoImg'); 
    const navLinks = document.querySelectorAll('.nav-link');
    const logoTexts = document.querySelectorAll('.logo-text');
    const karyaText = document.querySelector('.karya-red');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -90% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme');
                
                if (theme === 'dark') {
                    applyStyles('text-white', 'text-blue-900', 'text-white', 'text-red-600');
                    // Check if logoImg exists before changing src
                    if(logoImg) logoImg.src = 'logonkp-white.svg';
                } else {
                    applyStyles('text-blue-900', 'text-white', 'text-red-600', 'text-white');
                    if(logoImg) logoImg.src = 'logonkp-color.svg';
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    function applyStyles(mainColor, oldMain, karyaColor, oldKarya) {
        logoTexts.forEach(el => {
            el.classList.add(mainColor);
            el.classList.remove(oldMain);
        });

        navLinks.forEach(link => {
            // Important: Don't change color if it's the active yellow link
            if (!link.classList.contains('text-yellow-500')) {
                link.classList.add(mainColor);
                link.classList.remove(oldMain);
            }
        });

        if (karyaText) {
            karyaText.classList.add(karyaColor);
            karyaText.classList.remove(oldKarya);
        }
    }
});