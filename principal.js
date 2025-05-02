const virgenes = [
  { nombre: "Virgen de Guadalupe", imagen: "img/virgen1.png", descripcion: "Patrona de México." },
  { nombre: "Virgen del Carmen", imagen: "img/virgen2.png", descripcion: "Protectora de los marineros." },
  { nombre: "Virgen de Fátima", imagen: "img/virgen3.png", descripcion: "Apareció en Portugal." },
  { nombre: "Virgen de la Candelaria", imagen: "img/virgen4.png", descripcion: "Celebrada con danzas." },
  { nombre: "Virgen del Rosario", imagen: "img/virgen5.png", descripcion: "Símbolo de oración constante." },
  { nombre: "Virgen de los Dolores", imagen: "img/virgen6.png", descripcion: "Dolor maternal y compasión." },
  { nombre: "Virgen de la Merced", imagen: "img/virgen7.png", descripcion: "Liberadora de cautivos." },
  { nombre: "Virgen de Chiquinquirá", imagen: "img/virgen8.png", descripcion: "Patrona de Colombia." }
];

const fuentes = [
  "Georgia, serif",
  "'Courier New', monospace",
  "'Lucida Console', monospace",
  "'Comic Sans MS', cursive, sans-serif",
  "'Brush Script MT', cursive",
  "'Times New Roman', Times, serif",
  "'Impact', Charcoal, sans-serif"
];

const collage = document.getElementById("collage");
const descripcion = document.getElementById("descripcion");
const descripcionTexto = descripcion.querySelector("p");
const closeBtn = document.querySelector(".close");

virgenes.forEach((virgen, i) => {
  const div = document.createElement("div");
  div.className = "image-container";
  div.style.left = Math.random() * 90 + "vw";
  div.style.top = Math.random() * 80 + "vh";

  const img = document.createElement("img");
  img.src = virgen.imagen;
  img.alt = virgen.nombre;

  const texto = document.createElement("p");
  texto.textContent = virgen.nombre;
  texto.style.fontFamily = fuentes[Math.floor(Math.random() * fuentes.length)];

  div.appendChild(img);
  div.appendChild(texto);

  div.addEventListener("click", () => {
    descripcion.style.display = "block";
    descripcionTexto.textContent = virgen.descripcion;
  });

  collage.appendChild(div);
});

closeBtn.addEventListener("click", () => {
  descripcion.style.display = "none";
});


