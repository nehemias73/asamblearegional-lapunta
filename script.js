// 1. Inicializar el mapa
// Le decimos a Leaflet que cree un mapa en nuestro <div> con id "mapa".
// CRS.Simple es importante: le dice a Leaflet que nuestro mapa no es geográfico (no usa latitud/longitud).
const map = L.map('mapa', {
    crs: L.CRS.Simple,
    minZoom: -1 // Permite alejar el mapa
});

// 2. Definir los límites de la imagen
// Necesitas saber el ancho y alto de tu SVG en píxeles.
// Cámbialos por los valores de tu imagen. Puedes verlos abriendo el SVG en un navegador o editor.
const width = 618; // Ancho de tu SVG
const height = 496; // Alto de tu SVG

// Creamos una "caja" con las dimensiones de tu imagen.
// El sistema de coordenadas de Leaflet empieza en [0, 0] en la esquina superior izquierda.
const bounds = [[0, 0], [height, width]];

// 3. Añadir la imagen del mapa
// Reemplaza 'mapa-convencion.svg' con el nombre exacto de tu archivo.
const image = L.imageOverlay('mapa-convencion-b.svg', bounds).addTo(map);

// Hacemos que la vista del mapa se ajuste perfectamente a la imagen.
map.setView([248, 309], 0.5); 

// 4. Añadir marcadores interactivos (¡la parte divertida!)
// Aquí es donde defines los puntos de interés.
// Las coordenadas [y, x] se miden desde la esquina superior izquierda de tu imagen.
// [0, 0] es la esquina superior izquierda.
// [height, width] es la esquina inferior derecha.
// Puedes encontrar las coordenadas abriendo tu SVG en un editor de imágenes (como GIMP o Photoshop)
// y viendo la posición en píxeles del punto que quieres marcar.


const alturaSVG = 496;
const zonaComite = L.polygon([
  [alturaSVG - 45.71, 181],
  [alturaSVG - 76.11, 153.3],
  [alturaSVG - 40.81, 115.8],
  [alturaSVG - 10.91, 144]
], {
  color: "transparent",
  weight: 1,
  fillOpacity: 0.0
}).addTo(map);

zonaComite.on("click", () => {
  L.popup()
    .setLatLng([alturaSVG - 50, 150])
    .setContent("<strong>Comité de la Asamblea Regional</strong> <p><strong>Coordinador </strong> <br>Nestor Lasagna <br>Contacto:<a href=https://wa.me/542664362079>+54 9 266 436-2079</a></br><p><strong>Superintendente de Alojamiento </strong> <br>Claudio Miranda <br>Contacto:<a href=https://wa.me/542664018710>+54 9 266 401-8710</a></br><p><strong>Superintendente del programa </strong> <br>Jonathan Martingaste <br>Contacto:<a href=https://wa.me/5493424854934>+54 9 342 485-4934</a></br>")
    .openOn(map);
});

