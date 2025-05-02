// Arreglo de imágenes con rutas locales en formato PNG
const imagenes = [
  { name: "Virgen de Guadalupe", url: "img/virgen1.png" },
  { name: "Virgen María", url: "img/virgen2.png" },
  { name: "Virgen de Fátima", url: "img/virgen3.png" },
  { name: "Virgen de Luján", url: "img/virgen4.png" },
  { name: "Virgen de Czestochowa", url: "img/virgen5.png" },
  { name: "Virgen de Lourdes", url: "img/virgen6.png" },
  { name: "Virgen de la Caridad", url: "img/virgen7.png" },
  { name: "Virgen del Carmen", url: "img/virgen8.png" },
  { name: "Virgen de Montserrat", url: "img/virgen9.png" },
  { name: "Virgen de la Medalla Milagrosa", url: "img/virgen10.png" },
  { name: "Virgen de la Sagrada Familia", url: "img/virgen11.png" },
  { name: "Virgen de la Nube", url: "img/virgen12.png" },
  { name: "Virgen de la Anunciación", url: "img/virgen13.png" },
  { name: "Virgen de los Remedios", url: "img/virgen14.png" },
  { name: "Virgen de la Misericordia", url: "img/virgen15.png" },
  { name: "Virgen de Guadalupe de Extremadura", url: "img/virgen16.png" },
  { name: "Virgen de la Esperanza", url: "img/virgen17.png" },
  { name: "Virgen de la Paz", url: "img/virgen18.png" },
  { name: "Virgen del Pilar", url: "img/virgen19.png" },
  { name: "Virgen de las Mercedes", url: "img/virgen20.png" }
];

// Aquí añades la lógica para cargar las imágenes y hacer el collage en el HTML
const container = document.getElementById('collage');

imagenes.forEach(imagen => {
  const imgElement = document.createElement('img');
  imgElement.src = imagen.url;
  imgElement.alt = imagen.name;
  imgElement.title = imagen.name;

  imgElement.style.position = 'absolute';
  imgElement.style.width = '200px';
  imgElement.style.height = 'auto';
  imgElement.style.left = `${Math.random() * 90}%`;
  imgElement.style.top = `${Math.random() * 90}%`;

  container.appendChild(imgElement);
});
