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
    .setContent("<strong>Comité de la Asamblea Regional</strong> <p><strong>Coordinador </strong> <br>Nestor Lasagna <br>Contacto:<a href=https://wa.me/542664362079>+54 9 266 436-2079</a></br><p><strong>Superintendente de Alojamiento </strong> <br>Claudio Miranda <br>Contacto:<a href=https://wa.me/542664018710>+54 9 266 401-8710</a></br><p><strong>Superintendente del programa </strong> <br>Jonathan Martingaste <br>Contacto:<a href=https://wa.me/5493424854934>+54 9 342 485-4934</a></br>")
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
    .setContent("<strong>Departamento de Primeros Auxilios</strong> <p><strong>Superintendente</strong> <br>Raúl Arrieta<br>Contacto:<a href=https://wa.me/5492664381259>+54 9 266 438-1259</a></br><p><strong>Auxiliar</strong> <br>Mario Andrada<br>Contacto:<a href=https://wa.me/5492664838703>+54 9 266 483-8703</a></br>")
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
    .setContent("<strong>Departamento de Primeros Auxilios</strong> <p><strong>Superintendente</strong> <br>Raúl Arrieta<br>Contacto:<a href=https://wa.me/5492664381259>+54 9 266 438-1259</a></br><p><strong>Auxiliar</strong> <br>Mario Andrada<br>Contacto:<a href=https://wa.me/5492664838703>+54 9 266 483-8703</a></br>")
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
    .setContent("<strong>Departamento de Acomodadores</strong> <p><strong>Superintendente:</strong><br>Cristian Lanzoni<br>Contacto:<a href=https://wa.me/5493385440322>+54 9 3385 440-322</a></br><p><strong>Auxiliar:</strong><br>Malkiel Kammerer<br>Contacto:<a href=https://wa.me/542664643367>+54 9 266 464-3367</a></br>")
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
    .setContent("<strong>Departamento de Acomodadores</strong> <p><strong>Superintendente:</strong><br>Cristian Lanzoni<br>Contacto:<a href=https://wa.me/5493385440322>+54 9 3385 440-322</a></br><p><strong>Auxiliar:</strong><br>Malkiel Kammerer<br>Contacto:<a href=https://wa.me/542664643367>+54 9 266 464-3367</a></br>")
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
    .setContent("<strong>Departamento de Estacionamiento</strong> <p><strong>Superintendente:</strong><br>Pablo Gimenez<br>Contacto:<a href=https://wa.me/54926644205256>+54 9 2664 420-5256</a></br><p><strong>Auxiliar:</strong><br>Franco Pineda<br>Contacto:<a href=https://wa.me/5492657207148>+54 9 2657 207-148</a></br>")
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
    .setContent("<strong>Departamento de Estacionamiento</strong> <p><strong>Superintendente:</strong><br>Pablo Gimenez<br>Contacto:<a href=https://wa.me/54926644205256>+54 9 2664 420-5256</a></br><p><strong>Auxiliar:</strong><br>Franco Pineda<br>Contacto:<a href=https://wa.me/5492657207148>+54 9 2657 207-148</a></br>")
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
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Héctor Herrera<br>Contacto:<a href=https://wa.me/5492664664573>+54 9 266 466-4573</a></br><p><strong>Auxiliar:</strong><br>Bruno Miglioli<br>Contacto:<a href=https://wa.me/5492664037594>+54 9 266 403-7594</a></br>")
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
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Héctor Herrera<br>Contacto:<a href=https://wa.me/5492664664573>+54 9 266 466-4573</a></br><p><strong>Auxiliar:</strong><br>Bruno Miglioli<br>Contacto:<a href=https://wa.me/5492664037594>+54 9 266 403-7594</a></br>")
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
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Héctor Herrera<br>Contacto:<a href=https://wa.me/5492664664573>+54 9 266 466-4573</a></br><p><strong>Auxiliar:</strong><br>Bruno Miglioli<br>Contacto:<a href=https://wa.me/5492664037594>+54 9 266 403-7594</a></br>")
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
    .setContent("<strong>Departamento de Información y Servicio Voluntario</strong> <p><strong>Superintendente:</strong><br>Héctor Herrera<br>Contacto:<a href=https://wa.me/5492664664573>+54 9 266 466-4573</a></br><p><strong>Auxiliar:</strong><br>Bruno Miglioli<br>Contacto:<a href=https://wa.me/5492664037594>+54 9 266 403-7594</a></br>")
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
    .setContent("<strong>Departamento de Limpieza</strong> <p><strong>Superintendente:</strong><br>Eduardo Pereyra<br>Contacto:<a href=https://wa.me/5492664573554>+54 9 266 457-3554</a></br><p><strong>Auxiliar:</strong><br>Juan Carlos Ansaldi<br>Contacto:<a href=https://wa.me/5492664559159>+54 9 266 455-9159</a></br>")
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
    .setContent("<strong>Departamento de Instalaciones</strong> <p><strong>Superintendente:</strong><br>Mario García<br>Contacto:<a href=https://wa.me/5492664615222>+54 9 266 461-5222</a></br><p><strong>Auxiliar:</strong><br>Fabián Herrera<br>Contacto:<a href=https://wa.me/5492664567235>+54 9 266 456-7235</a></br>")
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
    .setContent("<strong>Departamento de Guardarropa y Objetos Perdidos</strong> <p><strong>Superintendente:</strong><br>Vicente Azzarito<br>Contacto:<a href=https://wa.me/5493584123498>+54 9 358 412-3498</a></br><p><strong>Auxiliar:</strong><br>Hugo Orellana<br>Contacto:<a href=https://wa.me/5493462 67-3729>+54 9 346 267-3729</a></br>")
    .openOn(map);
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
    .setContent("<strong>Departamento de Bautismo</strong> <p><strong>Superintendente:</strong><br>Miguel Bruza<br>Contacto:<a href=https://wa.me/5492664394021>+54 9 266 439-4021</a></br><p><strong>Auxiliar:</strong><br>José Luis Ruiz<br>Contacto:<a href=https://wa.me/5492664626201>+54 9 266 462-6201</a></br>")
    .openOn(map);
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
    .setContent("<strong>Departamento de Bautismo</strong> <p><strong>Superintendente:</strong><br>Miguel Bruza<br>Contacto:<a href=https://wa.me/5492664394021>+54 9 266 439-4021</a></br><p><strong>Auxiliar:</strong><br>José Luis Ruiz<br>Contacto:<a href=https://wa.me/5492664626201>+54 9 266 462-6201</a></br>")
    .openOn(map);
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
    .setContent("<strong>Departamento de Audio y Video</strong> <p><strong>Superintendente:</strong><br>Sebastian Vava<br>Contacto:<a href=https://wa.me/5492664637393>+54 9 266 463-7393</a></br><p><strong>Auxiliar:</strong><br>Eugenio Ruiz<br>Contacto:<a href=https://wa.me/5492664257902>+54 9 266 425-7902</a></br><p>")
    .openOn(map);
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
    .setContent("<strong>Departamento de Plataforma</strong> <p><strong>Superintendente:</strong><br>Hugo Salguero<br>Contacto:<a href=https://wa.me/5492664038391>+54 9 266 403-8391</a></br><p><strong>Auxiliar:</strong><br>Rodolfo Dominguez<br>Contacto:<a href=https://wa.me/5492664747376>+54 9 266 474-7376</a></br>")
    .openOn(map);
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
    .setContent("<strong>Transporte y Materiales</strong> <p><strong>Superintendente:</strong><br>Lucas Quinteros<br>Contacto:<a href=https://wa.me/5492664380011>+54 9 266 438-0011</a></br><p><strong>Auxiliar:</strong><br>Walter Mariño<br>Contacto:<a href=https://wa.me/5492664625022>+54 9 266 462-5022</a></br>")
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
    .setContent("<strong>Transporte y Materiales</strong> <p><strong>Superintendente:</strong><br>Lucas Quinteros<br>Contacto:<a href=https://wa.me/5492664380011>+54 9 266 438-0011</a></br><p><strong>Auxiliar:</strong><br>Walter Mariño<br>Contacto:<a href=https://wa.me/5492664625022>+54 9 266 462-5022</a></br>")
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
    .setContent("<strong>Presidencia del programa</strong> <p><strong>Superintendente:</strong><br>Rodrigo Andrés Rizzi<br>Contacto:<a href=https://wa.me/5493416541651>+54 9 341 654-1651</a></br>")
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
    .setContent("<strong>Presidencia del programa</strong> <p><strong>Superintendente:</strong><br>Rodrigo Andrés Rizzi<br>Contacto:<a href=https://wa.me/5493416541651>+54 9 341 654-1651</a></br>")
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