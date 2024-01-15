const ModalSeleccionMedidas = (ciudad) => {
  return (
    `
      <div
        class="position-fixed col-11 col-md-6 p-4"
        style="left:50%; top:50%; background-color: white; transform: translate(-50%, -50%); z-index: 30000; border-radius: 10px; box-shadow: 0px 0px 1px rgba(3, 7, 18, 0.02), 0px 0px 4px rgba(3, 7, 18, 0.03), 0px 0px 9px rgba(3, 7, 18, 0.05), 0px 0px 15px rgba(3, 7, 18, 0.06), 0px 0px 24px rgba(3, 7, 18, 0.08); "
      >
        <div 
          id="medidas"
          class="pb-1"
          style="border-bottom: 2px solid black"
        >
          <h2
            style="font-size:2.2rem; font-family: 'Montserrat', sans-serif;" 
            class="text-center mb-2 text-uppercase fw-bold">Medidas</h2>
          <p
            class="d-flex justify-content-evenly align-items-center" 
            style="font-size: 2.5rem; height: 60px"
            ondrop="dejarIcono(event, this)"
            ondragover="permitirDrop(event)"
          >
            <span 
              id="iconoMaxima" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
            >
              <i class="fa-solid fa-temperature-arrow-up"></i>
            </span>
            <span 
              id="iconoMinima" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
            >
              <i class="fa-solid fa-temperature-arrow-down"></i>
            </span>
            <span 
              id="iconoViento" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
            >
              <i class="fa-solid fa-wind"></i>
            </span>
            <span 
              id="iconoPrecipitacion" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
            >
              <i class="fa-solid fa-umbrella"></i>
            </span>
        </div>
        <div 
          id="seleccionadas"
          class="my-3"
        >
          <h2
            style="font-size:2.2rem; font-family: 'Montserrat', sans-serif;" 
            class="text-center mb-2 text-uppercase fw-bold"
          >
            Seleccionadas
          </h2>
          <div 
            ondrop="dejarIcono(event, this)"
            ondragover="permitirDrop(event)"
            class="d-flex justify-content-evenly align-items-center"
            style="font-size: 2.5rem; height: 60px"
          ></div>
        </div>
        <div class="row fw-bold text-uppercase" style="color:white; ">
          <p 
            class="col-6 text-center py-2"
            style="border: 2px solid white; background-color:#AAA; cursor:pointer"
          >Cancelar</p>
          <p 
            class="col-6 text-center py-2"
            style="border: 2px solid white; background-color:#0288d1; cursor:pointer"
          >Aceptar</p>
        </div>
      </div>
    `
  )
}

function moverIcono(event, elem) {
  event.dataTransfer.setData("text", elem.id);
  console.log(elem.id)
}

function dejarIcono(event, elem) {
  const idIcono = event.dataTransfer.getData("text")
  console.log(idIcono)
  $(`#${idIcono}`).appendTo(elem);
}

function permitirDrop(event) {
  event.preventDefault();
}
