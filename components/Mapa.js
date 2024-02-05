const Mapa = () => {
  const mapa = document.getElementById("mapa");

  mapa.style.height = "100%";
  mapa.style.width = "100%";

  const map = L.map("mapa").setView([43.345, -1.798], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  BBDD_MUNICIPIOS.municipios.forEach((muncipio) => {
    const {
      LONGITUD_ETRS89_REGCAN95: longitud,
      LATITUD_ETRS89_REGCAN95: latitud,
      NOMBRE_CAPITAL: nombre,
      CODIGOINE: codMunicipio,
      CODPROV: codProvincia
    } = muncipio;
    const marcador = L.marker([latitud, longitud]).addTo(map);
    marcador.bindTooltip(nombre, {
      permanent: false, // El tooltip no será permanente
      direction: "top", // Se mostrará encima del marcador
      offset: L.point(0, 0), // Desplazamiento del tooltip respecto al marcador
    });

    const clase = `marcador-${nombre.replaceAll(' ', '-')}`

    marcador._icon.classList.add(clase);

    if (ciudadesSeleccionadas.find(ciudad => ciudad.clase === clase)) {
      document.querySelector('.' + clase).style.filter =  "hue-rotate(120deg)"
    }

    marcador.addEventListener("click", () => {
      if (ciudadesSeleccionadas.find(ciudad => ciudad.nombre === nombre)) {
        Toast.fire({
          icon: "error",
          title: `${nombre} eliminado`
        })
        ciudadesSeleccionadas = ciudadesSeleccionadas.filter(ciudad => ciudad.nombre !== nombre)
        document.querySelector('.' + clase).style.filter =  "hue-rotate(0deg)"
        return
      }

      document.querySelector('.' + clase).style.filter =  "hue-rotate(120deg)"

      Toast.fire({
        icon: "success",
        title: `${nombre} agregado`
      })

      const medidasSeleccionadas = ['humedad', 'temp_max', 'temp_min', 'viento', 'precipitacion']
      const medidasMostradas = ['Humedad', 'Maxima', 'Minima', 'Viento', 'Precipitacion']


      ciudadesSeleccionadas.push({
        nombre,
        codProvincia,
        codMunicipio,
        medidasSeleccionadas,
        medidasMostradas,
        clase
      })
    });
  });
};