const zona_primeros_auxilios = L.rectangle([
  [496 - (142.81 + 95), 204], // esquina inferior izquierda
  [496 - 142.81, 204 + 19]    // esquina superior derecha
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_primeros_auxilios.on("click", () => {
  L.popup()
    .setLatLng([496 - 142.81 - 95 / 2, 204 + 19 / 2])
    .setContent("<strong>Departamento de Primeros Auxilios</strong> <p><strong>Superintendente</strong> <br>Raúl Arrieta<br>Contacto:<a href=https://wa.me/5492664381259>+54 9 266 438-1259</a></br><p><strong>Auxiliar</strong> <br>Mario Andrada<br>Contacto:<a href=https://wa.me/5492664838703>+54 9 266 483-8703</a></br>")
    .openOn(map);
});

const zona_acomodadores = L.rectangle([
  [496 - (305.41 + 10), 500], // esquina inferior izquierda
  [496 - 305.41, 585]         // esquina superior derecha
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_acomodadores.on("click", () => {
  L.popup()
    .setLatLng([496 - 305.41 - 5, 505]) // centro aproximado
    .setContent("<strong>Departamento de Acomodadores</strong> <p><strong>Superintendente:</strong><br>Cristian Lanzoni<br>Contacto:<a href=https://wa.me/5493385440322>+54 9 3385 440-322</a></br><p><strong>Auxiliar:</strong><br>Malkiel Kammerer<br>Contacto:<a href=https://wa.me/542664643367>+54 9 266 464-3367</a></br>")
    .openOn(map);
});

const zona_estacionamiento = L.rectangle([
  [496 - (323.41 + 10), 596], // esquina inferior izquierda
  [496 - 323.41, 510]         // esquina superior derecha
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_estacionamiento.on("click", () => {
  L.popup()
    .setLatLng([496 - 323.41 - 5, 505]) // centro aproximado
    .setContent("<strong>Departamento de Estacionamiento</strong> <p><strong>Superintendente:</strong><br>Pablo Gimenez<br>Contacto:<a href=https://wa.me/54926644205256>+54 9 2664 420-5256</a></br><p><strong>Auxiliar:</strong><br>Franco Pineda<br>Contacto:<a href=https://wa.me/5492657207148>+54 9 2657 207-148</a></br>")
    .openOn(map);
});

const zona_alojamiento = L.rectangle([
  [496 - (341.41 + 10), 575],
  [496 - 341.41, 510]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_alojamiento.on("click", () => {
  L.popup()
    .setLatLng([496 - 341.41 - 5, 505])
    .setContent("<strong>Departamento de Alojamiento</strong> <p><strong>Superintendente:</strong><br>Néstor Marturano<br>Contacto:<a href=https://wa.me/5492664660312>+54 9 266 466-0312</a></br><p><strong>Auxiliar:</strong><br>Marcos Contreras<br>Contacto:<a href=https://wa.me/5492664317857>+54 9 266 431-7857</a></br>")
    .openOn(map);
});

const zona_informacion = L.rectangle([
  [496 - (359.41 + 30), 607],
  [496 - 359.41, 510]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_informacion.on("click", () => {
  L.popup()
    .setLatLng([496 - 359.41 - 5, 505])
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Héctor Herrera<br>Contacto:<a href=https://wa.me/5492664664573>+54 9 266 466-4573</a></br><p><strong>Auxiliar:</strong><br>Marco Gomez<br>Contacto:<a href=https://wa.me/5491139116360>+54 9 11 3911-6360</a></br>")
    .openOn(map);
});

const zona_limpieza = L.rectangle([
  [496 - (85.61 + 41.9), 310.5],
  [496 - 85.61, 310.5 + 54.5]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_limpieza.on("click", () => {
  L.popup()
    .setLatLng([496 - 85.61 - 41.9 / 2, 310.5 + 54.5 / 2])
    .setContent("<strong>Departamento de Limpieza</strong> <p><strong>Superintendente:</strong><br>Eduardo Pereyra<br>Contacto:<a href=https://wa.me/5492664573554>+54 9 266 457-3554</a></br><p><strong>Auxiliar:</strong><br>Juan Carlos Ansaldi<br>Contacto:<a href=https://wa.me/5492664559159>+54 9 266 455-9159</a></br>")
    .openOn(map);
});

const zona_instalaciones = L.polygon([
  [496 - 190, 85],
  [496 - 203, 137],
  [496 - 246, 130],
  [496 - 232, 79],
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_instalaciones.on("click", () => {
  L.popup()
    .setLatLng([496 - 221, 110])
    .setContent("<strong>Departamento de Instalaciones</strong> <p><strong>Superintendente:</strong><br>Mario García<br>Contacto:<a href=https://wa.me/5492664615222>+54 9 266 461-5222</a></br><p><strong>Auxiliar:</strong><br>Fabián Herrera<br>Contacto:<a href=https://wa.me/5492664567235>+54 9 266 456-7235</a></br>")
    .openOn(map);
});

const zona_guardarropa = L.polygon([
  [496 - 356, 66],
  [496 - 350, 128],
  [496 - 392, 139],
  [496 - 398, 75],
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_guardarropa.on("click", () => {
  L.popup()
    .setLatLng([496 - 375, 105])
    .setContent("<strong>Departamento de Guardarropa y Objetos Perdidos</strong> <p><strong>Superintendente:</strong><br>Vicente Azzarito<br>Contacto:<a href=https://wa.me/5493584123498>+54 9 358 412-3498</a></br><p><strong>Auxiliar:</strong><br>Hugo Orellana<br>Contacto:<a href=https://wa.me/5493462 67-3729>+54 9 346 267-3729</a></br>")
    .openOn(map);
});

const zona_bautismo = L.rectangle([
  [496 - (85.61 + 41.9), 284.8],
  [496 - 85.61, 284.8 + 25.8]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_bautismo.on("click", () => {
  L.popup()
    .setLatLng([496 - 85.61 - 41.9 / 2, 284.8 + 25.8 / 2])
    .setContent("<strong>Departamento de Bautismo</strong> <p><strong>Superintendente:</strong><br>Miguel Bruza<br>Contacto:<a href=https://wa.me/5492664394021>+54 9 266 439-4021</a></br><p><strong>Auxiliar:</strong><br>José Luis Ruiz<br>Contacto:<a href=https://wa.me/5492664626201>+54 9 266 462-6201</a></br>")
    .openOn(map);
});

const zona_audio = L.rectangle([
  [496 - (238.21 + 25.7), 324.9],
  [496 - 238.21, 324.9 + 49.6]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_audio.on("click", () => {
  L.popup()
    .setLatLng([496 - 238.21 - 25.7 / 2, 324.9 + 49.6 / 2])
    .setContent("<strong>Departamento de Audio y Video</strong> <p><strong>Superintendente de audio:</strong><br>Sebastian Vava<br>Contacto:<a href=https://wa.me/5492664637393>+54 9 266 463-7393</a></br><p><strong>Auxiliar de audio:</strong><br>Eugenio Ruiz<br>Contacto:<a href=https://wa.me/5492664257902>+54 9 266 425-7902</a></br><p><strong>Superintendente de Video:</strong><br>Oscar Suarez<br>Contacto:<a href=https://wa.me/5492664618482>+54 9 266 461-8482</a></br><p><strong>Auxiliar de Video:</strong><br>Marcos Fabroni<br>Contacto:<a href=https://wa.me/5492664309441>+54 9 266 430-9441</a></br>")
    .openOn(map);
});

const zona_plataforma = L.rectangle([
  [496 - (318.81 + 27.8), 309],
  [496 - 318.81, 309 + 81.7]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_plataforma.on("click", () => {
  L.popup()
    .setLatLng([496 - 318.81 - 27.8 / 2, 309 + 81.7 / 2])
    .setContent("<strong>Departamento de Plataforma</strong> <p><strong>Superintendente:</strong><br>Hugo Salguero<br>Contacto:<a href=https://wa.me/5492664038391>+54 9 266 403-8391</a></br><p><strong>Auxiliar:</strong><br>Rodolfo Dominguez<br>Contacto:<a href=https://wa.me/5492664747376>+54 9 266 474-7376</a></br>")
    .openOn(map);
});
