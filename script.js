// ✅ GSAP Animation for Hero Text
gsap.from(".animated-text", {
  duration: 2,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".sub-text", {
  duration: 2,
  y: 30,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".cta-btn", {
  duration: 2,
  y: 20,
  opacity: 0,
  delay: 1,
  ease: "power3.out"
});

// ✅ Floating Menu Animation
gsap.from(".floating-menu a", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// ✅ Menu Button Click Event (Optional)
document.querySelector(".menu-btn").addEventListener("click", () => {
  gsap.to(".floating-menu", { x: 0, duration: 0.5, opacity: 1 });
});
