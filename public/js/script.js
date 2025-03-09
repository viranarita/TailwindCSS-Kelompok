document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen-elemen yang dibutuhkan
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    const showRegisterLinks = document.querySelectorAll("#showRegister");
    const showLogin = document.getElementById("showLogin");
    
    // Ambil parameter dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");

    // Menampilkan halaman sesuai parameter URL
    if (page === "register") {
        loginPage?.classList.add("hidden");
        registerPage?.classList.remove("hidden");
    } else {
        registerPage?.classList.add("hidden");
        loginPage?.classList.remove("hidden");
    }
    
    // Pastikan semua elemen ditemukan sebelum mengatur event listener
    if (loginPage && registerPage && showRegisterLinks.length > 0 && showLogin) {
        // Tambahkan event listener ke semua link "Buat Akun Baru"
        showRegisterLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                loginPage.classList.add("hidden");
                registerPage.classList.remove("hidden");
                history.pushState(null, "", "?page=register");
            });
        });

        // Tambahkan event listener ke link "Login"
        showLogin.addEventListener("click", function (event) {
            event.preventDefault();
            registerPage.classList.add("hidden");
            loginPage.classList.remove("hidden");
            history.pushState(null, "", "?page=login");
        });
    } else {
        console.error("Salah satu elemen navigasi tidak ditemukan!");
    }
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}

// Responsive Navigation di Destination Section
const navLinks = document.querySelectorAll("#destination nav a");
const destinationNav = document.querySelector("#destination nav");

function updateNavDisplay() {
    if (window.innerWidth < 640) {
        navLinks.forEach((link, index) => {
            if (index !== 0) { // Sembunyikan semua kecuali "Hotel"
                link.classList.add("hidden");
            }
        });
    } else if (window.innerWidth < 1024) {
        navLinks.forEach((link, index) => {
            if (index > 1) { // Tampilkan "Hotel" dan "Transportation", sisanya sembunyikan
                link.classList.add("hidden");
            } else {
                link.classList.remove("hidden");
            }
        });
    } else {
        navLinks.forEach(link => link.classList.remove("hidden")); // Tampilkan semua di layar besar
    }
}

window.addEventListener("resize", updateNavDisplay);
document.addEventListener("DOMContentLoaded", updateNavDisplay);
