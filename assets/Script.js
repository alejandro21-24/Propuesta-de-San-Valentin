document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const photo = document.getElementById("photo");
  const song = document.getElementById("song");

  // NO que se mueve
  noBtn.addEventListener("click", () => {
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  // SÍ: corazones, foto, video
  yesBtn.addEventListener("click", () => {
    message.textContent = "💖 Sabía que dirías que sí 💖";
    photo.style.display = "block";

    song.currentTime = 0;
    song.play();

    for (let i = 0; i < 40; i++) {
      createHeart();
    }
  });

  // Crear corazones
  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.animation = "float 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }

});
