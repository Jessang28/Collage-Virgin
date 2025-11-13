/* principal.js - corrected stable version
   - 20 virgen items with names
   - opens internal gallery from archivo/fotos (uses .jpeg)
   - overlay requires one interaction to start audio & enable scroll
   - 4 audios in folder AUDIO named audiofondo1..4 (random loop)
*/

// ---- CONFIG ----
// images (20). Make sure img/virgen1.png ... img/virgen20.png exist
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

// DOM refs
const collage = document.getElementById('collage');
const descripcion = document.getElementById('descripcion');
const descripcionInner = document.getElementById('descripcion-inner');
const overlay = document.getElementById('inicio-interaccion');
const audioFondo = document.getElementById('audio-fondo');

// AUDIO list (you said folder name is "AUDIO")
const audiosFondo = [
  "AUDIO/audiofondo1.mp3",
  "AUDIO/audiofondo2.mp3",
  "AUDIO/audiofondo3.mp3",
  "AUDIO/audiofondo4.mp3"
];

// play random audio and continue randomly when each ends
function reproducirAleatorio(){
  const idx = Math.floor(Math.random() * audiosFondo.length);
  audioFondo.src = audiosFondo[idx];
  audioFondo.play().catch(err => console.log("audio play blocked or error:", err));
}
audioFondo.addEventListener('ended', reproducirAleatorio);

// start audio + enable scrolling after first user interaction
function iniciarAudioOnce(){
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  reproducirAleatorio();
  // remove one-time listeners
  window.removeEventListener('scroll', iniciarAudioOnce);
  window.removeEventListener('click', iniciarAudioOnce);
  window.removeEventListener('touchstart', iniciarAudioOnce);
}
['scroll','click','touchstart'].forEach(e => window.addEventListener(e, iniciarAudioOnce, { once:true }));
if (overlay) overlay.addEventListener('click', iniciarAudioOnce);

// build collage items (absolute positions with margins)
function placeCollageItems(){
  collage.innerHTML = '';
  collage.style.minHeight = '100vh';
  imagenes.forEach((it, i) => {
    const item = document.createElement('div');
    item.className = 'collage-item';

    // make positions less likely to overlap edges
    const left = 6 + Math.random() * 74; // 6..80%
    const top  = 6 + Math.random() * 76; // 6..82%
    item.style.left = `${left}%`;
    item.style.top = `${top}%`;

    const img = document.createElement('img');
    img.src = it.url;
    img.alt = it.name;
    img.loading = 'lazy';

    const name = document.createElement('div');
    name.className = 'nombre';
    name.textContent = it.name;

    item.appendChild(img);
    item.appendChild(name);

    item.addEventListener('click', ()=> abrirDescripcion(i));
    collage.appendChild(item);
  });
}

// open modal with internal gallery + comment form
function abrirDescripcion(idx){
  const virgen = imagenes[idx];
  // pause bg audio while inside (optional)
  try{ audioFondo.pause(); }catch(e){}

  descripcionInner.innerHTML = '';

  // gallery grid
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
    gallery.innerHTML = '<p style="color:#ddd">No hay fotos configuradas para esta virgen.</p>';
  }
  descripcionInner.appendChild(gallery);

  // comment area
  const commentWrap = document.createElement('div');
  commentWrap.className = 'comentario-container';
  commentWrap.innerHTML = `
    <a class="comentario-link">Escribir comentario</a>
    <div class="formulario-comentario" style="display:none;">
      <textarea placeholder="Escribe tu comentario..."></textarea><br/>
      <button class="enviar-comentario">Enviar</button>
    </div>
  `;
  descripcionInner.appendChild(commentWrap);

  // toggle form + simple local send
  const link = commentWrap.querySelector('.comentario-link');
  const form = commentWrap.querySelector('.formulario-comentario');
  const txt = form.querySelector('textarea');
  const send = form.querySelector('.enviar-comentario');
  link.addEventListener('click', ()=> form.style.display = 'block');
  send.addEventListener('click', ()=>{
    const v = txt.value.trim();
    if (v.length){
      alert('Comentario (guardado localmente): ' + v.slice(0,120));
      txt.value = '';
      form.style.display = 'none';
    } else {
      alert('Escribe algo antes de enviar.');
    }
  });

  // show modal
  descripcion.style.display = 'block';
  descripcion.setAttribute('aria-hidden','false');
  collage.style.filter = 'blur(2px)';
  collage.style.pointerEvents = 'none';
}

// close modal
function cerrarDescripcion(){
  descripcion.style.display = 'none';
  descripcion.setAttribute('aria-hidden','true');
  collage.style.filter = '';
  collage.style.pointerEvents = '';
  // resume bg audio
  try{ audioFondo.play().catch(()=>{}); }catch(e){}
}

// initial
placeCollageItems();
