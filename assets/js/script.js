const texts = [" Kotaro", "James Frias", "NeegaPh"];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeSpeed = 120;
const deleteSpeed = 80;
const pauseAfterType = 1200;

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // typing forward
    typingElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), pauseAfterType);
    }
  } else {
    // backward typing
    typingElement.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? deleteSpeed : typeSpeed);
}

typeLoop();

