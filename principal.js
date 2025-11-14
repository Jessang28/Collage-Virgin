// LISTA DE VÍRGENES (19)
const imagenes = [
  { name: "Virgen 1", url: "img/virgen1.png", fotos: ["archivo/fotos/foto_duelo1.jpeg", "archivo/fotos/foto_duelo2.jpeg"] },
  { name: "Virgen 2", url: "img/virgen2.png", fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen 3", url: "img/virgen3.png", fotos: ["archivo/fotos/foto_infancia3.jpeg", "archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen 4", url: "img/virgen4.png", fotos: ["archivo/fotos/foto_infancia5.jpeg", "archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen 5", url: "img/virgen5.png", fotos: ["archivo/fotos/foto_infancia1.jpeg"] },
  { name: "Virgen 6", url: "img/virgen6.png", fotos: ["archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen 7", url: "img/virgen7.png", fotos: ["archivo/fotos/foto_infancia3.jpeg"] },
  { name: "Virgen 8", url: "img/virgen8.png", fotos: ["archivo/fotos/foto_duelo1.jpeg"] },
  { name: "Virgen 9", url: "img/virgen9.png", fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen 10", url: "img/virgen10.png", fotos: ["archivo/fotos/foto_infancia3.jpeg"] },
  { name: "Virgen 11", url: "img/virgen11.png", fotos: ["archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen 12", url: "img/virgen12.png", fotos: ["archivo/fotos/foto_infancia5.jpeg"] },
  { name: "Virgen 13", url: "img/virgen13.png", fotos: ["archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen 14", url: "img/virgen14.png", fotos: ["archivo/fotos/foto_duelo2.jpeg"] },
  { name: "Virgen 15", url: "img/virgen15.png", fotos: ["archivo/fotos/foto_infancia1.jpeg"] },
  { name: "Virgen 16", url: "img/virgen16.png", fotos: ["archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen 17", url: "img/virgen17.png", fotos: ["archivo/fotos/foto_infancia3.jpeg"] },
  { name: "Virgen 18", url: "img/virgen18.png", fotos: ["archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen 19", url: "img/virgen19.png", fotos: ["archivo/fotos/foto_infancia5.jpeg"] }
];

const container = document.getElementById("collage");
const descripcionDiv = document.getElementById("descripcion");
const textoDescripcion = document.getElementById("texto-descripcion");

// CREAR VÍRGENES EN POSICIONES RANDOM
imagenes.forEach(img => {
  const item = document.createElement("div");
  item.className = "collage-item";

  item.style.left = `${Math.random() * 80}%`;
  item.style.top = `${Math.random() * 80}%`;

  const imagenElement = document.createElement("img");
  imagenElement.src = img.url;

  const nombre = document.createElement("div");
  nombre.className = "nombre-virgen";
  nombre.textContent = img.name;

  item.appendChild(imagenElement);
  item.appendChild(nombre);

  item.addEventListener("click", () => {
    const collageInterno = img.fotos
      .map(f => `<img src="${f}" class="foto-interna">`)
      .join("");

    textoDescripcion.innerHTML = `<div class="collage-interno">${collageInterno}</div>`;
    descripcionDiv.style.display = "flex";
  });

  container.appendChild(item);
});

function cerrarDescripcion() {
  descripcionDiv.style.display = "none";
}

// AUDIO aleatorio
const audioFondo = document.getElementById("audio-fondo");
const audios = [
  "audio/audio1.mp3",
  "audio/audio2.mp3",
  "audio/audio3.mp3",
  "audio/audio4.mp3"
];

function reproducirAleatorio() {
  audioFondo.src = audios[Math.floor(Math.random() * audios.length)];
  audioFondo.play();
}

document.getElementById("inicio-interaccion").addEventListener("click", () => {
  reproducirAleatorio();
  document.getElementById("inicio-interaccion").style.display = "none";
});
