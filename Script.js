const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const photo = document.getElementById("photo");

noBtn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  message.textContent = "💘 SABÍA QUE DIRÍAS QUE SÍ 💘";
  photo.style.display = "block";

  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.animation = "float 3s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
