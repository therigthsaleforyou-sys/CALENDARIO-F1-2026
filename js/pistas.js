document.addEventListener("DOMContentLoaded", () => {

  // ================= HERO =================
  const heroImage = document.getElementById("hero-image");
  const heroTitle = document.getElementById("hero-title");
  const heroCountdown = document.getElementById("hero-countdown");

  // Seleciona imagem do hero diretamente da pasta heroes
  heroImage.src = "../assets/heroes/australia_v2.jpg";
  heroTitle.textContent = "Grande Prémio da Austrália";

  // Data oficial da corrida Austrália 2026
  const raceDateISO = "2026-03-08T05:00:00Z";

  function startCountdown(dateISO) {
    function update() {
      const now = new Date();
      const target = new Date(dateISO);
      const diff = target - now;

      if (diff <= 0) {
        heroCountdown.textContent = "🏁 Corrida terminada — ver resultados";
        return;
      }

      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff / (1000*60*60)) % 24);
      const m = Math.floor((diff / (1000*60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      heroCountdown.textContent = `🏁 ${d}d ${h}h ${m}m ${s}s 🏁`;
    }
    update();
    setInterval(update, 1000);
  }

  startCountdown(raceDateISO);

  // ================= FAVORITOS =================
  const favBtn = document.querySelector(".fav-btn");
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (favorites.includes("australia")) favBtn.classList.add("active");

  favBtn.addEventListener("click", () => {
    if (favorites.includes("australia")) {
      favorites.splice(favorites.indexOf("australia"), 1);
      favBtn.classList.remove("active");
    } else {
      favorites.push("australia");
      favBtn.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  // ================= BACK TO TOP =================
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
