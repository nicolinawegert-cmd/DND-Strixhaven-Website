// Sparks Animation
const origin = document.querySelector(".spark-origin");

if (origin) {
  const directions = ["floatSparkUp", "floatSparkLeft", "floatSparkRight"];
  const colors = ["spark--cyan", "spark--cyan", "spark--amber"];
  const SPARK_COUNT = 22;

  function spawnSpark() {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.classList.add(colors[Math.floor(Math.random() * colors.length)]);

    const relX = 0.5 + (Math.random() - 0.5) * 0.9;
    const baseX = origin.clientWidth * relX;

    const relY = 0.78 + Math.random() * 0.12;
    const startY = origin.clientHeight * relY;

    spark.style.left = `${baseX}px`;
    spark.style.top = `${startY}px`;

    const size = Math.random() * 3 + 3;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    const duration = Math.random() * 6 + 9; // 9–15s
    const chosenAnim = directions[Math.floor(Math.random() * directions.length)];
    const delay = Math.random() * 2.2;
    spark.style.animation = `${chosenAnim} ${duration}s cubic-bezier(0.35, 0.01, 0.22, 1) ${delay}s 1 both`;

    origin.appendChild(spark);

    requestAnimationFrame(() => {
      spark.style.opacity = 1;
    });

    setTimeout(() => {
      spark.remove();
    }, duration * 1000);
  }

  for (let i = 0; i < SPARK_COUNT; i++) {
    setTimeout(spawnSpark, i * (200 + Math.random() * 200));
  }

  setInterval(spawnSpark, 800 + Math.random() * 400);
}
