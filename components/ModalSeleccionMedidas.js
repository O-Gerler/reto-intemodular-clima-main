const ModalSeleccionMedidas = () => {
  return (
    `
      <div
        class="position-fixed col-11 col-md-6 p-4"
        style="height: 50vh; left:50%; top:50%; background-color: white; transform: translate(-50%, -50%); z-index: 30000; border-radius: 10px; box-shadow: 0px 0px 1px rgba(3, 7, 18, 0.02), 0px 0px 4px rgba(3, 7, 18, 0.03), 0px 0px 9px rgba(3, 7, 18, 0.05), 0px 0px 15px rgba(3, 7, 18, 0.06), 0px 0px 24px rgba(3, 7, 18, 0.08); user-select: all"
      >
        <div 
          class="pb-1"
          style="border-bottom: 2px solid black"
        >
          <h2
            style="font-size:2.5rem" 
            class="text-center mb-2 text-uppercase fw-700">Medidas</h2>
          <p
            class="d-flex justify-content-evenly" 
            style="font-size: 2.5rem"
          >
            <span 
              id="iconoMaxima" 
              draggable="true"
            >
              <i class="fa-solid fa-temperature-arrow-up"></i>
            </span>
            <span 
              id="iconoMinima" 
              draggable="true"
            >
              <i class="fa-solid fa-temperature-arrow-down"></i>
            </span>
            <span 
              id="iconoViento" 
              draggable="true"
            >
              <i class="fa-solid fa-wind"></i>
            </span>
            <span i
              d="iconoPrecipitacion" 
              draggable="true"
            >
              <i class="fa-solid fa-umbrella"></i>
            </span>
        </div>
      </div>
    `
  )
}