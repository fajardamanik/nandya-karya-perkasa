const navbarHTML = `
<nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold tracking-tighter text-blue-900">
            NANDYA <span class="text-red-600">KARYA</span>
        </div>
        <div class="hidden md:flex space-x-8 font-medium">
            <a href="index.html" class="hover:text-red-600 transition">Home</a>
            <a href="about.html" class="hover:text-red-600 transition">About</a>
            <a href="product.html" class="hover:text-red-600 transition">Product</a>
            <a href="facilities.html" class="hover:text-red-600 transition">Facilities</a>
            <a href="contact.html" class="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">Contact Us</a>
        </div>
    </div>
</nav>`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);