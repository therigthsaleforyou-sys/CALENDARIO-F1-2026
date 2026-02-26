document.addEventListener("DOMContentLoaded", () => {
  if (!window.calendar2026 || !Array.isArray(window.calendar2026)) {
    console.error("calendar2026 não carregado");
    return;
  }

  const heroImage = document.getElementById("hero-image");
  const heroTitle = document.getElementById("hero-title");
  const heroCountdown = document.getElementById("hero-countdown");
  const raceCards = document.getElementById("race-cards");
  const backToTop = document.getElementById("back-to-top");

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  // Identificar a corrida desta página pelo nome do ficheiro
  const raceId = window.location.pathname.split("/").pop().replace(".html", "");
  const race = calendar2026.find(r => r.id === raceId);

  if (!race) {
    console.error("Corrida não encontrada no calendar2026");
    return;
  }

  // ================= HERO =================
  heroImage.src = race.heroImage || race.cardImage;
  heroTitle.textContent = race.name;

  function startCountdown(dateISO, element) {
    function update() {
      const now = new Date();
      const target = new Date(dateISO);
      const diff = target - now;

      if (diff <= 0) {
        element.textContent = "🏁 Corrida terminada — ver resultados";
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      element.textContent = `🏁 ${d}d ${h}h ${m}m ${s}s 🏁`;
    }

    update();
    setInterval(update, 1000);
  }

  startCountdown(race.sessions.race, heroCountdown);

  // ================= CARD DA CORRIDA =================
  const card = document.createElement("div");
  card.className = "race-card";

  card.innerHTML = `
    <img src="../${race.diagram}" alt="Diagrama da pista – ${race.name}">
    <div class="race-header">
      <h3>${race.name} – 2026</h3>
      <button class="fav-btn" data-id="${race.id}">🏁</button>
    </div>
    <div class="race-details">
      <h4>Resultados 2025</h4>
      <p><strong>Pole:</strong> ${race.results.pole}</p>
      <p><strong>Pódio:</strong> ${race.results.podium}</p>
      <p><strong>Volta mais rápida:</strong> ${race.results.fastestLap}</p>
      <p><strong>Meteorologia:</strong> ${race.results.weather}</p>
    </div>
    <a href="resultados.html#${race.id}" class="back-calendar-btn">🏁 Ver Resultados</a>
  `;

  raceCards.appendChild(card);

  // ================= FAVORITOS =================
  const favBtn = card.querySelector(".fav-btn");
  if (favorites.includes(race.id)) favBtn.classList.add("active");

  favBtn.addEventListener("click", () => {
    if (favorites.includes(race.id)) {
      favorites.splice(favorites.indexOf(race.id), 1);
      favBtn.classList.remove("active");
    } else {
      favorites.push(race.id);
      favBtn.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  // ================= BACK TO TOP =================
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}); 
