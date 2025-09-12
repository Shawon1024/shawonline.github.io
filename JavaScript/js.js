function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const expanded = icon.getAttribute("aria-expanded")==="true";

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    icon.setAttribute("aria-expanded", (!expanded).toString());
}

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Formspree AJAX submit (no redirect)
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;

  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic client-side required check
    if(!form.checkValidity()){
      status.textContent = 'Please fill in all required fields.';
      status.className = 'form-status error';
      return;
    }

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        status.textContent = 'Thanks! Your message has been sent.';
        status.className = 'form-status success';
        form.reset();
      } else {
        const out = await res.json().catch(() => null);
        const msg = out && out.errors
          ? out.errors.map(e => e.message).join(', ')
          : 'Oops! Something went wrong. Please try again.';
        status.textContent = msg;
        status.className = 'form-status error';
      }
    } catch (err) {
      status.textContent = 'Network error. Please check your connection and try again.';
      status.className = 'form-status error';
    }
  });
})();
