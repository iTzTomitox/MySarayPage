window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const contenido = document.getElementById("content");

  // Aseguramos que el contenido arranque oculto
  contenido.style.display = "none";
  contenido.style.opacity = 0;

  setTimeout(() => {
    // --- FADE OUT LOADER ---
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";

    // Esperamos que termine la transición del loader
    setTimeout(() => {
      loader.style.display = "none";

      // --- FADE IN CONTENIDO ---
      contenido.style.display = "block";
      contenido.style.transition = "opacity 1s ease";
      // Forzar un reflow para que el navegador aplique la transición
      void contenido.offsetWidth;
      contenido.style.opacity = "1";
    }, 600); // tiempo del fade del loader
  }, 1000); // tiempo que permanece el loader IMPORTANTE 
});


document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".toggle-switch .checkbox");

  // Recuperar preferencia previa A tener en cuenta
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    checkbox.checked = false; // Apagado = oscuro
  } else {
    document.body.classList.remove("dark-mode");
    checkbox.checked = true; // Encendido = claro
  }

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Encendido → modo claro
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "false");
    } else {
      //  Apagado → modo oscuro
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "true");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links"); // 🔹 nombre correcto

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

