// Arreglo de imágenes con rutas locales
const imagenes = [
  {
    name: "Virgen de Guadalupe",
    url: "img/virgen1.jpg",  // Ruta local de la imagen 1
  },
  {
    name: "Virgen María",
    url: "img/virgen2.jpg",  // Ruta local de la imagen 2
  },
  {
    name: "Virgen de Fátima",
    url: "img/virgen3.jpg",  // Ruta local de la imagen 3
  },
  {
    name: "Virgen de Luján",
    url: "img/virgen4.jpg",  // Ruta local de la imagen 4
  },
  {
    name: "Virgen de Czestochowa",
    url: "img/virgen5.jpg",  // Ruta local de la imagen 5
  },
  {
    name: "Virgen de Lourdes",
    url: "img/virgen6.jpg",  // Ruta local de la imagen 6
  },
  {
    name: "Virgen de la Caridad",
    url: "img/virgen7.jpg",  // Ruta local de la imagen 7
  },
  {
    name: "Virgen del Carmen",
    url: "img/virgen8.jpg",  // Ruta local de la imagen 8
  },
  {
    name: "Virgen de Montserrat",
    url: "img/virgen9.jpg",  // Ruta local de la imagen 9
  },
  {
    name: "Virgen de la Medalla Milagrosa",
    url: "img/virgen10.jpg",  // Ruta local de la imagen 10
  },
  {
    name: "Virgen de la Sagrada Familia",
    url: "img/virgen11.jpg",  // Ruta local de la imagen 11
  },
  {
    name: "Virgen de la Nube",
    url: "img/virgen12.jpg",  // Ruta local de la imagen 12
  },
  {
    name: "Virgen de la Anunciación",
    url: "img/virgen13.jpg",  // Ruta local de la imagen 13
  },
  {
    name: "Virgen de los Remedios",
    url: "img/virgen14.jpg",  // Ruta local de la imagen 14
  },
  {
    name: "Virgen de la Misericordia",
    url: "img/virgen15.jpg",  // Ruta local de la imagen 15
  },
  {
    name: "Virgen de Guadalupe de Extremadura",
    url: "img/virgen16.jpg",  // Ruta local de la imagen 16
  },
  {
    name: "Virgen de la Esperanza",
    url: "img/virgen17.jpg",  // Ruta local de la imagen 17
  },
  {
    name: "Virgen de la Paz",
    url: "img/virgen18.jpg",  // Ruta local de la imagen 18
  },
  {
    name: "Virgen del Pilar",
    url: "img/virgen19.jpg",  // Ruta local de la imagen 19
  },
  {
    name: "Virgen de las Mercedes",
    url: "img/virgen20.jpg",  // Ruta local de la imagen 20
  }
];

// Aquí añades la lógica para cargar las imágenes y hacer el collage en el HTML
const container = document.getElementById('collage'); // Asegúrate de tener un contenedor con id="collage" en tu HTML

imagenes.forEach(imagen => {
  const imgElement = document.createElement('img');
  imgElement.src = imagen.url;
  imgElement.alt = imagen.name;
  imgElement.title = imagen.name;

  // Puedes aplicar un estilo aleatorio o específico a cada imagen
  imgElement.style.position = 'absolute';
  imgElement.style.width = '200px'; // Ajusta el tamaño de las imágenes
  imgElement.style.height = 'auto';
  imgElement.style.left = `${Math.random() * 90}%`; // Posición aleatoria en el eje X
  imgElement.style.top = `${Math.random() * 90}%`; // Posición aleatoria en el eje Y

  container.appendChild(imgElement);
});

