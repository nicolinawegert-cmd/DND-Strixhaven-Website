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