const Mapa = () => {
  const mapa = document.getElementById('mapa')

  mapa.style.height = '100%'
  mapa.style.width = '100%'

  const map = L.map("mapa").setView([43.345, -1.798], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  LUGARES.forEach((lugar) => {
    const marcador = L.marker([lugar.latitud, lugar.longitud]).addTo(map);
    marcador.bindTooltip(lugar.nombre, {
      permanent: false, // El tooltip no será permanente
      direction: "top", // Se mostrará encima del marcador
      offset: L.point(0, -20), // Desplazamiento del tooltip respecto al marcador
    });

    marcador.addEventListener("click", () => console.log(lugar.nombre));
  });
};
