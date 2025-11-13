// --- Collage de imágenes ---
const imagenes = [
  { name: "Virgen de Guadalupe", url: "img/virgen1.png", fotos: ["archivo/fotos/foto_duelo1.jpeg", "archivo/fotos/foto_duelo2.jpeg"] },
  { name: "Virgen María", url: "img/virgen2.png", fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen de Fátima", url: "img/virgen3.png", fotos: ["archivo/fotos/foto_infancia3.jpeg", "archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen de Luján", url: "img/virgen4.png", fotos: ["archivo/fotos/foto_infancia5.jpeg", "archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen de Czestochowa", url: "img/virgen5.png", fotos: ["archivo/fotos/foto_duelo1.jpeg", "archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen de Lourdes", url: "img/virgen6.png", fotos: ["archivo/fotos/foto_infancia3.jpeg", "archivo/fotos/foto_infancia5.jpeg"] },
  { name: "Virgen de la Caridad", url: "img/virgen7.png", fotos: ["archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen del Carmen", url: "img/virgen8.png", fotos: ["archivo/fotos/foto_duelo1.jpeg"] },
  { name: "Virgen de Montserrat", url: "img/virgen9.png", fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen de la Medalla Milagrosa", url: "img/virgen10.png", fotos: ["archivo/fotos/foto_infancia3.jpeg"] },
  { name: "Virgen de la Sagrada Familia", url: "img/virgen11.png", fotos: ["archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen de la Nube", url: "img/virgen12.png", fotos: ["archivo/fotos/foto_infancia5.jpeg"] },
  { name: "Virgen de la Anunciación", url: "img/virgen13.png", fotos: ["archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen de los Remedios", url: "img/virgen14.png", fotos: ["archivo/fotos/foto_duelo2.jpeg"] },
  { name: "Virgen de la Misericordia", url: "img/virgen15.png", fotos: ["archivo/fotos/foto_infancia1.jpeg"] },
  { name: "Virgen de Guadalupe de Extremadura", url: "img/virgen16.png", fotos: ["archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen de la Esperanza", url: "img/virgen17.png", fotos: ["archivo/fotos/foto_infancia3.jpeg"] },
  { name: "Virgen de la Paz", url: "img/virgen18.png", fotos: ["archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen del Pilar", url: "img/virgen19.png", fotos: ["archivo/fotos/foto_infancia5.jpeg"] },
  { name: "Virgen de las Mercedes", url: "img/virgen20.png", fotos: ["archivo/fotos/foto_infancia6.jpeg"] }
];

const container = document.getElementById('collage');
const descripcionDiv = document.getElementById('descripcion');
const textoDescripcion = document.getElementById('texto-descripcion');

// --- Crear las vírgenes en posiciones aleatorias ---
imagenes.forEach(imagen => {
  const item = document.createElement('div');
  item.className = 'collage-item';
  item.style.left = `${10 + Math.random() * 70}%`;
  item.style.top = `${10 + Math.random() * 70}%`;

  const imgElement = document.createElement('img');
  imgElement.src = imagen.url;
  imgElement.alt = imagen.name;

  item.appendChild(imgElement);
  container.appendChild(item);

  // Al hacer clic, mostrar las fotos internas
  item.addEventListener('click', () => {
    const collageInterno = imagen.fotos
      .map(foto => `<img src="${foto}" alt="foto interna" class="foto-interna"/>`)
      .join('');
    textoDescripcion.innerHTML = `<div class="collage-interno">${collageInterno}</div>`;
    descripcionDiv.style.display = 'flex';
  });
});

function cerrarDescripcion() {
  descripcionDiv.style.display = 'none';
}

// --- Audio de fondo ---
const audioFondo = document.getElementById("audio-fondo");
const inicioOverlay = document.getElementById("inicio-interaccion");
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

audioFondo.addEventListener("ended", reproducirAleatorio);

function iniciarAudio() {
  document.body.style.overflow = "auto";
  reproducirAleatorio();
  inicioOverlay.style.display = "none";
  window.removeEventListener("scroll", iniciarAudio);
  window.removeEventListener("click", iniciarAudio);
  window.removeEventListener("touchstart", iniciarAudio);
}

["scroll", "click", "touchstart"].forEach(evt => {
  window.addEventListener(evt, iniciarAudio, { once: true });
});
inicioOverlay.addEventListener("click", iniciarAudio);

