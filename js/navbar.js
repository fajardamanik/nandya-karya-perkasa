const navbarHTML = `
<nav class="fixed w-full z-50 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center">
            <a href="index.html" class="flex items-center gap-3">
                <img src="logonkp-color.svg" alt="NKP Logo" class="logoImg h-12 w-auto object-contain transition-opacity duration-300">
                <div class="hidden sm:flex flex-col justify-between h-12 py-0.5 uppercase">
                    <div class="logo-text text-[2.1rem] font-black leading-none tracking-tighter transition-colors">NANDYA</div>
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

        <div class="hidden md:flex items-center space-x-8 font-medium">
            <a href="index.html" class="nav-link transition-colors hover:text-red-600" data-i18n="nav_home">Home</a>
            <a href="about.html" class="nav-link transition-colors hover:text-red-600" data-i18n="nav_about">About</a>
            <a href="product.html" class="nav-link transition-colors hover:text-red-600" data-i18n="nav_product">Product</a>
            <a href="facilities.html" class="nav-link transition-colors hover:text-red-600" data-i18n="nav_facilities">Facilities</a>
            <a href="contact.html" class="nav-link transition-colors hover:text-red-600" data-i18n="nav_contact">Contact Us</a>
            
<div id="lang-container" class="flex items-center gap-2">
    <button data-lang="id" class="lang-btn rounded-[2rem] py-1 text-sm border-0 text-blue-900 transition-all duration-200 flex items-center gap-2">
        <span>ID</span>
        <svg class="lang-flag hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip_id)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"></path><path d="M0 8.00003C0 3.58175 3.58175 0 8 0C12.4183 0 16 3.58175 16 8.00003" fill="#D80027"></path></g>
            <defs><clipPath id="clip_id"><rect width="16" height="16" fill="white"></rect></clipPath></defs>
        </svg>
    </button>

    <button data-lang="en" class="lang-btn active-lang rounded-[2rem] py-1 text-sm border border-blue-900 text-blue-900 transition-all duration-200 flex items-center gap-2 pl-3 pr-2 md:pr-3 md:pl-4">
        <span class="font-bold">EN</span>
        <svg class="lang-flag" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <mask id="mask_circle" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><circle cx="8" cy="8" r="8" fill="white" /></mask>
            <g mask="url(#mask_circle)">
                <path d="M0 0H16V16H0V0Z" fill="#00247D" /><path d="M16 0L0 16M0 0L16 16" stroke="white" stroke-width="2" /><path d="M16 0L0 16M0 0L16 16" stroke="#CF142B" stroke-width="1.2" /><path d="M8 0V16M0 8H16" stroke="white" stroke-width="3" /><path d="M8 0V16M0 8H16" stroke="#CF142B" stroke-width="2" />
            </g>
        </svg>
    </button>
</div>
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

// --- GLOBAL STATE & FUNCTIONS ---
let translations = {};

function updateLanguage(lang) {
    console.log("--- updateLanguage Called ---");
    console.log("Target Language:", lang);
    
    if (!translations[lang]) {
        console.error("ERROR: Translation data for '" + lang + "' is missing!", translations);
        return;
    }

    const elements = document.querySelectorAll('[data-i18n]');
    console.log("Found " + elements.length + " elements to translate.");

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translatedText = translations[lang][key];
        
        if (translatedText) {
            console.log("Translating [" + key + "] -> " + translatedText);
            el.textContent = translatedText;
        } else {
            console.warn("WARN: No translation found for key: '" + key + "' in language: '" + lang + "'");
        }
    });
    localStorage.setItem('preferredLang', lang);
}

function updateButtonUI(activeBtn) {
    console.log("Updating Button UI for:", activeBtn.getAttribute('data-lang'));
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(b => {
        b.classList.remove('active-lang', 'border', 'pl-3', 'pr-2', 'md:pr-3', 'md:pl-4');
        b.classList.add('border-0');
        b.querySelector('span').classList.remove('font-bold');
        b.querySelector('.lang-flag').classList.add('hidden');
    });

    activeBtn.classList.add('active-lang', 'border', 'pl-3', 'pr-2', 'md:pr-3', 'md:pl-4');
    activeBtn.classList.remove('border-0');
    activeBtn.querySelector('span').classList.add('font-bold');
    activeBtn.querySelector('.lang-flag').classList.remove('hidden');
}

// --- FETCH DATA ---
console.log("Attempting to fetch translations.json...");
fetch('json/translations.json')
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok: " + response.statusText);
        return response.json();
    })
    .then(data => {
        console.log("SUCCESS: translations.json loaded.", data);
        translations = data;
        const savedLang = localStorage.getItem('preferredLang') || 'en';
        console.log("Initial Language to load:", savedLang);
        updateLanguage(savedLang);
        
        const targetBtn = document.querySelector(`[data-lang="${savedLang}"]`);
        if (targetBtn) {
            updateButtonUI(targetBtn);
        } else {
            console.error("ERROR: Could not find button for lang: " + savedLang);
        }
    })
    .catch(err => {
        console.error("FATAL FETCH ERROR:", err);
        console.log("Check if 'json/translations.json' exists and is valid JSON.");
    });

// --- DOM CONTENT LOADED ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded.");
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const logoImg = document.querySelector('.logoImg');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoTexts = document.querySelectorAll('.logo-text');
    const karyaText = document.querySelector('.karya-red');
    const langBtns = document.querySelectorAll('.lang-btn');

    // Mobile Menu Logic
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

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.contains('max-h-96') ? closeMenu() : openMenu();
    });

    window.addEventListener('click', (e) => { 
        if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu(); 
    });

    // Language Button Click Listeners
    langBtns.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            console.log("User clicked language button:", selectedLang);
            updateButtonUI(button);
            updateLanguage(selectedLang);
            window.dispatchEvent(new Event('scroll')); 
        });
    });

    // Theme Observer Logic
    const applyStyles = (mainColor, oldMain, karyaColor, oldKarya, borderColor) => {
        logoTexts.forEach(el => { el.classList.add(mainColor); el.classList.remove(oldMain); });
        navLinks.forEach(link => {
            if (!link.classList.contains('text-yellow-500')) {
                link.classList.add(mainColor); link.classList.remove(oldMain);
            }
        });
        if (karyaText) { karyaText.classList.add(karyaColor); karyaText.classList.remove(oldKarya); }
        
        langBtns.forEach(b => {
            b.classList.add(mainColor); b.classList.remove(oldMain);
            if (b.classList.contains('active-lang')) {
                b.classList.remove('border-white', 'border-blue-900');
                b.classList.add(borderColor);
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute('data-theme');
                if (theme === 'dark') {
                    applyStyles('text-white', 'text-blue-900', 'text-white', 'text-red-600', 'border-white');
                    if(logoImg) logoImg.src = 'logonkp-white.svg';
                } else {
                    applyStyles('text-blue-900', 'text-white', 'text-red-600', 'text-white', 'border-blue-900');
                    if(logoImg) logoImg.src = 'logonkp-color.svg';
                }
            }
        });
    }, { rootMargin: '0px 0px -90% 0px' });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    if (Object.keys(translations).length > 0) {
        updateLanguage(localStorage.getItem('preferredLang') || 'en');
    }
});