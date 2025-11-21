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
const width = 1190.55;   // ancho del SVG nuevo
const height = 1683.78;  // alto del SVG nuevo

// Creamos una "caja" con las dimensiones de tu imagen.
// El sistema de coordenadas de Leaflet empieza en [0, 0] en la esquina superior izquierda.
const bounds = [[0, 0], [height, width]];

// 3. Añadir la imagen del mapa
// Reemplaza 'mapa-convencion.svg' con el nombre exacto de tu archivo.
const image = L.imageOverlay('mapa-convencion.svg', bounds).addTo(map);

// Hacemos que la vista del mapa se ajuste perfectamente a la imagen.
map.setView([841.89, 595.27], -1);

// 4. Añadir marcadores interactivos (¡la parte divertida!)
// Aquí es donde defines los puntos de interés.
// Las coordenadas [y, x] se miden desde la esquina superior izquierda de tu imagen.
// [0, 0] es la esquina superior izquierda.
// [height, width] es la esquina inferior derecha.
// Puedes encontrar las coordenadas abriendo tu SVG en un editor de imágenes (como GIMP o Photoshop)
// y viendo la posición en píxeles del punto que quieres marcar.


const alturaSVG = 496;
const zonaComite = L.polygon([
    [1096.18, 995.96],
    [1151.62, 935.11],
    [1226.68, 1005.77],
    [1170.23, 1065.61]
], {
  color: "transparent",
  weight: 1,
  fillOpacity: 0.0
}).addTo(map);

zonaComite.on("click", () => {
  L.popup()
    .setLatLng([1161.17, 1000.61])
    .setContent("<strong>Comité de la Asamblea Regional</strong> <p><strong>Coordinador </strong> <br>Emir Rodríguez <br>Contacto:<a href=https://wa.me/542664504929>+54 9 266 450-4929</a></br><p><strong>Superintendente de Alojamiento </strong> <br>Santiago Gulli <br>Contacto:<a href=https://wa.me/543541572469>+54 9 354 157-2469</a></br><p><strong>Superintendente del programa </strong> <br>Carlos Stoery<br>Contacto:<a href=https://wa.me/5492657336151>+54 9 265 733-6151</a></br>")
    .openOn(map);
});

