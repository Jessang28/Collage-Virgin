// LISTA DE VÍRGENES (19) - nombres, oraciones, y fotos internas (usaste estas rutas)
const imagenes = [
  {
    name: "Virgen de Guadalupe",
    url: "img/virgen1.png",
    descripcion: "La Virgen de Guadalupe es una de las figuras más veneradas de la cultura mexicana, simbolizando la fe y la protección.",
    oracion: "Madre de la esperanza, acompáñame en este desamor.",
    fotos: ["archivo/fotos/foto_duelo1.jpeg", "archivo/fotos/foto_duelo2.jpeg"]
  },
  {
    name: "Virgen María",
    url: "img/virgen2.png",
    descripcion: "La Virgen María, madre de Jesús, es considerada la madre espiritual de la humanidad.",
    oracion: "Madre amorosa, cúrame el alma rota.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de Fátima",
    url: "img/virgen3.png",
    descripcion: "La Virgen de Fátima apareció en 1917 en Portugal a tres niños pastores.",
    oracion: "Señora de Fátima, dame serenidad cuando la memoria duela.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg", "archivo/fotos/foto_infancia4.jpeg"]
  },
  {
    name: "Virgen de Luján",
    url: "img/virgen4.png",
    descripcion: "La Virgen de Luján es una de las principales advocaciones marianas de Argentina.",
    oracion: "Virgencita de Luján, protégeme del dolor persistente.",
    fotos: ["archivo/fotos/foto_infancia5.jpeg", "archivo/fotos/foto_infancia6.jpeg"]
  },
  {
    name: "Virgen de Czestochowa",
    url: "img/virgen5.png",
    descripcion: "La Madonna Negra, venerada por su protección.",
    oracion: "Madonna Negra, guarda mi corazón herido.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg"]
  },
  {
    name: "Virgen de Lourdes",
    url: "img/virgen6.png",
    descripcion: "La Virgen de Lourdes es conocida por los milagros de sanación.",
    oracion: "Señora de Lourdes, sana mis duelos.",
    fotos: ["archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de la Caridad",
    url: "img/virgen7.png",
    descripcion: "La Virgen de la Caridad del Cobre es patrona de Cuba.",
    oracion: "Virgen de la Caridad, abrázame en mi desamparo.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg"]
  },
  {
    name: "Virgen del Carmen",
    url: "img/virgen8.png",
    descripcion: "La Virgen del Carmen es protectora y guía.",
    oracion: "Madre del Carmen, llévame a puerto seguro.",
    fotos: ["archivo/fotos/foto_duelo1.jpeg"]
  },
  {
    name: "Virgen de Montserrat",
    url: "img/virgen9.png",
    descripcion: "La Virgen de Montserrat, la Moreneta, símbolo de fuerza.",
    oracion: "Señora Moreneta, dame fortaleza.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg", "archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de la Medalla Milagrosa",
    url: "img/virgen10.png",
    descripcion: "La Virgen de la Medalla Milagrosa es símbolo de protección.",
    oracion: "Virgen Milagrosa, cúbreme con tu luz.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg"]
  },
  {
    name: "Virgen de la Sagrada Familia",
    url: "img/virgen11.png",
    descripcion: "La Virgen de la Sagrada Familia representa la unión familiar.",
    oracion: "Madre Sagrada, devuélveme la sensación de hogar.",
    fotos: ["archivo/fotos/foto_infancia4.jpeg"]
  },
  {
    name: "Virgen de la Nube",
    url: "img/virgen12.png",
    descripcion: "Virgen de la Nube, símbolo de protección en adversidad.",
    oracion: "Virgen de la Nube, cúbreme con tu sombra suave.",
    fotos: ["archivo/fotos/foto_infancia5.jpeg"]
  },
  {
    name: "Virgen de la Anunciación",
    url: "img/virgen13.png",
    descripcion: "La Virgen de la Anunciación simboliza la aceptación.",
    oracion: "Madre de la Anunciación, ayúdame a aceptar.",
    fotos: ["archivo/fotos/foto_infancia6.jpeg"]
  },
  {
    name: "Virgen de los Remedios",
    url: "img/virgen14.png",
    descripcion: "La Virgen de los Remedios alivia el sufrimiento.",
    oracion: "Señora de los Remedios, alivia este nudo en mi pecho.",
    fotos: ["archivo/fotos/foto_duelo2.jpeg"]
  },
  {
    name: "Virgen de la Misericordia",
    url: "img/virgen15.png",
    descripcion: "La Virgen de la Misericordia es símbolo de perdón.",
    oracion: "Dame misericordia para conmigo misma, Madre.",
    fotos: ["archivo/fotos/foto_infancia1.jpeg"]
  },
  {
    name: "Virgen de Guadalupe de Extremadura",
    url: "img/virgen16.png",
    descripcion: "Venerada en España, asociada a la paz.",
    oracion: "Virgencita de Extremadura, que tu paz me encuentre.",
    fotos: ["archivo/fotos/foto_infancia2.jpeg"]
  },
  {
    name: "Virgen de la Esperanza",
    url: "img/virgen17.png",
    descripcion: "La Virgen de la Esperanza simboliza la luz en la oscuridad.",
    oracion: "Señora de la Esperanza, ilumina este duelo.",
    fotos: ["archivo/fotos/foto_infancia3.jpeg"]
  },
  {
    name: "Virgen de la Paz",
    url: "img/virgen18.png",
    descripcion: "La Virgen de la Paz es patrona de la calma.",
    oracion: "Dame paz, Madre, para cerrar este ciclo.",
    fotos: ["archivo/fotos/foto_infancia4.jpeg"]
  },
  {
    name: "Virgen del Pilar",
    url: "img/virgen19.png",
    descripcion: "La Virgen del Pilar, venerada en Zaragoza.",
    oracion: "Virgen del Pilar, sé columna firme para mi.",
    fotos: ["archivo/fotos/foto_infancia5.jpeg"]
  }
];

