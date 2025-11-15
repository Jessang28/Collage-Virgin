// Elementos
const gif = document.getElementById("gif-corazon");
const contVideos = document.getElementById("contenedor-videos");

// Tus videos reales: elfinal1, elfinal2, elfinal3
const v1 = document.getElementById("video1"); // elfinal1.mp4
const v2 = document.getElementById("video2"); // elfinal2.mp4
const v3 = document.getElementById("video3"); // elfinal3.mp4


// -------------------------------------------
// Activación por clic o scroll (permite audio)
// -------------------------------------------
function activarReproduccion() {
  gif.style.display = "none";
  contVideos.style.display = "block";

  iniciarSecuencia();

  // remover para que no se duplique la acción
  window.removeEventListener("click", activarReproduccion);
  window.removeEventListener("scroll", activarReproduccion);
}

window.addEventListener("click", activarReproduccion);
window.addEventListener("scroll", activarReproduccion);


// -------------------------------
// Movimiento aleatorio del video2
// -------------------------------
function moverVideo2() {
  const x = Math.random() * (window.innerWidth - 350);
  const y = Math.random() * (window.innerHeight - 200);

  v2.style.left = `${x}px`;
  v2.style.top = `${y}px`;
}
setInterval(moverVideo2, 800);


// -------------------------------
// SECUENCIA PRINCIPAL
// -------------------------------
function iniciarSecuencia() {

  // VIDEO 1 (elfinal1) SONANDO NORMAL
  v1.currentTime = 0;
  v1.play().catch(err => console.warn("Error en v1:", err));

  // VIDEO 2 (elfinal2) aparece 25s después
  setTimeout(() => {
    moverVideo2();
    v2.currentTime = 0;
    v2.play().catch(err => console.warn("Error en v2:", err));
  }, 25000);

  // CUANDO TERMINA VIDEO 1
  v1.onended = () => {

    // CUANDO TERMINA VIDEO 2
    v2.onended = () => {

      // VIDEO 3 (elfinal3) INICIA SOLO
      v3.currentTime = 0;
      v3.play().catch(err => console.warn("Error en v3:", err));

      // LOOP COMPLETO
      v3.onended = () => {
        iniciarSecuencia();
      };
    };
  };
}
