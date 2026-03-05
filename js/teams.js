// js/teams.js

document.addEventListener("DOMContentLoaded", () => {

const teamsData = [
  { name: "McLaren", image: "assets/teams/mclaren.png", drivers: ["Lando Norris", "Oscar Piastri"], id: "mclaren" },
  { name: "Ferrari", image: "assets/teams/ferrari.png", drivers: ["Charles Leclerc", "Lewis Hamilton"], id: "ferrari" },
  { name: "Red Bull Racing", image: "assets/teams/redbull.png", drivers: ["Max Verstappen", "Isack Hadjar"], id: "redbull" },
  { name: "Mercedes", image: "assets/teams/mercedes.png", drivers: ["George Russell", "Kimi Antonelli"], id: "mercedes" },
  { name: "Aston Martin", image: "assets/teams/astonmartin.png", drivers: ["Fernando Alonso", "Lance Stroll"], id: "astonmartin" },
  { name: "Williams", image: "assets/teams/williams.png", drivers: ["Alexander Albon", "Carlos Sainz Jr."], id: "williams" },
  { name: "Alpine", image: "assets/teams/alpine.png", drivers: ["Pierre Gasly", "Franco Colapinto"], id: "alpine" },
  { name: "Haas", image: "assets/teams/haas.png", drivers: ["Esteban Ocon", "Oliver Bearman"], id: "haas" },
  { name: "Racing Bulls", image: "assets/teams/racing-bulls.png", drivers: ["Liam Lawson", "Arvid Lindblad"], id: "racingbulls" },
  { name: "Audi F1 Team", image: "assets/teams/audi.png", drivers: ["Nico Hülkenberg", "Gabriel Bortoleto"], id: "audi" },
  { name: "Cadillac F1 Team", image: "assets/teams/cadillac.png", drivers: ["Sergio Pérez", "Valtteri Bottas"], id: "cadillac" }
];

const container = document.getElementById("teams-container");
const backToTop = document.getElementById("back-to-top");

teamsData.forEach(team => {
  const card = document.createElement("div");
  card.className = "team-card";

  // criar link clicável
  const link = document.createElement("a");
  link.href = `teams/${team.id}.html`;

  // criar imagem
  const img = document.createElement("img");
  img.src = team.image;
  img.alt = team.name;

  link.appendChild(img); // colocar imagem dentro do link

  // criar h3 e p
  const title = document.createElement("h3");
  title.textContent = team.name;
  const drivers = document.createElement("p");
  drivers.textContent = team.drivers.join(" & ");

  // adicionar tudo ao card
  card.appendChild(link);
  card.appendChild(title);
  card.appendChild(drivers);

  container.appendChild(card);
});

/* BACK TO TOP */
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

});
