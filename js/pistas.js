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

  // ================= HERO =================
  const thisRace = calendar2026.find(r => r.id === "australia");

  heroImage.src = thisRace.heroImage || thisRace.cardImage;
  heroTitle.textContent = thisRace.name;

  function startCountdown(targetRace, element) {
    function update() {
      const now = new Date();
      const target = new Date(targetRace.sessions.race);
      const diff = target - now;
      if (diff <= 0) {
        element.textContent = "🏁 Corrida terminada 🏁";
        return;
      }
      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff / (1000*60*60)) % 24);
      const m = Math.floor((diff / (1000*60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      element.textContent = `🏁 ${d}d ${h}h ${m}m ${s}s 🏁`;
    }
    update();
    setInterval(update,1000);
  }

  startCountdown(thisRace, heroCountdown);

  // ================= CARD DA CORRIDA =================
  raceCards.innerHTML = "";

  const card = document.createElement("div");
  card.className = "race-card";

  card.innerHTML = `
    <img src="../${thisRace.diagram}" alt="Diagrama da pista – ${thisRace.name}">
    <div class="race-header">
      <h3>${thisRace.name} – 2025</h3>
      <button class="fav-btn" data-id="${thisRace.id}">🏁</button>
    </div>
    <div class="race-details">
      <h4>Resultados 2025</h4>
      <p><strong>Pole:</strong> ${thisRace.results2025.pole}</p>
      <p><strong>Pódio:</strong> ${thisRace.results2025.podium}</p>
      <p><strong>Volta mais rápida:</strong> ${thisRace.results2025.fastestLap}</p>
      <p><strong>Meteorologia:</strong> ${thisRace.results2025.weather}</p>
    </div>
    <a href="resultados.html#${thisRace.id}" class="back-calendar-btn">🏁 Ver Resultados</a>
  `;

  raceCards.appendChild(card);

  // ================= FAVORITOS =================
  const favBtn = card.querySelector(".fav-btn");
  if(favorites.includes(thisRace.id)) favBtn.classList.add("active");

  favBtn.addEventListener("click", () => {
    if(favorites.includes(thisRace.id)) {
      favorites.splice(favorites.indexOf(thisRace.id),1);
      favBtn.classList.remove("active");
    } else {
      favorites.push(thisRace.id);
      favBtn.classList.add("active");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  // ================= DROPDOWN DETALHES =================
  const img = card.querySelector("img");
  const details = card.querySelector(".race-details");
  img.addEventListener("click", () => {
    const open = !details.classList.contains("hidden");
    if(open){
      details.style.maxHeight = "0";
      setTimeout(()=>details.classList.add("hidden"),300);
    } else {
      details.classList.remove("hidden");
      details.style.maxHeight = details.scrollHeight + "px";
    }
  });

  // ================= HERO CLICÁVEL =================
  heroImage.addEventListener("click", () => {
    card.scrollIntoView({behavior:"smooth", block:"start"});
    details.classList.remove("hidden");
    details.style.maxHeight = details.scrollHeight + "px";
  });

  // ================= BACK TO TOP =================
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY>400);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
  });
});
