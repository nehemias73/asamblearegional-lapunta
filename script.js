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

// Ejemplo de marcador 1: Salón Principal
const primerosAuxilios = L.marker([289, 212]).addTo(map);
primerosAuxilios.bindPopup("<b>Primeros Auxilios</b><br>Superindentente de departamento: Arrieta.");

// Ejemplo de marcador 2: Área de Cafetería
const cafeteria = L.marker([700, 250]).addTo(map);
cafeteria.bindPopup("<b>Área de Cafetería</b><br>Abierta de 9:00 a 18:00.");

// Ejemplo de marcador 3: Baños
const banos = L.marker([200, 1000]).addTo(map);
banos.bindPopup("<b>Baños</b>");


// Puedes agregar todos los marcadores que necesites, ¡solo copia y pega el formato!
const salaReunionesA = L.marker([250, 500]).addTo(map);
salaReunionesA.bindPopup("<b>Sala de Reuniones A</b><br>Reservada para reuniones de equipo.");