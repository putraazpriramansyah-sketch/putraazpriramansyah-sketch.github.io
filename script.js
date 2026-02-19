// Loader Control
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {

        loader.classList.add('fade-out');
            setTimeout(() => {
             loader.style.display = 'none';

    document.body.style.overflowY = "auto"; 
            }, 1000);
        }, 2100);   
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


