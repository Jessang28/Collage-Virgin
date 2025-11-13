/* principal.js - full working version
   - builds 20 collage items with names
   - on click opens description gallery with fotos from archivo/fotos (jpeg)
   - comment link + form included per gallery
   - background audio uses 4 files (random order, next chosen when ended)
   - audio only starts after first user interaction (overlay/scroll/click/touch)
*/

const imagenes = [
  { name: "Virgen de Guadalupe", url: "img/virgen1.png", fotos: ["archivo/fotos/foto_duelo1.jpeg","archivo/fotos/foto_duelo2.jpeg"] },
  { name: "Virgen María", url: "img/virgen2.png", fotos: ["archivo/fotos/foto_infancia1.jpeg","archivo/fotos/foto_infancia2.jpeg"] },
  { name: "Virgen de Fátima", url: "img/virgen3.png", fotos: ["archivo/fotos/foto_infancia3.jpeg","archivo/fotos/foto_infancia4.jpeg"] },
  { name: "Virgen de Luján", url: "img/virgen4.png", fotos: ["archivo/fotos/foto_infancia5.jpeg","archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen de Czestochowa", url: "img/virgen5.png", fotos: ["archivo/fotos/foto_duelo1.jpeg"] },
  { name: "Virgen de Lourdes", url: "img/virgen6.png", fotos: ["archivo/fotos/foto_infancia3.jpeg"] },
  { name: "Virgen de la Caridad", url: "img/virgen7.png", fotos: ["archivo/fotos/foto_infancia6.jpeg"] },
  { name: "Virgen del Carmen", url: "img/virgen8.png", fotos: ["archivo/fotos/foto_duelo1.jpeg"] },
  { name: "Virgen de Montserrat", url: "img/virgen9.png", fotos: ["archivo/fotos/foto_infancia1.jpeg"] },
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

const collage = document.getElementById('collage');
const descripcion = document.getElementById('descripcion');
const descripcionInner = document.getElementById('descripcion-inner');
const overlay = document.getElementById('inicio-interaccion');
const audioFondo = document.getElementById('audio-fondo');

// --- AUDIO setup ---
// Use the folder name you told me: "AUDIO" and files named audiofondo1..audiofondo4
const audiosFondo = [
  "AUDIO/audiofondo1.mp3",
  "AUDIO/audiofondo2.mp3",
  "AUDIO/audiofondo3.mp3",
  "AUDIO/audiofondo4.mp3"
];

function reproducirAleatorio() {
  const idx = Math.floor(Math.random() * audiosFondo.length);
  audioFondo.src = audiosFondo[idx];
  audioFondo.play().catch(err => console.log("audio play blocked:", err));
}
audioFondo.addEventListener('ended', reproducirAleatorio);

// start audio only after interaction (overlay/scroll/click/touch)
function iniciarAudioOnce(){
  if (overlay) overlay.style.display = 'none';
  // enable page scroll
  document.body.style.overflow = 'auto';
  reproducirAleatorio();
  // remove the one-time listeners
  window.removeEventListener('scroll', iniciarAudioOnce);
  window.removeEventListener('click', iniciarAudioOnce);
  window.removeEventListener('touchstart', iniciarAudioOnce);
}
['scroll','click','touchstart'].forEach(e => window.addEventListener(e, iniciarAudioOnce, { once:true }));
if (overlay) overlay.addEventListener('click', iniciarAudioOnce);

// --- build collage items (absolute positioned but within container) ---
function placeCollageItems(){
  // ensure collage has relative height
  collage.style.minHeight = '100vh';
  collage.innerHTML = ''; // clean

  imagenes.forEach((imgObj, i) => {
    const item = document.createElement('div');
    item.className = 'collage-item';
    // random position but keep inside viewport with margins
    const left = 8 + Math.random() * 74; // 8%..82%
    const top  = 6 + Math.random() * 80; // 6%..86%
    item.style.left = `${left}%`;
    item.style.top  = `${top}%`;

    const img = document.createElement('img');
    img.src = imgObj.url;
    img.alt = imgObj.name;
    img.loading = 'lazy';

    const name = document.createElement('div');
    name.className = 'nombre';
    name.textContent = imgObj.name;

    item.appendChild(img);
    item.appendChild(name);

    // click opens description gallery for this virgen
    item.addEventListener('click', () => abrirDescripcion(i));

    collage.appendChild(item);
  });
}

// --- open description for one virgen ---
function abrirDescripcion(index){
  const virgen = imagenes[index];
  // pause background audio when inside modal
  try{ audioFondo.pause(); }catch(e){}
  descripcionInner.innerHTML = '';

  // gallery
  const gallery = document.createElement('div');
  gallery.className = 'collage-interno';
  if (Array.isArray(virgen.fotos) && virgen.fotos.length){
    virgen.fotos.forEach(src => {
      const im = document.createElement('img');
      im.className = 'foto-interna';
      im.src = src;
      im.alt = virgen.name;
      gallery.appendChild(im);
    });
  } else {
    gallery.innerHTML = `<p>No hay fotos configuradas para esta virgen.</p>`;
  }
  descripcionInner.appendChild(gallery);

  // comentario container (keeps old behavior)
  const comentBox = document.createElement('div');
  comentBox.className = 'comentario-container';
  comentBox.innerHTML = `
    <a class="comentario-link" id="open-form-${index}">Escribir comentario</a>
    <div id="formulario-${index}" class="formulario-comentario" style="display:none;">
      <textarea placeholder="Escribe tu comentario..."></textarea><br/>
      <button class="enviar-comentario">Enviar</button>
      <div id="audio-${index}" class="audio-consejo"></div>
    </div>
  `;
  descripcionInner.appendChild(comentBox);

  // attach comment form toggle + simple send (no backend)
  const openLink = comentBox.querySelector('.comentario-link');
  const form = comentBox.querySelector('.formulario-comentario');
  const textarea = form.querySelector('textarea');
  const sendBtn = form.querySelector('.enviar-comentario');
  openLink.addEventListener('click', () => form.style.display = 'block');
  sendBtn.addEventListener('click', () => {
    const v = textarea.value.trim();
    if (v.length){
      alert('Comentario guardado (local): ' + v.slice(0,120));
      textarea.value = '';
      form.style.display = 'none';
    } else {
      alert('Escribe algo primero.');
    }
  });

  // show description modal and hide collage behind
  descripcion.style.display = 'block';
  descripcion.setAttribute('aria-hidden','false');
  collage.style.filter = 'blur(2px)';
  collage.style.pointerEvents = 'none';
}

// --- close modal ---
function cerrarDescripcion(){
  descripcion.style.display = 'none';
  descripcion.setAttribute('aria-hidden','true');
  collage.style.filter = '';
  collage.style.pointerEvents = '';
  // resume background audio
  try{ audioFondo.play().catch(()=>{}); }catch(e){}
}

// initial render
placeCollageItems();

// resize handler: reposition items a little when viewport changes (keeps randomness)
window.addEventListener('resize', () => {
  // optional: you could re-place items to adapt
  // placeCollageItems();
});
