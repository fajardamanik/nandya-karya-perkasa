const navbarHTML = `
<nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold tracking-tighter text-blue-900">
            NANDYA <span class="text-red-600">KARYA</span>
        </div>

        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-blue-900 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 flex flex-col space-y-4 px-6 py-6 font-medium shadow-lg">
        <a href="index.html" class="hover:text-red-600 transition">Home</a>
        <a href="about.html" class="hover:text-red-600 transition">About</a>
        <a href="product.html" class="hover:text-red-600 transition">Product</a>
        <a href="facilities.html" class="hover:text-red-600 transition">Facilities</a>
        <a href="contact.html" class="text-blue-900 font-bold transition">Contact Us</a>
    </div>
</nav>`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// Script to handle the toggle logic
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});







menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
});


