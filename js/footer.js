const footerHTML = `
<footer class="bg-blue-900 text-white py-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
            <div class="text-2xl font-bold tracking-tighter mb-2">NANDYA <span class="text-red-500">KARYA</span></div>
            <p class="text-gray-400 text-sm">© 2026 PT. Nandya Karya Perkasa. All Rights Reserved.</p>
        </div>
        <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition text-xl"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" class="text-gray-400 hover:text-white transition text-xl"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="text-gray-400 hover:text-white transition text-xl"><i class="fa-solid fa-globe"></i></a>
        </div>
    </div>
</footer>`;

document.body.insertAdjacentHTML('beforeend', footerHTML);