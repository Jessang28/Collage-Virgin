const virgenes = [
  { nombre: "Virgen de Guadalupe",         img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Virgen_Guadalupe.jpg" },
  { nombre: "Virgen de Lourdes",           img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Lourdes_Virgen.jpg" },
  { nombre: "Virgen de Fátima",            img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Fatima_Virgen.jpg" },
  // …añade tus otras 17 con URLs válidas…
];

function aleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

const contenedor = document.getElementById('collage');
virgenes.forEach(v => {
  const div = document.createElement('div');
  div.className = 'collage-item';
  const top  = aleatorio(0, 80);
  const left = aleatorio(0, 80);
  const rot  = aleatorio(-25, 25);
  div.style.top  = top + 'vh';
  div.style.left = left + 'vw';
  div.style.transform = `rotate(${rot}deg)`;

  div.innerHTML = `
    <img src="${v.img}" alt="${v.nombre}">
    <div class="nombre">${v.nombre}</div>
  `;
  contenedor.appendChild(div);
});
