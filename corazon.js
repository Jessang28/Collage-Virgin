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
setInterval(moverVideo2, 800);



// -------------------------------
// Al hacer clic en el corazón (evento válido para permitir audio)
// -------------------------------
gif.addEventListener("click", () => {
  gif.style.display = "none";
  contVideos.style.display = "block";

  // Aseguramos que el video 1 haya cargado
  if (v1.readyState >= 2) {
    iniciarSecuencia();
  } else {
    v1.addEventListener("loadedmetadata", iniciarSecuencia);
  }
});


// -------------------------------
// Secuencia de reproducción
// -------------------------------
function iniciarSecuencia() {

  // ---------------------
  // VIDEO 1 EN REVERSA
  // ---------------------
  v1.pause();
  v1.playbackRate = -1;

  // MUY importante: solo funciona si ya tiene duración
  v1.currentTime = v1.duration;

  v1.play().catch(err => {
    console.warn("Error reproduciendo video 1:", err);
  });


  // ---------------------
  // VIDEO 2 después de 25s
  // ---------------------
  setTimeout(() => {
    moverVideo2();
    v2.play().catch(err => {
      console.warn("Error reproduciendo video 2:", err);
    });
  }, 25000);


  // ---------------------
  // CUANDO TERMINE VIDEO 1
  // ---------------------
  v1.onended = () => {

    // CUANDO TERMINE VIDEO 2
    v2.onended = () => {

      // VIDEO 3 A PANTALLA COMPLETA
      v3.play().catch(err => {
        console.warn("Error reproduciendo video 3:", err);
      });

      // CUANDO ACABA VIDEO 3 → LOOP TOTAL
      v3.onended = () => {
        // Reiniciar tiempos
        v1.currentTime = v1.duration; // reset reversa
        v2.currentTime = 0;
        v3.currentTime = 0;

        iniciarSecuencia();
      };
    };
  };
}
