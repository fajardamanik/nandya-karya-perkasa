const navbarHTML = `
<nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold tracking-tighter text-blue-900">
            NANDYA <span class="text-red-600">KARYA</span>
        </div>

        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-blue-900 focus:outline-none">
                <svg id="menu-icon" class="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div class="hidden md:flex space-x-8 font-medium">
            <a href="index.html" class="hover:text-red-600 transition">Home</a>
            <a href="about.html" class="hover:text-red-600 transition">About</a>
            <a href="product.html" class="hover:text-red-600 transition">Product</a>
            <a href="facilities.html" class="hover:text-red-600 transition">Facilities</a>
            <a href="contact.html" class="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">Contact Us</a>
        </div>
    </div>

    <div id="mobile-menu" class="md:hidden overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 bg-white border-t border-gray-100 shadow-lg">
        <div class="flex flex-col space-y-4 px-6 py-6 font-medium">
            <a href="index.html" class="hover:text-red-600 transition">Home</a>
            <a href="about.html" class="hover:text-red-600 transition">About</a>
            <a href="product.html" class="hover:text-red-600 transition">Product</a>
            <a href="facilities.html" class="hover:text-red-600 transition">Facilities</a>
            <a href="contact.html" class="text-blue-900 font-bold">Contact Us</a>
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
