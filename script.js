// Initialize AOS animations with custom settings
AOS.init({
  duration: 1200,    // Animation duration (ms)
  easing: 'ease-in-out',  // Smooth easing
  once: true,        // Animation happens only once while scrolling
});

// Typed.js with multiple phrases and cool cursor style
const typed = new Typed(".typed-text", {
  strings: [
    "Krishna's Cybersecurity Portfolio 🔐",
    "Aspiring SOC Analyst 🚀",
    "Digital Forensics Enthusiast 🕵️‍♂️",
    "Protecting Your Digital World 🛡️",
  ],
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});
