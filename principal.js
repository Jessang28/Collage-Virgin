// --- Collage de imágenes ---
const imagenes = [
  { name: "Virgen de Guadalupe", url: "img/virgen1.png", fotos: ["archivo/fotos/foto_duelo1.jpg", "archivo/fotos/foto_duelo2.jpg"] },
  { name: "Virgen María", url: "img/virgen2.png", fotos: ["archivo/fotos/foto_infancia1.jpg", "archivo/fotos/foto_infancia2.jpg"] },
  { name: "Virgen de Fátima", url: "img/virgen3.png", fotos: ["archivo/fotos/foto_infancia3.jpg", "archivo/fotos/foto_infancia4.jpg"] },
  { name: "Virgen de Luján", url: "img/virgen4.png", fotos: ["archivo/fotos/foto_infancia5.jpg", "archivo/fotos/foto_infancia6.jpg"] },
  { name: "Virgen de Czestochowa", url: "img/virgen5.png"
  { name: "Virgen de Lourdes", url: "img/virgen6.png"
  { name: "Virgen de la Caridad", url: "img/virgen7.png"
  { name: "Virgen del Carmen", url: "img/virgen8.png"
  { name: "Virgen de Montserrat", url: "img/virgen9.png"
  { name: "Virgen de la Medalla Milagrosa", url: "img/virgen10.png"
  { name: "Virgen de la Sagrada Familia", url: "img/virgen11.png"
  { name: "Virgen de la Nube", url: "img/virgen12.png"
  { name: "Virgen de la Anunciación", url: "img/virgen13.png"
  { name: "Virgen de los Remedios", url: "img/virgen14.png"
  { name: "Virgen de la Misericordia", url: "img/virgen15.png"
  { name: "Virgen de Guadalupe de Extremadura", url: "img/virgen16.png"
  { name: "Virgen de la Esperanza", url: "img/virgen17.png"
  { name: "Virgen de la Paz", url: "img/virgen18.png"
  { name: "Virgen del Pilar", url: "img/virgen19.png"
  { name: "Virgen de las Mercedes", url: "img/virgen20.png"

const container = document.getElementById('collage');
const descripcionDiv = document.getElementById('descripcion');
const textoDescripcion = document.getElementById('texto-descripcion');

imagenes.forEach((imagen, index) => {
  const item = document.createElement('div');
  item.className = 'collage-item';
  item.style.left = `${Math.random() * 80}%`;
  item.style.top = `${Math.random() * 80}%`;

  const imgElement = document.createElement('img');
  imgElement.src = imagen.url;
  imgElement.alt = imagen.name;

  const nombre = document.createElement('div');
  nombre.className = 'nombre';
  nombre.textContent = imagen.name;

  item.appendChild(imgElement);
  item.appendChild(nombre);
  container.appendChild(item);

  item.addEventListener('click', () => {
    textoDescripcion.innerHTML = `
      <p>${imagen.descripcion}</p>
      <div class="comentario-container">
        <span class="comentario-link" onclick="mostrarFormulario(${index})">TE PIDO, TE RUEGO VIRGENCITA</span>
        <div id="formulario-${index}" class="formulario-comentario">
          <textarea placeholder="Escribe tu comentario..."></textarea><br/>
          <button class="enviar-comentario" onclick="enviarComentario(${index})">Enviar</button>
          <div id="audio-${index}" class="audio-consejo"></div>
        </div>
      </div>
    `;
    descripcionDiv.style.display = 'flex';
  });
});

function mostrarFormulario(index) {
  const formulario = document.getElementById(`formulario-${index}`);
  formulario.style.display = 'block';
}

function enviarComentario(index) {
  const formulario = document.getElementById(`formulario-${index}`);
  const textarea = formulario.querySelector('textarea');
  const comentario = textarea.value.trim();
}

const audioFondo = document.getElementById("audio-fondo");
const inicioOverlay = document.getElementById("inicio-interaccion");

// rutas de los audios
const audiosFondo = [
  "audio/audio1.mp3",
  "audio/audio2.mp3",
  "audio/audio3.mp3",
  "audio/audio4.mp3"
];

function reproducirAleatorio() {
  const indice = Math.floor(Math.random() * audiosFondo.length);
  audioFondo.src = audiosFondo[indice];
  audioFondo.play().catch(err => console.log("Error reproducir audio:", err));
}

// cuando termine, elegir otro al azar
audioFondo.addEventListener("ended", reproducirAleatorio);

function iniciarAudio() {
  document.body.style.overflow = "auto"; // habilita scroll
  reproducirAleatorio();
  inicioOverlay.style.display = "none";

  // quitar listeners una vez arranque
  window.removeEventListener("scroll", iniciarAudio);
  window.removeEventListener("click", iniciarAudio);
  window.removeEventListener("touchstart", iniciarAudio);
}

window.addEventListener("scroll", iniciarAudio, { once: true });
window.addEventListener("click", iniciarAudio, { once: true });
window.addEventListener("touchstart", iniciarAudio, { once: true });
inicioOverlay.addEventListener("click", iniciarAudio);
