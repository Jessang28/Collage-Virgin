// LISTA DE VÍRGENES (19)
const imagenes = [
  {
    name: "Virgen de Guadalupe",
    url: "img/virgen1.png",
    descripcion: "La Virgen de Guadalupe es una de las figuras más veneradas de la cultura mexicana, simbolizando la fe y la protección. Su aparición en 1531 a Juan Diego se ha convertido en un ícono de esperanza.",
    oracion: "Madre de la esperanza, acompáñame en este desamor. Abrázame cuando el corazón duela y guíame a la luz después de tanta pérdida.",
    fotos: ["archivo/fotos/foto_duelo1.jpeg", "archivo/fotos/foto_duelo2.jpeg"]
  },
  {
    name: "Virgen María",
    url: "img/virgen2.png",
    descripcion: "La Virgen María, madre de Jesús, es considerada la madre espiritual de la humanidad. Su figura es venerada en numerosas culturas y religiones.",
    oracion: "Madre amorosa, cúrame el alma rota. Que tu ternura envuelva mis heridas y me devuelva la calma.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de Fátima",
    url: "img/virgen3.png",
    descripcion: "La Virgen de Fátima apareció en 1917 en Portugal a tres niños pastores, transmitiendo mensajes de paz, penitencia y esperanza.",
    oracion: "Señora de Fátima, dame serenidad cuando la memoria duela y fuerza para soltar lo que ya no vuelve.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg", "archivo/fotos/foto_infancia4.jpeg"]
  },
  {
    name: "Virgen de Luján",
    url: "img/virgen4.png",
    descripcion: "La Virgen de Luján es una de las principales advocaciones marianas de Argentina, símbolo de protección y fe.",
    oracion: "Virgencita de Luján, protégeme del dolor que insiste en quedarse. Dame paz en medio de la nostalgia.",
    fotos: ["archivo/fotos/foto_infancia5.jpeg", "archivo/fotos/foto_infancia6.jpeg"]
  },
  {
    name: "Virgen de Czestochowa",
    url: "img/virgen5.png",
    descripcion: "La Virgen de Czestochowa, la 'Madonna Negra', es una de las imágenes más veneradas en Polonia, famosa por su protección.",
    oracion: "Madonna Negra, guarda mi corazón herido y acompáñame en esta noche larga del alma.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg"]
  },
  {
    name: "Virgen de Lourdes",
    url: "img/virgen6.png",
    descripcion: "La Virgen de Lourdes es conocida por los milagros de sanación que se le atribuyen.",
    oracion: "Dulce Señora de Lourdes, báñame en tu agua de consuelo. Sana mis duelos, mis sombras y mi soledad.",
    fotos: ["archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de la Caridad",
    url: "img/virgen7.png",
    descripcion: "La Virgen de la Caridad del Cobre es la patrona de Cuba, símbolo de unidad y esperanza.",
    oracion: "Virgen de la Caridad, recógeme cuando caiga en recuerdos que duelen. Abrázame en mi desamparo.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg"]
  },
  {
    name: "Virgen del Carmen",
    url: "img/virgen8.png",
    descripcion: "La Virgen del Carmen es venerada como protectora y guía, especialmente entre marineros.",
    oracion: "Madre del Carmen, llévame a puerto seguro cuando mi alma sienta que naufraga.",
    fotos: ["archivo/fotos/foto_duelo1.jpeg"]
  },
  {
    name: "Virgen de Montserrat",
    url: "img/virgen9.png",
    descripcion: "La Virgen de Montserrat es una imagen venerada en Cataluña, conocida por su fuerza espiritual.",
    oracion: "Señora Moreneta, dame fortaleza para sostenerme cuando la tristeza me tiemble por dentro.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de la Medalla Milagrosa",
    url: "img/virgen10.png",
    descripcion: "La Virgen de la Medalla Milagrosa es símbolo de protección y fe.",
    oracion: "Virgen Milagrosa, cúbreme con tu luz cuando mi corazón se sienta abandonado.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg"]
  },
  {
    name: "Virgen de la Sagrada Familia",
    url: "img/virgen11.png",
    descripcion: "La Virgen de la Sagrada Familia representa la unión y el amor en el hogar.",
    oracion: "Madre Sagrada, devuélveme la sensación de hogar dentro de mí, aun cuando todo afuera se desmorone.",
    fotos: ["archivo/fotos/foto_infancia4.jpeg"]
  },
  {
    name: "Virgen de la Nube",
    url: "img/virgen12.png",
    descripcion: "La Virgen de la Nube simboliza protección y esperanza en tiempos difíciles.",
    oracion: "Virgen de la Nube, cúbreme con tu sombra suave cuando el duelo me nuble el alma.",
    fotos: ["archivo/fotos/foto_infancia5.jpeg"]
  },
  {
    name: "Virgen de la Anunciación",
    url: "img/virgen13.png",
    descripcion: "La Virgen de la Anunciación es símbolo de fe, aceptación y entrega.",
    oracion: "Madre de la Anunciación, ayúdame a aceptar lo que ya no es, y a abrirme a lo que viene.",
    fotos: ["archivo/fotos/foto_infancia6.jpeg"]
  },
  {
    name: "Virgen de los Remedios",
    url: "img/virgen14.png",
    descripcion: "La Virgen de los Remedios es invocada para aliviar el dolor y el sufrimiento.",
    oracion: "Señora de los Remedios, alivia este nudo en mi pecho y esta punzada de ausencia.",
    fotos: ["archivo/fotos/foto_duelo2.jpeg"]
  },
  {
    name: "Virgen de la Misericordia",
    url: "img/virgen15.png",
    descripcion: "La Virgen de la Misericordia es conocida por su perdón y su capacidad de sanar el espíritu.",
    oracion: "Dame misericordia para conmigo misma, Madre. Enséñame a perdonarme por amar tanto.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg"]
  },
  {
    name: "Virgen de Guadalupe de Extremadura",
    url: "img/virgen16.png",
    descripcion: "Venerada en España, asociada a la paz y la esperanza.",
    oracion: "Virgencita de Extremadura, que tu paz me encuentre incluso en medio del desamor.",
    fotos: ["archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de la Esperanza",
    url: "img/virgen17.png",
    descripcion: "La Virgen de la Esperanza simboliza la luz en la oscuridad.",
    oracion: "Señora de la Esperanza, ilumina este duelo que parece eterno.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg"]
  },
  {
    name: "Virgen de la Paz",
    url: "img/virgen18.png",
    descripcion: "La Virgen de la Paz es patrona de la reconciliación y la calma.",
    oracion: "Dame paz, Madre, para cerrar este ciclo sin rabia y sin miedo.",
    fotos: ["archivo/fotos/foto_infancia4.jpeg"]
  },
  {
    name: "Virgen del Pilar",
    url: "img/virgen19.png",
    descripcion: "La Virgen del Pilar es una de las imágenes más veneradas en Zaragoza.",
    oracion: "Virgen del Pilar, sé columna firme cuando mi corazón sienta que se quiebra.",
    fotos: ["archivo/fotos/foto_infancia5.jpeg"]
  }
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

  textoDescripcion.innerHTML = `
    <h2 style="font-size:2rem; margin-bottom:20px;">${img.name}</h2>
    <p style="font-size:1.2rem; margin-bottom:20px;">${img.descripcion}</p>
    <p style="font-style:italic; margin-bottom:40px;">${img.oracion}</p>
    <div class="collage-interno">
      ${collageInterno}
    </div>
  `;

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

const inicio = document.getElementById("inicio-interaccion");

function iniciarTodo() {
  reproducirAleatorio();
  inicio.style.display = "none";
}

inicio.addEventListener("click", iniciarTodo);
inicio.addEventListener("wheel", iniciarTodo);  // también funciona con scroll
inicio.addEventListener("touchstart", iniciarTodo);
