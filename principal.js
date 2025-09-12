const imagenes = [
  { name: "Virgen de Guadalupe", url: "img/virgen1.png", descripcion: "La Virgen de Guadalupe es una de las figuras más veneradas de la cultura mexicana, simbolizando la fe y la protección. Su aparición en 1531 a Juan Diego se ha convertido en un ícono de esperanza." },
  { name: "Virgen María", url: "img/virgen2.png", descripcion: "La Virgen María, madre de Jesús, es considerada la madre espiritual de la humanidad. Su figura es venerada en numerosas culturas y religiones." },
  { name: "Virgen de Fátima", url: "img/virgen3.png", descripcion: "La Virgen de Fátima apareció en 1917 en Portugal a tres niños pastores, transmitiendo mensajes de paz, penitencia y esperanza." },
  { name: "Virgen de Luján", url: "img/virgen4.png", descripcion: "La Virgen de Luján es una de las principales advocaciones marianas de Argentina, símbolo de protección y fe para los creyentes de ese país." },
  { name: "Virgen de Czestochowa", url: "img/virgen5.png", descripcion: "La Virgen de Czestochowa, conocida como la 'Madonna Negra', es una de las imágenes más veneradas en Polonia, famosa por su milagrosa protección." },
  { name: "Virgen de Lourdes", url: "img/virgen6.png", descripcion: "La Virgen de Lourdes, quien apareció en 1858 en Francia a Bernadette Soubirous, es conocida por los milagros de sanación que se le atribuyen." },
  { name: "Virgen de la Caridad", url: "img/virgen7.png", descripcion: "La Virgen de la Caridad del Cobre es la patrona de Cuba, símbolo de unidad, fe y esperanza para los cubanos." },
  { name: "Virgen del Carmen", url: "img/virgen8.png", descripcion: "La Virgen del Carmen es una de las advocaciones marianas más veneradas, especialmente entre los marineros, como protectora y guía espiritual." },
  { name: "Virgen de Montserrat", url: "img/virgen9.png", descripcion: "La Virgen de Montserrat es una imagen venerada en Cataluña, España. Es conocida por su fuerza espiritual y protección." },
  { name: "Virgen de la Medalla Milagrosa", url: "img/virgen10.png", descripcion: "La Virgen de la Medalla Milagrosa es una imagen que se asocia con la protección divina y la fe, conocida por los milagros que se dice han ocurrido gracias a ella." },
  { name: "Virgen de la Sagrada Familia", url: "img/virgen11.png", descripcion: "La Virgen de la Sagrada Familia refleja la unidad y amor en la familia, promoviendo la paz y la armonía en los hogares." },
  { name: "Virgen de la Nube", url: "img/virgen12.png", descripcion: "La Virgen de la Nube es una advocación menos conocida pero igualmente importante, simbolizando la protección y la esperanza en tiempos de adversidad." },
  { name: "Virgen de la Anunciación", url: "img/virgen13.png", descripcion: "La Virgen de la Anunciación se celebra como el momento en que María recibió el mensaje de Dios, un símbolo de fe y obediencia." },
  { name: "Virgen de los Remedios", url: "img/virgen14.png", descripcion: "La Virgen de los Remedios es invocada como la protectora en momentos de enfermedad y dolor, brindando consuelo a los afligidos." },
  { name: "Virgen de la Misericordia", url: "img/virgen15.png", descripcion: "La Virgen de la Misericordia es conocida por su capacidad de interceder ante Dios y otorgar perdón y sanación." },
  { name: "Virgen de Guadalupe de Extremadura", url: "img/virgen16.png", descripcion: "La Virgen de Guadalupe de Extremadura es una de las variantes de la Virgen Guadalupe, venerada en España y asociada a la paz y la esperanza." },
  { name: "Virgen de la Esperanza", url: "img/virgen17.png", descripcion: "La Virgen de la Esperanza es un símbolo de la luz que llega en medio de la oscuridad, otorgando fuerza a quienes la invocan." },
  { name: "Virgen de la Paz", url: "img/virgen18.png", descripcion: "La Virgen de la Paz es venerada en Venezuela, siendo la patrona de la paz, la reconciliación y la unidad entre los pueblos." },
  { name: "Virgen del Pilar", url: "img/virgen19.png", descripcion: "La Virgen del Pilar es una de las imágenes más veneradas en Zaragoza, España, y es considerada la madre de la iglesia en ese país." },
  { name: "Virgen de las Mercedes", url: "img/virgen20.png", descripcion: "La Virgen de las Mercedes es conocida por ser la protectora de los cautivos y la liberación espiritual." }
];

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

  if (comentario) {
    const audioContainer = document.getElementById(`audio-${index}`);

    // Detener cualquier otro audio sonando
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });

    // Reproducir el audio correspondiente automáticamente
    audioContainer.innerHTML = `
      <p>La virgencita te deja este consejo:</p>
      <audio controls autoplay>
        <source src="audio/virgen${index + 1}.mp3" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
      </audio>
    `;
    textarea.value = '';
  }
}

/* --- 🎶 Reproducción aleatoria de los 4 audios de fondo --- */
const audiosFondo = [
  "audio/audiofondo1.mp3",
  "audio/audiofondo2.mp3",
  "audio/audiofondo3.mp3",
  "audio/audiofondo4.mp3"
];

const audioFondo = new Audio();
audioFondo.volume = 0; // empieza muteado
audioFondo.autoplay = true;

function reproducirAleatorio() {
  const indice = Math.floor(Math.random() * audiosFondo.length);
  audioFondo.src = audiosFondo[indice];
  audioFondo.play().then(() => {
    setTimeout(() => {
      audioFondo.volume = 0.5; // sube volumen después de un segundo
    }, 1000);
  }).catch(err => {
    console.log("Autoplay bloqueado por el navegador:", err);
  });
}

audioFondo.addEventListener("ended", reproducirAleatorio);

window.addEventListener("load", reproducirAleatorio);


