
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");
const petals = document.getElementById("petals");

// Open romantic letter
openLetter.addEventListener("click", () => {
  letter.classList.toggle("show");

  openLetter.textContent = letter.classList.contains("show")
    ? "❤️ My Heart Is Open"
    : "💌 Open My Heart";

  if (letter.classList.contains("show")) {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

// Rose petals animation
const flowers = ["🌹", "🌸", "💗", "🌺", "✨"];

function createPetal() {
  const petal = document.createElement("span");

  petal.className = "petal";
  petal.textContent =
    flowers[Math.floor(Math.random() * flowers.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 22) + "px";
  petal.style.animationDuration = (5 + Math.random() * 6) + "s";

  petals.appendChild(petal);

  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 350);

// Forgiveness interaction
yesBtn.addEventListener("click", () => {
  finalMessage.classList.add("show");

  finalMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  launchHearts();

  yesBtn.textContent = "❤️ You Made Me Happy!";
  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// Still angry interaction
noBtn.addEventListener("click", () => {
  noBtn.textContent = "Please Ekbar Bhebe Dekho 🥺";

  openLetter.textContent = "I Am Really Sorry ❤️";

  letter.classList.add("show");
});

// Heart celebration
function launchHearts() {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");

      heart.textContent = ["❤️", "💖", "💕", "💗"][
        Math.floor(Math.random() * 4)
      ];

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "-40px";
      heart.style.fontSize = "28px";
      heart.style.zIndex = "10";
      heart.style.pointerEvents = "none";
      heart.style.transition = "transform 3s ease, opacity 3s ease";

      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform =
          `translateY(-${window.innerHeight + 100}px) rotate(360deg)`;
        heart.style.opacity = "0";
      });

      setTimeout(() => heart.remove(), 3200);
    }, i * 90);
  }
}
