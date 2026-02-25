// js/main.js
// Homepage – versão estável com hero dinâmico + fichas clicáveis + transições suaves

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

  /* =========================
     HERO – corrida ativa com Austrália fixa no início
  ========================= */

  let activeRace = calendar2026[0]; // primeira corrida = Austrália

  function getActiveRace() {
    const now = new Date();
    for (let race of calendar2026) {
      if (new Date(race.sessions.race) > now) return race;
    }
    return calendar2026[calendar2026.length - 1];
  }

  function startCountdown(race, countdownElement) {
    function update() {
      const now = new Date();
      const target = new Date(race.sessions.race);
      const diff = target - now;

      if (diff <= 0) {
        countdownElement.textContent = "🏁 Corrida terminada 🏁";
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      countdownElement.textContent = `🏁 ${d}d ${h}h ${m}m ${s}s 🏁`;
    }

    update();
    setInterval(update, 1000);
  }

  heroImage.src = activeRace.heroImage || activeRace.cardImage;
  heroTitle.textContent = activeRace.name;
  heroCountdown.style.display = "block";
  startCountdown(activeRace, heroCountdown);

  /* =========================
     FICHAS DAS CORRIDAS
  ========================= */

  raceCards.innerHTML = "";

  calendar2026.forEach(race => {
    const isFavorite = favorites.includes(race.id);

    const card = document.createElement("div");
    card.className = "race-card";
    if (isFavorite) card.classList.add("favorite");

    // CRIAR ELEMENTOS
    const img = document.createElement("img");
    img.className = "race-image";
    img.src = race.cardImage;
    img.alt = race.name;
    img.style.cursor = "pointer";

    const header = document.createElement("div");
    header.className = "race-header";

    const title = document.createElement("h3");
    title.textContent = race.name;

    const favBtn = document.createElement("button");
    favBtn.className = `fav-btn ${isFavorite ? "active" : ""}`;
    favBtn.dataset.id = race.id;
    favBtn.textContent = "🏁";

    header.appendChild(title);
    header.appendChild(favBtn);

    // Countdown do card
    const cardCountdown = document.createElement("div");
    cardCountdown.className = "card-countdown";
    cardCountdown.style.fontSize = "1rem"; // tamanho menor
    cardCountdown.style.textAlign = "left";
    startCountdown(race, cardCountdown);

    // Detalhes
    const details = document.createElement("div");
    details.className = "race-details hidden";
    details.innerHTML = `
      <p><strong>FP1:</strong> ${race.sessions.fp1}</p>
      <p><strong>FP2:</strong> ${race.sessions.fp2}</p>
      <p><strong>FP3:</strong> ${race.sessions.fp3}</p>
      <p><strong>Qualificação:</strong> ${race.sessions.qualifying}</p>
      <p><strong>Corrida:</strong> ${race.sessions.race}</p>
      <div class="race-link-wrapper">
        <a class="race-link-btn" href="race/${race.id}.html">
          Conheça o GP F1 da ${race.name.replace("Grande Prémio da ", "")}
        </a>
      </div>
    `;

    // ANEXAR AO CARD NA ORDEM CORRETA
    card.appendChild(img);
    card.appendChild(header);
    card.appendChild(cardCountdown); // Countdown abaixo do título
    card.appendChild(details);

    raceCards.appendChild(card);

    // Drop-down suave
    img.addEventListener("click", () => {
      const open = !details.classList.contains("hidden");
      if (open) {
        details.style.maxHeight = "0";
        setTimeout(() => details.classList.add("hidden"), 300);
      } else {
        details.classList.remove("hidden");
        details.style.maxHeight = details.scrollHeight + "px";
      }
    });
  });

  /* =========================
     FAVORITOS
  ========================= */

  raceCards.addEventListener("click", e => {
    if (e.target.classList.contains("fav-btn")) {
      const id = e.target.dataset.id;
      const card = e.target.closest(".race-card");

      if (favorites.includes(id)) {
        favorites.splice(favorites.indexOf(id), 1);
        e.target.classList.remove("active");
        card.classList.remove("favorite");
      } else {
        favorites.push(id);
        e.target.classList.add("active");
        card.classList.add("favorite");
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  });

  /* =========================
     HERO CLICÁVEL → rolar até card ativo
  ========================= */
  heroImage.addEventListener("click", () => {
    const card = Array.from(raceCards.children).find(c => c.querySelector(".race-header h3").textContent === activeRace.name);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
      const details = card.querySelector(".race-details");
      if (details) {
        details.classList.remove("hidden");
        details.style.maxHeight = details.scrollHeight + "px";
      }
    }
  });

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
