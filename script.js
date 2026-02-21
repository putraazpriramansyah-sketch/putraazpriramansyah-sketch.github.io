// Loader Control
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {

        loader.classList.add('fade-out');
            setTimeout(() => {
             loader.style.display = 'none';

    document.body.style.overflowY = "auto"; 
            }, 700);
        }, 2800);   
});   

// Typing Effect
const textElement = document.querySelector(".typing-text");
const words = ["Guid", "Developer", "Azpri", "GuideFs"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}
typeEffect();

const menuIcon = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

const iconToggle = menuIcon.querySelector('i');

menuIcon.onclick = () => {

navLinks.classList.toggle('active');
    // untuk trigger animasi menu ke X
    menuIcon.classList.toggle('is-active');
    iconToggle.style.opacity = '0';
    setTimeout(() => {
    // logika ganti ikon x
if (navLinks.classList.contains('active')){
    // kalau menu kebuka ganti jadi ikon X
    iconToggle.classList.replace('fa-bars','fa-xmark');
}   else {
    // kalau ditutup balik lagi
    iconToggle.classList.replace('fa-xmark', 'fa-bars');
}
    iconToggle.style.opacity = '1';
}, 200);
};

document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {

        navLinks.classList.remove('active');
        iconToggle.classList.replace('fa-xmark','fa-bars');
    };
});

document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY + 200;

    sections.forEach(sec => {
      let top = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(a => a.classList.remove("active"));
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) link.classList.add("active");
      }
    });
  });

});

const menuToggle = document

