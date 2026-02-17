/**
 * Infinite Logo Marquee Component
 * PT. Nandya Karya Perkasa
 */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Centralized list of your customer logos
    const logos = [
        '01.AstraHondaMotor.png',
'02.Kawasaki.jpg',
'03.MesinIsuzuIndonesia.jpg',
'04.YasunliAbadiUtamaPlastik.jpg',
'05.HondaTradingIndonesia.jpeg',
'06.AstraKomponenIndonesia.png',
'07.YutakaManufacturingIndonesia.jpeg',
'08.IndonesiaStanleyElectric.jpg',
'09.HondaProspectMotor.jpeg',
'10.Suzuki.jpeg',
'11.MeiwaIndonesia.jpg',
'12.IndonesiaKoito.jpg',
'13.ChemcoHarapanNusantara.jpeg',
'14.AstraOtopart.jpg',
'15.VelastoIndonesia.jpg',
'16.Dynaplast.jpg',
'18.WikaIndustriManufacture.jpg',
'19.WIKAIndustriKonstruksi.jpg',
'20.TakagiSariMultiUtama.jpg',
'21.intiGandaPerdana.jpeg',
'22.IntiPancaPressIndustri.jpg',
'23.Hamatetsu.jpg',
'24.GalihSekarSakti.jpg',
'25.CikarangPerkasaManufacture.jpeg',
'26.InseraSena.jpg',
'27.DharmaControlcableIndonesia.jpeg',
'28.HondaPowerProductsIndonesia.jpg',
'29.Ansei.jpeg',
'30.TokaiRikaIndonesia.jpeg',
'31.APMArmadaAutopart.jpg',
'32.AstraJuokuIndonesia.jpg',
'34.SakaiIndonesia.jpg',
'35.PanasonicManufactureIndonesia.jpeg',
'36.Paramountbed.jpeg',
'37.Wooinstarion.jpg',
    ];

    const folderPath = 'img/customer_logo/';
    const container = document.getElementById('marquee-inner');

    // Safety check: only run if the element exists on the current page
    if (!container) return;

    // 2. Generate the HTML for one set
    const logoHTML = logos.map(logo => `
        <div class="mx-12 shrink-0">
            <img src="${folderPath}${logo}" 
                 alt="Customer Logo" 
                 class="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500">
        </div>
    `).join('');

    // 3. Inject it twice to create the seamless loop
    container.innerHTML = logoHTML + logoHTML;
});