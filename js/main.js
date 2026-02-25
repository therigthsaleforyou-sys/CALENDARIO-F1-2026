const heroTitle = document.getElementById("hero-title");
const heroCountdown = document.getElementById("hero-countdown");
const raceCardsContainer = document.getElementById("race-cards");

/* ========= PARSER DE DATA PT ========= */
function parsePTDate(dateStr) {
  // Esperado: "DD/MM/YYYY HH:MM"
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);

  return new Date(year, month - 1, day, hour, minute).getTime();
}

/* ========= COUNTDOWN ========= */
function updateCountdown(element, targetTime) {
  const now = Date.now();
  const distance = targetTime - now;

  if (distance <= 0 || isNaN(distance)) {
    element.textContent = "RACE DAY";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

/* ========= PRÓXIMA CORRIDA ========= */
const now = Date.now();

const nextRace = calendar2026.find(race => {
  const raceTime = parsePTDate(race.date);
  return raceTime > now;
});

if (nextRace) {
  heroTitle.textContent = nextRace.name;
}

/* ========= CARDS ========= */
calendar2026.forEach(race => {
  const raceTime = parsePTDate(race.date);

  const card = document.createElement("div");
  card.className = "race-card";

  card.innerHTML = `
    <div class="race-header">
      <h3>${race.name}</h3>
    </div>
    <div class="race-countdown" data-time="${raceTime}">
      ...
    </div>
  `;

  raceCardsContainer.appendChild(card);
});

/* ========= LOOP GLOBAL ========= */
setInterval(() => {
  if (nextRace) {
    updateCountdown(
      heroCountdown,
      parsePTDate(nextRace.date)
    );
  }

  document.querySelectorAll(".race-countdown").forEach(el => {
    const raceTime = Number(el.dataset.time);
    updateCountdown(el, raceTime);
  });
}, 1000);