const container = document.getElementById("collage");
const descripcionDiv = document.getElementById("descripcion");
const textoDescripcion = document.getElementById("texto-descripcion");

// --- Crear las vírgenes en posiciones aleatorias y añadir flotación ---
imagenes.forEach((img, index) => {
  const item = document.createElement("div");
  item.className = "collage-item flotante"; // agrego flotante aquí
  // pequeñas variaciones para que no se solapen tanto
  item.style.left = `${5 + Math.random() * 75}%`;
  item.style.top = `${5 + Math.random() * 75}%`;

  const imagenElement = document.createElement("img");
  imagenElement.src = img.url;
  imagenElement.alt = img.name;
  imagenElement.draggable = false;

  const nombre = document.createElement("div");
  nombre.className = "nombre-virgen";
  nombre.textContent = img.name;

  item.appendChild(imagenElement);
  item.appendChild(nombre);

  item.addEventListener("click", () => {
    // generamos markup que SOLO incluye nombre + oración + las fotos internas
    const collageInterno = img.fotos
      .map(f => `<img src="${f}" class="foto-interna" alt="foto interna">`)
      .join("");

    textoDescripcion.innerHTML = `
      <div class="nombre-overlay">${img.name}</div>
      <div class="oracion">${img.oracion}</div>
      <div class="collage-interno">
        ${collageInterno}
      </div>
    `;
    descripcionDiv.style.display = "flex";
    // asegurar que el overlay capture clicks (para volver con el botón)
  });

  container.appendChild(item);
});

// cerrar overlay
function cerrarDescripcion() {
  descripcionDiv.style.display = "none";
}

// -----------------------------------------------------------
// Manejo del CORAZÓN y AVE: si ya están en HTML, los usamos y evitamos crear duplicados.
// Solo posicionamos y nos aseguramos que floten y tengan el tamaño correcto.
// -----------------------------------------------------------
function posicionarExtraPorId(id, anchoPx = 420) {
  const el = document.getElementById(id);
  if (!el) return false;
  // el contenedor interno (imagen) tiene clase .extra-img
  const img = el.querySelector('img') || el;
  // tamaño
  if (img) img.style.width = anchoPx + "px";
  // posición aleatoria dentro del collage
  el.style.left = `${5 + Math.random() * 75}%`;
  el.style.top = `${5 + Math.random() * 75}%`;
  // marcar como flotante (clase CSS)
  el.classList.add('flotante');
  // asegurar que el click ya existente funcione (HTML también añade listeners)
  return true;
}

// Si existen en el HTML (como en tu archivo), no crear otros — solo posicionar:
posicionarExtraPorId('corazon', 420);
posicionarExtraPorId('ave', 420);

// --- Si por alguna razón NO existen en HTML (fallback), crearlos solo UNA VEZ ---
function crearExtraElementoSiNoExiste(id, imagenSrc, linkDestino, anchoPx = 420) {
  if (document.getElementById(id)) return; // ya existe, no crear
  const wrapper = document.createElement('div');
  wrapper.id = id;
  wrapper.className = 'extra-item flotante';
  wrapper.style.position = 'absolute';
  wrapper.style.left = `${5 + Math.random() * 75}%`;
  wrapper.style.top = `${5 + Math.random() * 75}%`;
  const img = document.createElement('img');
  img.src = imagenSrc;
  img.className = 'extra-img';
  img.style.width = anchoPx + 'px';
  img.alt = id;
  img.draggable = false;
  wrapper.appendChild(img);
  wrapper.addEventListener('click', () => {
    window.location.href = linkDestino;
  });
  container.appendChild(wrapper);
}
posicionarExtraPorId('corazon', 420);
posicionarExtraPorId('ave', 420);
// -----------------------------------------------------------
// AUDIO aleatorio
// -----------------------------------------------------------
const audioFondo = document.getElementById("audio-fondo");
const audios = [
  "audio/audio1.mp3",
  "audio/audio2.mp3",
  "audio/audio3.mp3",
  "audio/audio4.mp3"
];

function reproducirAleatorio() {
  const idx = Math.floor(Math.random() * audios.length);
  audioFondo.src = audios[idx];
  // .play() puede fallar si no hubo interacción del usuario — lo llamamos después del overlay de inicio
  audioFondo.play().catch(err => {
    // no hacemos nada, el usuario no ha interactuado todavía
    console.log("play() falló (necesita interacción).", err);
  });
}

const inicio = document.getElementById("inicio-interaccion");

function iniciarTodo() {
  reproducirAleatorio();
  inicio.style.display = "none";
}

inicio.addEventListener("click", iniciarTodo);
inicio.addEventListener("wheel", iniciarTodo, { passive: true });  // scroll
inicio.addEventListener("touchstart", iniciarTodo);
