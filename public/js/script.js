document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen-elemen yang dibutuhkan
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    const showRegisterLinks = document.querySelectorAll("#showRegister");
    const showLogin = document.getElementById("showLogin");

    // Pastikan semua elemen ditemukan
    if (loginPage && registerPage && showRegisterLinks.length > 0 && showLogin) {
        // Tambahkan event listener ke semua link "Buat Akun Baru"
        showRegisterLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                loginPage.classList.add("hidden");
                registerPage.classList.remove("hidden");
            });
        });

        // Tambahkan event listener ke link "Login"
        showLogin.addEventListener("click", function (event) {
            event.preventDefault();
            registerPage.classList.add("hidden");
            loginPage.classList.remove("hidden");
        });
    } else {
        console.error("Salah satu elemen navigasi tidak ditemukan!");
    }
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    
});

