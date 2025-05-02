const imagenes = [
  { name: "Virgen de Guadalupe", url: "img/virgen1.png", descripcion: "La Virgen de Guadalupe, una de las advocaciones marianas más importantes de México, simboliza la unión, la fe y la protección divina. Su imagen es un símbolo de esperanza y consuelo." },
  { name: "Virgen María", url: "img/virgen2.png", descripcion: "La Virgen María, madre de Jesús, es venerada por su pureza y su maternidad divina. Representa la compasión, la ternura y el amor incondicional." },
  { name: "Virgen de Fátima", url: "img/virgen3.png", descripcion: "La Virgen de Fátima, aparecida en Portugal en 1917, es conocida por sus mensajes de oración y penitencia. Es una figura central en la devoción mariana de muchos países." },
  { name: "Virgen de Luján", url: "img/virgen4.png", descripcion: "La Virgen de Luján, patrona de Argentina, es símbolo de unidad y protección para el pueblo argentino, especialmente en tiempos de dificultad." },
  { name: "Virgen de Czestochowa", url: "img/virgen5.png", descripcion: "La Virgen de Czestochowa, también conocida como la Madonna Negra, es una imagen sagrada venerada en Polonia, considerada milagrosa y símbolo de resistencia y esperanza." },
  { name: "Virgen de Lourdes", url: "img/virgen6.png", descripcion: "La Virgen de Lourdes, conocida por sus apariciones en Francia en 1858, es una figura de fe y sanación, invocada por aquellos que buscan consuelo espiritual y físico." },
  { name: "Virgen de la Caridad", url: "img/virgen7.png", descripcion: "La Virgen de la Caridad del Cobre es la patrona de Cuba, venerada por su poder de intercesión y protección en momentos de crisis, tanto espirituales como materiales." },
  { name: "Virgen del Carmen", url: "img/virgen8.png", descripcion: "La Virgen del Carmen es una de las advocaciones más populares, asociada con la protección durante los viajes y especialmente venerada por los marineros." },
  { name: "Virgen de Montserrat", url: "img/virgen9.png", descripcion: "La Virgen de Montserrat, ubicada en Cataluña, España, es conocida por su profunda espiritualidad y es considerada la patrona de la región." },
  { name: "Virgen de la Medalla Milagrosa", url: "img/virgen10.png", descripcion: "La Virgen de la Medalla Milagrosa, cuya imagen fue revelada a Santa Catalina Labouré en 1830, es conocida por los milagros atribuidos a su medalla, la cual es vista como símbolo de protección y gracia." },
  { name: "Virgen de la Sagrada Familia", url: "img/virgen11.png", descripcion: "La Virgen de la Sagrada Familia, representa el ideal de unidad y amor familiar, mostrando a María, José y el niño Jesús como modelo de vida cristiana." },
  { name: "Virgen de la Nube", url: "img/virgen12.png", descripcion: "La Virgen de la Nube es venerada en distintas partes del mundo, considerada una protección especial sobre aquellos que se sienten perdidos o solitarios." },
  { name: "Virgen de la Anunciación", url: "img/virgen13.png", descripcion: "La Virgen de la Anunciación es una representación de la obediencia y fe de María al recibir el mensaje del ángel Gabriel, aceptando ser la madre del Salvador." },
  { name: "Virgen de los Remedios", url: "img/virgen14.png", descripcion: "La Virgen de los Remedios es venerada en diversas regiones de Hispanoamérica, siendo conocida como la protectora en tiempos de calamidad y adversidad." },
  { name: "Virgen de la Misericordia", url: "img/virgen15.png", descripcion: "La Virgen de la Misericordia, simboliza el perdón y la compasión divina, siendo invocada por aquellos que buscan la misericordia de Dios ante sus pecados." },
  { name: "Virgen de Guadalupe de Extremadura", url: "img/virgen16.png", descripcion: "La Virgen de Guadalupe de Extremadura es una advocación mariana originaria de España, venerada por su capacidad de conceder favores y milagros." },
  { name: "Virgen de la Esperanza", url: "img/virgen17.png", descripcion: "La Virgen de la Esperanza, especialmente venerada en España, representa la confianza y la fe en tiempos de dificultad, siendo un símbolo de esperanza en los momentos oscuros." },
  { name: "Virgen de la Paz", url: "img/virgen18.png", descripcion: "La Virgen de la Paz es invocada por su poder de reconciliación y paz, siendo una figura central en la oración por la paz mundial." },
  { name: "Virgen del Pilar", url: "img/virgen19.png", descripcion: "La Virgen del Pilar, patrona de Zaragoza y España, es una de las imágenes marianas más antiguas, conocida por su poder de intercesión y ayuda en tiempos de guerra y paz." },
  { name: "Virgen de las Mercedes", url: "img/virgen20.png", descripcion: "La Virgen de las Mercedes es conocida por ser la protectora de los cautivos, especialmente venerada en el ámbito de la libertad y la justicia." }
];

const container = document.getElementById('collage');
const descripcionContainer = document.getElementById('descripcion');

imagenes.forEach(imagen => {
  const item = document.createElement('div');
  item.className = 'collage-item';
  item.style.left = `${Math.random() * 70}%`;
  item.style.top = `${Math.random() * 70}%`;

  const imgElement = document.createElement('img');
  imgElement.src = imagen.url;
  imgElement.alt = imagen.name;

  const nameElement = document.createElement('div');
  nameElement.className = 'nombre';
  nameElement.textContent = imagen.name;

  item.appendChild(imgElement);
  item.appendChild(nameElement);
  container.appendChild(item);

  item.addEventListener('click', () => {
    // Crear texto aleatorio de la descripción
    const descripcionText = imagen.descripcion.split(' ').map(word => {
      const span = document.createElement('span');
      span.textContent = word;
      const fonts = ['Arial', 'Georgia', 'Times New Roman', 'Courier New'];
      span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
      span.style.fontSize = `${Math.floor(Math.random() * 40) + 20}px`;
      span.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      return span;
    });

    descripcionContainer.innerHTML = '';  // Limpiar contenido anterior
    descripcionText.forEach(span => descripcionContainer.appendChild(span));
    descripcionContainer.style.display = 'flex';
  });
});

document.querySelector('.close').addEventListener('click', () => {
  descripcionContainer.style.display = 'none';
});

