document.addEventListener('DOMContentLoaded', () => {

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // --- ADD THIS LINE ---
        console.log("Element is ENTERING the viewport:", entry.target);
        entry.target.classList.add('is-visible');
      } else {
        // --- ADD THIS LINE ---
        console.log("Element is EXITING the viewport:", entry.target);
        entry.target.classList.remove('is-visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    // This single line shows or hides the menu
    navLinks.classList.toggle('active');
  });
});

