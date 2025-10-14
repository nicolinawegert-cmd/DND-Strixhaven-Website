// Runes Animation
const runeContainer = document.querySelector('.runes');
const runeImages = [
  "images/witherbloom.png",
  "images/lorehold.png",
  "images/prismari.png",
  "images/quandrix.png",
  "images/silverquill.png"
];

function spawnRune() {
  const rune = document.createElement("div");
  rune.classList.add("rune");

  rune.style.left = (5 + Math.random() * 90) + "vw"; 
  rune.style.top = (5 + Math.random() * 90) + "vh";

  rune.style.backgroundImage = `url(${runeImages[Math.floor(Math.random() * runeImages.length)]})`;

  const isGiant = Math.random() < 0.1;

  const size = isGiant ? (200 + Math.random() * 200) : (80 + Math.random() * 60);
  rune.style.width = rune.style.height = size + "px";

  rune.style.opacity = isGiant ? 0.08 : 0.15;

  const driftDuration = isGiant ? (90 + Math.random() * 60) : (50 + Math.random() * 40);
  const fadeDuration = isGiant ? (30 + Math.random() * 20) : (15 + Math.random() * 15);
  const fadeDelay = Math.random() * 20;  

  rune.style.animationDuration = `${driftDuration}s, ${fadeDuration}s`;
  rune.style.animationDelay = `0s, ${fadeDelay}s`;

  runeContainer.appendChild(rune);

  setTimeout(() => rune.remove(), isGiant ? 240000 : 120000);
}

setInterval(spawnRune, 8000);

for (let i = 0; i < 3; i++) spawnRune();

// Sparks Animation

const SPARK_COUNT = 25;

for (let i = 0; i < SPARK_COUNT; i++) {
  const spark = document.createElement('div');
  spark.classList.add('spark');

  spark.style.left = Math.random() * 100 + "%";
  spark.style.top = Math.random() * 100 + "%";

  const size = Math.random() * 4 + 2;
  spark.style.width = size + "px";
  spark.style.height = size + "px";

  const duration = Math.random() * 10 + 8; // 8–18s
  const chosenAnim = directions[Math.floor(Math.random() * directions.length)];
  spark.style.animation = `${chosenAnim} ${duration}s infinite ease-in-out`;

  document.body.appendChild(spark);
}

