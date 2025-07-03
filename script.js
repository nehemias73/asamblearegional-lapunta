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
const image = L.imageOverlay('mapa-convencion.svg', bounds).addTo(map);

// Hacemos que la vista del mapa se ajuste perfectamente a la imagen.
map.fitBounds(bounds);

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
    .setContent("<strong>Comité</strong><br>Área reservada para organizadores.")
    .openOn(map);
});

const zona_maquillaje = L.rectangle([
  [97.89, 337.70],
  [126.59, 361.70]
], {
  color: "transparent", // sin contorno visible
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_maquillaje.on("click", () => {
  L.popup()
    .setLatLng([112.24, 349.70])
    .setContent("<strong>Maquillaje</strong><br>Área de preparación artística.")
    .openOn(map);
});
