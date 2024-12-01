const beach = document.querySelector('.navbar-nav .nav-item:nth-child(2)');
const home = document.querySelector('.navbar-nav .nav-item:first-child');
const maps = document.querySelector('.navbar-nav .nav-item:nth-child(3)');
const explore = document.querySelector('header .btn')
beach.addEventListener('click', (e) => {
    e.preventDefault();
    const beachPage = document.getElementById('pantai');
    beachPage.scrollIntoView({ behavior: 'smooth' });
});

home.addEventListener('click', (e) => {
    e.preventDefault();
    const homePage = document.querySelector('header');
    homePage.scrollIntoView({ behavior: 'smooth' });
});

maps.addEventListener('click', (e) => {
    e.preventDefault();
    const mapsPage = document.getElementById('balekambang');
    mapsPage.scrollIntoView({ behavior: 'smooth' });
});

explore.addEventListener('click', (e) => {
    e.preventDefault();
    const explorePage = document.getElementById('pantai');
    explorePage.scrollIntoView({ behavior: 'smooth' });
});


const balekambangCard = document.querySelector('#pantai .container .card');
balekambangCard.addEventListener('dblclick', (e) => {
    e.preventDefault();
    const balekambangMap = document.getElementById('balekambang');
    balekambangMap.scrollIntoView({ behavior: 'smooth' });
});


// jumlah gambar
let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const next = document.querySelector('.fa-circle-chevron-right');
const prev = document.querySelector('.fa-circle-chevron-left');
// total slide/gambar
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
}

updateSlides();

// Event listener untuk tombol next
next.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
});

// Event listener untuk tombol prev
prev.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
});

updateSlides();



// // index yang aktif
// let currentIndex = 0;
// const slides = document.querySelectorAll('.slider img');
// // menghitung jumlah slide
// const totalSlides = slides.length;

// // fungsi untuk menampilkan slide berdasarkan index yang aktif
// function showSlides() {
//     slides.forEach((slide, i) => {
//         // menghilangkan gambar dan hapus kelas aktif dari semua gambar
//         slide.style.display = 'none';
//         slide.classList.remove('active');
//         if (i === currentIndex) {
//             // tampilkan gambar yang aktif
//             slide.style.display = 'block';
//             // tambahkan kelas aktif
//             slide.classList.add('active');
//         }
//     });
// }

// // panggil fungsi
// showSlides();

// // event listener untuk tombol next
// document.querySelector('.fa-circle-chevron-right').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     showSlides();
// });

// // event listener untuk tombol prev
// document.querySelector('.fa-circle-chevron-left').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     showSlides();
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const map = document.getElementById('map-container');
//     const iframe = document.getElementById('google-map');

//     // Periksa apakah pengguna sudah menyetujui
//     if (!localStorage.getItem("cookiesAccepted")) {
//         banner.style.display = "block";
//     } else {
//         loadMap();
//     }

//     // Ketika pengguna menyetujui cookies
//     document.getElementById("accept-cookies").onclick = function () {
//         localStorage.setItem("cookiesAccepted", "true");
//         banner.style.display = "none";
//         loadMap();
//     };

//     // Fungsi untuk memuat Google Maps
//     function loadMap() {
//         map.style.display = "block";
//         iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15787.923047547765!2d112.52907136911809!3d-8.403549588666674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a9458651084f%3A0x6b8da077d5b83e2f!2sPantai%20Balekambang!5e0!3m2!1sid!2sid!4v1732689584439!5m2!1sid!2sid";
//     }
// });

// localStorage.setItem("cookiesAccepted", "true");