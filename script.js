const players = document.querySelectorAll(".audioPlayer");
players.forEach((player) => {
  player.addEventListener("play", () => {
    players.forEach((otherPlayer) => {
      if (otherPlayer !== player) {
        otherPlayer.pause();
      }
    });
  });
});

function toggleAudio(audioId, imageElement) {
  const audio = document.getElementById(audioId);

  if (audio.paused) {
    // Para todos os outros áudios se quiseres que apenas um toque de cada vez
    document.querySelectorAll("audio").forEach((a) => a.pause());

    audio.play();
    imageElement.classList.add("playing");
  } else {
    audio.pause();
    imageElement.classList.remove("playing");
  }
}
