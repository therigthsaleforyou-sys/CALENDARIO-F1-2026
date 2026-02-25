const heroTitle = document.getElementById("hero-title");
const heroCountdown = document.getElementById("hero-countdown");
const raceCardsContainer = document.getElementById("race-cards");

const now = new Date().getTime();

// Próxima corrida
const nextRace = calendar2026.find(race => new Date(race.date).getTime() > now);

if (nextRace) {
  heroTitle.textContent = nextRace.name;
}

function updateCountdown(element, targetDate) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    element.textContent = "RACE DAY";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Criar cards
calendar2026.forEach(race => {
  const raceDate = new Date(race.date).getTime();

  const card = document.createElement("div");
  card.className = "race-card";

  card.innerHTML = `
    <div class="race-header">
      <h3>${race.name}</h3>
    </div>

    <div class="race-countdown" data-race-date="${race.date}">
      ...
    </div>
  `;

  raceCardsContainer.appendChild(card);
});

// Loop global
setInterval(() => {
  if (nextRace) {
    updateCountdown(
      heroCountdown,
      new Date(nextRace.date).getTime()
    );
  }

  document.querySelectorAll(".race-countdown").forEach(el => {
    const raceDate = new Date(el.dataset.raceDate).getTime();
    updateCountdown(el, raceDate);
  });
}, 1000);
