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

const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {

navLinks.classList.toggle('active'); 
    console.log("Tombol Diklik");
};

document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {

navLinks.classList.remove('active');
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

