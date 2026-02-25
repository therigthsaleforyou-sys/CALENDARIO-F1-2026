// js/main.js — versão canónica estável
document.addEventListener("DOMContentLoaded", () => {

  if (!window.calendar2026 || !Array.isArray(calendar2026)) {
    console.error("calendar2026 não carregado");
    return;
  }

  const heroImage = document.getElementById("hero-image");
  const heroTitle = document.getElementById("hero-title");
  const heroCountdown = document.getElementById("hero-countdown");
  const raceCards = document.getElementById("race-cards");
  const backToTop = document.getElementById("back-to-top");

  // 🔒 proteção: se não for index, sai
  if (!heroImage || !raceCards) return;

  /* =========================
     FUNÇÃO COUNTDOWN (ÚNICA)
  ========================= */
  function formatCountdown(targetDate) {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return "🏁 RACE DAY";

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    return `${d}d ${h}h ${m}m ${s}s`;
  }

  /* =========================
     HERO — PRÓXIMA CORRIDA
  ========================= */
  function getNextRace() {
    const now = new Date();
    return calendar2026.find(r => new Date(r.sessions.race) > now)
        || calendar2026[calendar2026.length - 1];
  }

  let activeRace = getNextRace();

  heroImage.src = activeRace.heroImage || activeRace.cardImage;
  heroTitle.textContent = activeRace.name;
  heroCountdown.style.display = "block";

  /* =========================
     CARDS
  ========================= */
  raceCards.innerHTML = "";

  calendar2026.forEach(race => {
    const card = document.createElement("div");
    card.className = "race-card";

    card.innerHTML = `
      <img class="race-image" src="${race.cardImage}" alt="${race.name}">
      <div class="race-header">
        <h3>${race.name}</h3>
      </div>
      <div class="race-countdown">...</div>
      <div class="race-details hidden">
        <p><strong>Corrida:</strong> ${race.sessions.race}</p>
      </div>
    `;

    raceCards.appendChild(card);

    const countdownEl = card.querySelector(".race-countdown");
    const raceDate = new Date(race.sessions.race);

    setInterval(() => {
      countdownEl.textContent = formatCountdown(raceDate);
    }, 1000);
  });

  /* =========================
     HERO COUNTDOWN
  ========================= */
  setInterval(() => {
    heroCountdown.textContent =
      "🏁 " + formatCountdown(new Date(activeRace.sessions.race)) + " 🏁";
  }, 1000);

  /* =========================
     BACK TO TOP
  ========================= */
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
