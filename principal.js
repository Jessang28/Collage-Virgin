const collage = document.getElementById("collage");
const descripcion = document.getElementById("descripcion");
const textoDescripcion = document.getElementById("texto-descripcion");
const overlay = document.getElementById("inicio-interaccion");
const audioFondo = document.getElementById("audio-fondo");

const virgenes = [
  { nombre: "Virgen del Duelo", carpeta: "archivo/fotos", imagenes: ["foto_duelo1.jpeg", "foto_duelo2.jpeg"] },
  { nombre: "Virgen de la Infancia", carpeta: "archivo/fotos", imagenes: ["foto_infancia1.jpeg", "foto_infancia2.jpeg", "foto_infancia3.jpeg", "foto_infancia4.jpeg", "foto_infancia5.jpeg", "foto_infancia6.jpeg"] }
];

// AUDIO aleatorio (opcional)
const audios = ["audio1.mp3", "audio2.mp3"];
audioFondo.src = "audio/" + audios[Math.floor(Math.random() * audios.length)];

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  audioFondo.play().catch(() => {});
});

function mostrarCollage() {
  collage.innerHTML = "";
  virgenes.forEach((virgen, index) => {
    const div = document.createElement("div");
    div.classList.add("virgen");
    div.innerHTML = `
      <img src="img/virgen${index + 1}.png" alt="${virgen.nombre}">
      <h3>${virgen.nombre}</h3>
    `;
    div.onclick = () => abrirDescripcion(index);
    collage.appendChild(div);
  });
}

function abrirDescripcion(index) {
  const virgen = virgenes[index];
  descripcion.style.display = "block";
  collage.style.display = "none";

  textoDescripcion.innerHTML = virgen.imagenes
    .map(img => `<img src="${virgen.carpeta}/${img}" alt="${virgen.nombre}">`)
    .join("");
}

function cerrarDescripcion() {
  descripcion.style.display = "none";
  collage.style.display = "grid";
}

mostrarCollage();
