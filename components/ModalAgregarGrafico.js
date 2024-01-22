const ModalAgregarGrafico = () => {
  const btnAceptar = Boton("Generar", "#215AAC", `comprobarDatos()`, "col-6");
  const btnCancelar = Boton(
    "Cancelar",
    "#AAA",
    `borrarModalAgregarGrafico()`,
    "col-6"
  );

  let optionMunicipios = "";
  let optionMediciones = "";

  BBDD_MUNICIPIOS.municipios.forEach(
    (municio) => (optionMunicipios += Option(municio.NOMBRE_CAPITAL))
  );
  Object.values(MEDIDAS).forEach(
    (medida) => (optionMediciones += Option(medida.nombre))
  );

  return `
      <div
        id="modalAgregarGrafico"
        class="position-fixed col-11 col-md-6 p-4"
        style="left:50%; top:50%; background-color: white; transform: translate(-50%, -50%); z-index: 3001; border-radius: 10px; box-shadow: 0px 0px 1px rgba(3, 7, 18, 0.02), 0px 0px 4px rgba(3, 7, 18, 0.03), 0px 0px 9px rgba(3, 7, 18, 0.05), 0px 0px 15px rgba(3, 7, 18, 0.06), 0px 0px 24px rgba(3, 7, 18, 0.08); "
      >
        <h2
          style="font-size:2.2rem; font-family: 'Montserrat', sans-serif; color: #333" 
          class="text-center mb-2 fw-medium mt-4"
        >
          Agregar Gráfico
        </h2>
        <div id="errorContainer"></div>
        <form class="row">
          <div class="flex flex-column">
            <label class="form-label">Municipio</label>
            <select id="municipioForm" class="form-select">
              <option value=""> -- Seleccione Municipio -- </option>
              ${optionMunicipios}
            </select>
          </div>
          <div class="flex flex-column">
            <label class="form-label">Medicion</label>
            <select id="medicionesForm" class="form-select">
              <option value=""> -- Seleccione Medida -- </option>
              ${optionMediciones}
            </select>
          </div>
          <div class="flex flex-column">
            <label class="form-label">Fecha inicio</label>
            <input id="fechaInicioForm" class="form-control" type="date">
          </div>
          <div class="flex flex-column">
            <label class="form-label">Fecha fin</label>
            <input id="fechaFinForm" class="form-control" type="date">
          </div>
        </form>
        <div class="row px-2 mt-3" style="color:white; ">
          ${btnCancelar}
          ${btnAceptar}
        </div>
      </div>
    `;
};

function comprobarDatos() {
  const municipioForm = document.getElementById("municipioForm");
  const medicionesForm = document.getElementById("medicionesForm");
  const fechaInicioForm = document.getElementById("fechaInicioForm");
  const fechaFinForm = document.getElementById("fechaFinForm");

  const errorContainer = document.getElementById("errorContainer");

  if (
    municipioForm.value.trim() == "" ||
    medicionesForm.value.trim() == "" ||
    fechaInicioForm.value.trim() == "" ||
    fechaFinForm.value.trim() == ""
  ) {
    errorContainer.innerHTML = Error("Rellene todos los campos");
    return;
  }

  const existeMunicipio = BBDD_MUNICIPIOS.municipios.find(
    (municio) => municio.NOMBRE_CAPITAL === municipioForm.value
  );

  if (existeMunicipio == undefined) {
    errorContainer.innerHTML = Error("El municipio no existe");

    return;
  }

  const fechaInicioFormDate = new Date(fechaInicioForm.value);
  const fechaFinFormDate = new Date(fechaFinForm.value);

  if (fechaFinFormDate > new Date() || fechaInicioFormDate > fechaFinFormDate) {
    errorContainer.innerHTML = Error("Fecha incorrecta");
    return;
  }

  errorContainer.innerHTML = "";
  
  // Grafico(idCanvas, padre); borrar
  
  borrarModalAgregarGrafico();
  
  const padre = document.getElementById("contenedorGraficos");

  graficos.push({
    municipio: municipioForm.value,
    medicion: medicionesForm.value,
    fechaInicio: fechaInicioForm.value,
    fechaFin: fechaFinForm.value,
  });

  graficos.forEach(grafico => Grafico(grafico, padre));
}

function borrarModalAgregarGrafico() {
  const padre = document.getElementById("contenedorGraficos");
  const modal = document.getElementById("modalAgregarGrafico");

  padre.removeChild(modal);
}
