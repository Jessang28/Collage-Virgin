// Elementos
const gif = document.getElementById("gif-corazon");
const contVideos = document.getElementById("contenedor-videos");

const v1 = document.getElementById("video1");
const v2 = document.getElementById("video2");
const v3 = document.getElementById("video3");

// -------------------------------
// Movimiento aleatorio del video2
// -------------------------------
function moverVideo2() {
  const x = Math.random() * (window.innerWidth - 350);
  const y = Math.random() * (window.innerHeight - 200);

  v2.style.left = `${x}px`;
  v2.style.top = `${y}px`;
}
setInterval(moverVideo2, 800); // cada 0.8 sec mueve posición

// -------------------------------
// Al hacer clic en el corazón
// -------------------------------
gif.addEventListener("click", () => {
  gif.style.display = "none";
  contVideos.style.display = "block";

  iniciarSecuencia();
});

// -------------------------------
// Secuencia de reproducción
// -------------------------------
function iniciarSecuencia() {

  // Video 1 INICIA EN REVERSA
  v1.playbackRate = -1;
  v1.currentTime = v1.duration;
  v1.play();

  // Video 2 inicia 25 segundos después
  setTimeout(() => {
    moverVideo2();
    v2.play();
  }, 25000);

  // Cuando termine el video 1 → detener video2 cuando termine
  v1.onended = () => {
    v2.onended = () => {
      // Inicia video 3
      v3.play();

      // Cuando termina el video 3 → reiniciar ciclo
      v3.onended = () => {
        // RESET
        v1.currentTime = v1.duration;
        v2.currentTime = 0;
        v3.currentTime = 0;
        iniciarSecuencia();
      };
    };
  };
}
