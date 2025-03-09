document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen-elemen yang dibutuhkan
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    const showRegisterLinks = document.querySelectorAll("#showRegister");
    const showLogin = document.getElementById("showLogin");
    const loginButton = document.querySelector("#loginForm button");
    const registerButton = document.querySelector("#registerForm button");
    const createAccountButton = document.querySelector("a[href='#signup']");
    const signInButton = document.querySelector("a[href='#signin']");

    // Pastikan semua elemen ditemukan
    if (loginPage && registerPage && showRegisterLinks.length > 0 && showLogin) {
        showRegisterLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                loginPage.classList.add("hidden");
                registerPage.classList.remove("hidden");
            });
        });

        showLogin.addEventListener("click", function (event) {
            event.preventDefault();
            registerPage.classList.add("hidden");
            loginPage.classList.remove("hidden");
        });
    } else {
        console.error("Salah satu elemen navigasi tidak ditemukan!");
    }

    // Event listener untuk tombol login dan register agar redirect ke index.html
    [loginButton, registerButton].forEach(button => {
        if (button) {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                window.location.href = "index.html";
            });
        }
    });

    // Event listener untuk tombol Create Account dan Sign In dari navbar
    if (createAccountButton && signInButton) {
        createAccountButton.addEventListener("click", function (event) {
            event.preventDefault();
            loginPage.classList.add("hidden");
            registerPage.classList.remove("hidden");
        });

        signInButton.addEventListener("click", function (event) {
            event.preventDefault();
            registerPage.classList.add("hidden");
            loginPage.classList.remove("hidden");
        });
    }
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    if (header && window.pageYOffset > header.offsetTop) {
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
} else {
    console.error("Hamburger menu tidak ditemukan!");
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