const zona_primeros_auxilios = L.rectangle([
  [1683.78 - (633.64 + 38.03), 653.08],
  [1683.78 - 633.64, 653.08 + 148.53]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_primeros_auxilios.on("click", () => {
  L.popup()
    .setLatLng([1048.9, 727.345])
    .setContent("<strong>Departamento de Primeros Auxilios</strong> <p><strong>Superintendente</strong> <br>Carlos Alberto Vilchez<br>Contacto:<a href=https://wa.me/5492664347663>+54 9 266 434-7663</a></br><p><strong>Auxiliar</strong> <br>Elías Mingorance<br>Contacto:<a href=https://wa.me/5492657298652>+54 9 265 729-8652</a></br>")
    .openOn(map);
});

const primeros_auxilios = L.rectangle([
  [1106.32, 665.31],
  [1054.29, 739.37]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

primeros_auxilios.on("click", () => {
  L.popup()
    .setLatLng([1048.9, 727.345])
    .setContent("<strong>Departamento de Primeros Auxilios</strong> <p><strong>Superintendente</strong> <br>Carlos Alberto Vilchez<br>Contacto:<a href=https://wa.me/5492664347663>+54 9 266 434-7663</a></br><p><strong>Auxiliar</strong> <br>Elías Mingorance<br>Contacto:<a href=https://wa.me/5492657298652>+54 9 265 729-8652</a></br>")
    .openOn(map);
});

const zona_acomodadores = L.rectangle([
  [1683.78 - (1226.08 + 20.02), 627.48],
  [1683.78 - 1226.08, 627.48 + 20.02]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_acomodadores.on("click", () => {
  L.popup()
    .setLatLng([447.70, 637.49])
    .setContent("<strong>Departamento de Acomodadores</strong> <p><strong>Superintendente:</strong><br>Marcelo Coria<br>Contacto:<a href=https://wa.me/5492664853885>+54 9 266 485-3885</a></br><p><strong>Auxiliar:</strong><br>Facundo Sebastián Correa<br>Contacto:<a href=https://wa.me/5492664330488>+54 9 266 433-0488</a></br><p>Benjamín Mazoli<br>Contacto:<a href=https://wa.me/5491167541179>+54 9 11 6754-1179</a></br>")
    .openOn(map);
});

const zona_acomodadoresb = L.rectangle([
   [1683.78 - (1285.62), 571.79],
   [1683.78 - (1285.62 - 24), 703.19]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_acomodadoresb.on("click", () => {
  L.popup()
    .setLatLng([447.70, 637.49])
    .setContent("<strong>Departamento de Acomodadores</strong> <p><strong>Superintendente:</strong><br>Marcelo Coria<br>Contacto:<a href=https://wa.me/5492664853885>+54 9 266 485-3885</a></br><p><strong>Auxiliar:</strong><br>Facundo Sebastián Correa<br>Contacto:<a href=https://wa.me/5492664330488>+54 9 266 433-0488</a></br><p>Benjamín Mazoli<br>Contacto:<a href=https://wa.me/5491167541179>+54 9 11 6754-1179</a></br>")
    .openOn(map);
});

const zona_estacionamiento = L.rectangle([
  [1683.78 - (1226.08 + 20.02), 663.51],
  [1683.78 - 1226.08, 663.51 + 20.02]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_estacionamiento.on("click", () => {
  L.popup()
    .setLatLng([447.70, 675.51])
    .setContent("<strong>Departamento de Estacionamiento</strong> <p><strong>Superintendente:</strong><br>Pablo Kámmerer<br>Contacto:<a href=https://wa.me/5492664504182>+54 9 266 450-4182</a></br><p><strong>Auxiliar:</strong><br>Germán Stoery<br>Contacto:<a href=https://wa.me/5492657690190>+54 9 265 769-0190</a></br>")
    .openOn(map);
});

const zona_estacionamientob = L.rectangle([
   [1683.78 - (1251.75), 705.91],
   [1683.78 - (1251.75 - 24), 849.88]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_estacionamientob.on("click", () => {
  L.popup()
    .setLatLng([447.70, 675.51])
    .setContent("<strong>Departamento de Estacionamiento</strong> <p><strong>Superintendente:</strong><br>Pablo Kámmerer<br>Contacto:<a href=https://wa.me/5492664504182>+54 9 266 450-4182</a></br><p><strong>Auxiliar:</strong><br>Germán Stoery<br>Contacto:<a href=https://wa.me/5492657690190>+54 9 265 769-0190</a></br>")
    .openOn(map);
});

const alojamiento = L.rectangle([
   [542.87, 268.64],   // esquina superior izquierda
   [562.89, 288.66]    // esquina inferior derecha
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0,
}).addTo(map);

alojamiento.on("click", () => {
  L.popup()
    .setLatLng([552.88, 278.65])
    .setContent("<strong>Departamento de Alojamiento</strong><p><strong>Superintendente:</strong><br>Néstor Marturano<br>Contacto:<a href=https://wa.me/5492664660312>+54 9 266 466-0312</a></br><p><strong>Auxiliar:</strong><br>Marcos Contreras<br>Contacto:<a href=https://wa.me/5492664317857>+54 9 266 431-7857</a><p>Javier Zupo<br>Contacto:<a href=https://wa.me/5492664950032>+54 9 266 495-0032</a></br>")    .openOn(map);
});

const alojamientob = L.rectangle([
  [1683.78 - 1114.93, 179.43],       // = [568.85, 179.43]
  [1683.78 - (1114.93 - 24), 280.68] // = [592.85, 280.68]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0,
}).addTo(map);

alojamientob.on("click", () => {
  L.popup()
    .setLatLng([552.88, 278.65])
    .setContent("<strong>Departamento de Alojamiento</strong><p><strong>Superintendente:</strong><br>Néstor Marturano<br>Contacto:<a href=https://wa.me/5492664660312>+54 9 266 466-0312</a></br><p><strong>Auxiliar:</strong><br>Marcos Contreras<br>Contacto:<a href=https://wa.me/5492664317857>+54 9 266 431-7857</a><p>Javier Zupo<br>Contacto:<a href=https://wa.me/5492664950032>+54 9 266 495-0032</a></br>")    .openOn(map);
});

const zona_informacion = L.rectangle([
  [1683.78 - (731.22 + 20.02), 256.71],
  [1683.78 - 731.22, 256.71 + 20.02]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_informacion.on("click", () => {
  L.popup()
    .setLatLng([447.70, 356.72])
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Edmundo Romero<br>Contacto:<a href=https://wa.me/5492664732061>+54 9 266 473-2061</a></br><p><strong>Auxiliar:</strong><br>Julián Sánchez<br>Contacto:<a href=https://wa.me/5492657262129>+54 9 265 726-2129</a></br><p>Marcos Lucero<br>Contacto:<a href=https://wa.me/5492664201536>+54 9 266 420-1536</a>")
    .openOn(map);
});


const zona_informacionb = L.rectangle([
   [1683.78 - 1318.65, 266.95],            // = [365.13, 266.95]
   [1683.78 - (1318.65 - 42.03), 432.02]   // = [407.16, 432.02]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_informacionb.on("click", () => {
  L.popup()
    .setLatLng([447.70, 356.72])
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Edmundo Romero<br>Contacto:<a href=https://wa.me/5492664732061>+54 9 266 473-2061</a></br><p><strong>Auxiliar:</strong><br>Julián Sánchez<br>Contacto:<a href=https://wa.me/5492657262129>+54 9 265 726-2129</a></br><p>Marcos Lucero<br>Contacto:<a href=https://wa.me/5492664201536>+54 9 266 420-1536</a>")
    .openOn(map);
});

const zona_informacionc = L.rectangle([
    [1683.78 - (1272.77), 164.84],
    [1683.78 - (1272.77 - 42.03), 330.96]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_informacionc.on("click", () => {
  L.popup()
    .setLatLng([447.70, 356.72])
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Edmundo Romero<br>Contacto:<a href=https://wa.me/5492664732061>+54 9 266 473-2061</a></br><p><strong>Auxiliar:</strong><br>Julián Sánchez<br>Contacto:<a href=https://wa.me/5492657262129>+54 9 265 726-2129</a></br><p>Marcos Lucero<br>Contacto:<a href=https://wa.me/5492664201536>+54 9 266 420-1536</a>")
    .openOn(map);
});

const zona_informaciond = L.rectangle([
    [1683.78 - (1226.08 + 20.02), 348.08],
    [1683.78 - 1226.08, 348.08 + 20.02]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_informaciond.on("click", () => {
  L.popup()
    .setLatLng([447.70, 356.72])
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Edmundo Romero<br>Contacto:<a href=https://wa.me/5492664732061>+54 9 266 473-2061</a></br><p><strong>Auxiliar:</strong><br>Julián Sánchez<br>Contacto:<a href=https://wa.me/5492657262129>+54 9 265 726-2129</a></br><p>Marcos Lucero<br>Contacto:<a href=https://wa.me/5492664201536>+54 9 266 420-1536</a>")
    .openOn(map);
});

const zona_limpieza = L.rectangle([
  [1683.78 - (846.8 + 109.08), 832.24],
  [1683.78 - 846.8, 832.24 + 83.86]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_limpieza.on("click", () => {
  L.popup()
    .setLatLng([800.79, 874.17])
    .setContent("<strong>Departamento de Limpieza</strong> <p><strong>Superintendente:</strong><br>Ulises Lasagna<br>Contacto:<a href=https://wa.me/5491157338194>+54 9 11 5733-8194</a></br><p><strong>Auxiliar:</strong><br>Sergio Gustavo Romero<br>Contacto:<a href=https://wa.me/5492664344049>+54 9 266 434-4049</a></br><p>Julio Figueroa<br>Contacto:<a href=https://wa.me/5492664038486>+54 9 266 403-8486</a></br>")
    .openOn(map);
});

const zona_instalaciones = L.polygon([
    [1174.24, 638.89],
    [1178.84, 614.27],
    [1193.65, 616.27],
    [1197.65, 594.25],
    [1298.73, 622.47],
    [1288.32, 706.73],
    [1184.24, 679.71],
    [1188.84, 641.68],
    [1174.24, 638.89]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_instalaciones.on("click", () => {
  L.popup()
    .setLatLng([1211, 646])
    .setContent("<strong>Departamento de Instalaciones</strong> <p><strong>Superintendente:</strong><br>Víctor Hugo Costa<br>Contacto:<a href=https://wa.me/5492664615490>+54 9 266 461-5490</a></br><p><strong>Auxiliar:</strong><br>Vargas Oscar<br>Contacto:<a href=https://wa.me/5492664617500>+54 9 266 461-7500</a></br><p>Samuel Carrizo<br>Contacto:<a href=https://wa.me/5492664644018>+54 9 266 464-0180</a>")
    .openOn(map);
});

const zona_guardarropa = L.polygon([
  [1188.85, 331.26],
  [1180.24, 301.24],
  [1307.73, 290.63],
  [1325.14, 374.09],
  [1200.45, 386.10],
  [1197.85, 374.09],
  [1149.21, 377.69],
  [1139.85, 357.77],
  [1129.60, 338.46]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_guardarropa.on("click", () => {
  L.popup()
    .setLatLng([1202.1, 347.92])
    .setContent("<strong>Departamento de Guardarropa y Objetos Perdidos</strong> <p><strong>Superintendente:</strong><br>Esteban Giménez<br>Contacto:<a href=https://wa.me/5492657262044>+54 9 265 726-2044</a></br><p><strong>Auxiliar:</strong><br>Damián Lucero<br>Contacto:<a href=https://wa.me/5492664185130>+54 9 266 418-5130</a></br><p>Ezequiel Sampataro<br>Contacto:<a href=https://wa.me/5491135387531>+54 9 11 3538-7531</a>")    .openOn(map);
});

const zona_bautismo = L.rectangle([
  [1683.78 - (602.75 + 30.68), 477.51],   // top-left
  [1683.78 - 602.75, 477.51 + 49.84]      // bottom-right
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_bautismo.on("click", () => {
  L.popup()
    .setLatLng([1065.69, 502.43])
    .setContent("<strong>Departamento de Bautismo</strong> <p><strong>Superintendente:</strong><br>David Verge<br>Contacto:<a href=https://wa.me/5492657328432>+54 9 265 732-8432</a></br><p><strong>Auxiliar:</strong><br>Mauricio González<br>Contacto:<a href=https://wa.me/5492657667790>+54 9 265 766-7790</a></br>")    .openOn(map);
});

const bautismo = L.rectangle([
  [1071.69, 460.40],
  [1067.68, 544.46]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

bautismo.on("click", () => {
  L.popup()
    .setLatLng([1065.69, 502.43])
    .setContent("<strong>Departamento de Bautismo</strong> <p><strong>Superintendente:</strong><br>David Verge<br>Contacto:<a href=https://wa.me/5492657328432>+54 9 265 732-8432</a></br><p><strong>Auxiliar:</strong><br>Mauricio González<br>Contacto:<a href=https://wa.me/5492657667790>+54 9 265 766-7790</a></br>")    .openOn(map);
});

const zona_audio = L.rectangle([
  [1683.78 - (886.23 + 76.62), 593.17],
  [1683.78 - 886.23, 593.17 + 40.45]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_audio.on("click", () => {
  L.popup()
    .setLatLng([747.79, 613.39])
    .setContent("<strong>Departamento de Audio y Video</strong> <p><strong>Superintendente:</strong><br>Cristian Giménez<br>Contacto:<a href=https://wa.me/5492657691919>+54 9 265 769-1919</a></br><p><strong>Auxiliar:</strong><br>Alejandro José Mantello<br>Contacto:<a href=https://wa.me/5493413526144>+54 9 341 352-6144</a></br><p>")    .openOn(map);
});

const zona_plataforma = L.rectangle([
  [1683.78 - (843.79 + 163.52), 393.71],
  [1683.78 - 843.79, 393.71 + 55.64]
], {
  color: "transparent",
  weight: 0,
  fillOpacity: 0.0
}).addTo(map);

zona_plataforma.on("click", () => {
  L.popup()
    .setLatLng([747.79, 421.53])
    .setContent("<strong>Plataforma</strong> <p><strong>Superintendente:</strong><br>Marcelo Alejandro Scicolone<br>Contacto:<a href=https://wa.me/5491137704779>+54 9 11 3770- 4779</a></br><p><strong>Auxiliar:</strong><br>Joel Sebastiani<br>Contacto:<a href=https://wa.me/5492657223055>+54 9 265 722-3055</a></br>")    .openOn(map);
});

const zona_transporte = L.rectangle([
  [701.51, 832.24],
  [650.07, 873.29]
], {
  color: "transparent",
  weight: 1,
  fillOpacity: 0.0
}).addTo(map);

zona_transporte.on("click", () => {
  L.popup()
    .setLatLng([675.79, 852.77])
    .setContent("<strong>Transporte y Materiales</strong> <p><strong>Superintendente:</strong><br>Lucas Quinteros<br>Contacto:<a href=https://wa.me/5492664380011>+54 9 266 438-0011</a></br><p><strong>Auxiliar:</strong><br>Martín Moyano<br>Contacto:<a href=https://wa.me/5492657206220>+54 9 265 720-6220</a></br>")
    .openOn(map);
});

const zona_transporteb = L.rectangle([
   [689.77, 885.29],
   [649.77, 959.35]
], {
  color: "transparent",
  weight: 1,
  fillOpacity: 0.0
}).addTo(map);

zona_transporteb.on("click", () => {
  L.popup()
    .setLatLng([675.79, 852.77])
    .setContent("<strong>Transporte y Materiales</strong> <p><strong>Superintendente:</strong><br>Lucas Quinteros<br>Contacto:<a href=https://wa.me/5492664380011>+54 9 266 438-0011</a></br><p><strong>Auxiliar:</strong><br>Martín Moyano<br>Contacto:<a href=https://wa.me/5492657206220>+54 9 265 720-6220</a></br>")
    .openOn(map);
});

const zona_presidencia = L.rectangle([
  [1683.78 - 937.91, 270.51],      // = [745.87, 270.51]
  [1683.78 - (937.91 - 24), 368.20] // = [769.87, 368.20]
], {
  color: "transparent",
  weight: 1,
  fillOpacity: 0.0
}).addTo(map);

zona_presidencia.on("click", () => {
  L.popup()
    .setLatLng([757.87, 319.35])
    .setContent("<strong>Presidencia del programa</strong> <p><strong>Superintendente:</strong><br>Juan Carlos Vidal<br>Contacto:<a href=https://wa.me/5492901508355>+54 9 290 150-8355</a></br>")
    .openOn(map);
});

const zona_presidenciab = L.rectangle([
  [1683.78 - 937.91, 270.51],      // = [745.87, 270.51]
  [1683.78 - (937.91 - 24), 368.20] // = [769.87, 368.20]
], {
  color: "transparent",
  weight: 1,
  fillOpacity: 0.0
}).addTo(map);

zona_presidenciab.on("click", () => {
  L.popup()
    .setLatLng([757.87, 319.35])
    .setContent("<strong>Presidencia del programa</strong> <p><strong>Superintendente:</strong><br>Juan Carlos Vidal<br>Contacto:<a href=https://wa.me/5492901508355>+54 9 290 150-8355</a></br>")
    .openOn(map);
});

const zonas = {
  comite: zonaComite,
  primeros_auxilios: zona_primeros_auxilios,
  acomodadores: zona_acomodadores,
  estacionamiento: zona_estacionamiento,
  alojamiento: alojamiento,
  informacion: zona_informacion,
  limpieza: zona_limpieza,
  instalaciones: zona_instalaciones,
  guardarropa: zona_guardarropa,
  bautismo: zona_bautismo,
  audio: zona_audio,
  plataforma: zona_plataforma,
  transporte: zona_transporte,
  presidencia: zona_presidencia,
};

function mostrarZona(nombreZona) {
  zonas[nombreZona].fire('click');
  document.getElementById("menu-zonas").classList.remove("abierto");
}

function toggleMenu() {
  const menu = document.getElementById("menu-zonas");
  menu.classList.toggle("abierto");
}

const coordenadasCentro = {
    comite: [496 - 50, 150],
    primeros_auxilios: [496 - 142.81 - 47.5, 213.5],
    acomodadores: [496 - 305.41 - 5, 505],
    estacionamiento: [496 - 323.41 - 5, 555],
    alojamiento: [496 - 341.41 - 5, 542],
    informacion: [496 - 359.41 - 15, 558.5],
    limpieza: [894.62, 259.02],
    instalaciones: [496 - 221, 110],
    guardarropa: [496 - 375, 105],
    bautismo: [496 - 221, 110],
    audio: [894.62, 259.02],
    plataforma: [894.62, 259.02],
    presidencia: [894.62, 259.02],
  };

 // Hacer un suave flyTo hacia esa zona (sin cambiar el zoom actual)
function mostrarZona(nombreZona) {
  // 1. Verificar si la zona existe y simular el click para abrir el popup
  if (zonas[nombreZona]) {
    zonas[nombreZona].fire('click');
  }
  
  // 2. Cerrar el menú
  document.getElementById("menu-zonas").classList.remove("abierto");

  // 3. Hacer el zoom suave (flyTo) hacia la zona
  const centro = coordenadasCentro[nombreZona];
  if (centro) {
    map.flyTo(centro, map.getZoom(), {
      animate: true,
      duration: 0.8 // segundos
    });
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu-zonas");
  menu.classList.toggle("abierto");
}