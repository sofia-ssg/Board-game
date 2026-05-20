const tips = [
  "Protejează piesele importante.",
  "Nu lăsa piesele singure.",
  "Gândește câteva mutări înainte.",
  "Controlează centrul tablei."
];

const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  const random = tips[Math.floor(Math.random() * tips.length)];
  text.textContent = random;
});
