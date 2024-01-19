const ModalSeleccionMedidas = (ciudad) => {

  const btnAceptar = Boton('Aceptar', '#0288d1', `filtrarMediciones('${ciudad}')`, 'col-6')
  const btnCancelar = Boton('Cancelar', '#AAA', `borrarModalSeleccionMedidas()`, 'col-6')

  return (
    `
      <div
        id="modalSeleccionMedidas"
        class="position-fixed col-11 col-md-6 p-4"
        style="left:50%; top:50%; background-color: white; transform: translate(-50%, -50%); z-index: 30000; border-radius: 10px; box-shadow: 0px 0px 1px rgba(3, 7, 18, 0.02), 0px 0px 4px rgba(3, 7, 18, 0.03), 0px 0px 9px rgba(3, 7, 18, 0.05), 0px 0px 15px rgba(3, 7, 18, 0.06), 0px 0px 24px rgba(3, 7, 18, 0.08); "
      >
        <div 
          id="medidas"
          class="pb-1"
        >
          
          <p
            id="zonaDrag"
            class="d-flex justify-content-evenly align-items-center" 
            style="font-size: 2.5rem; height: 60px"
            ondrop="dejarIcono(event, this)"
            ondragover="permitirDrop(event)"
          >
            <span 
              id="iconoMaxima" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
              valor-nombre="Maxima"
              valor-codigo="temp_max"
            >
              <i class="fa-solid fa-temperature-arrow-up"></i>
            </span>
            <span 
              id="iconoMinima" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
              valor-nombre="Minima"
              valor-codigo="temp_min"
            >
              <i class="fa-solid fa-temperature-arrow-down"></i>
            </span>
            <span 
              id="iconoViento" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
              valor-nombre="Viento"
              valor-codigo="viento"
            >
              <i class="fa-solid fa-wind"></i>
            </span>
            <span 
              id="iconoPrecipitacion" 
              draggable="true"
              ondragstart="moverIcono(event, this)"
              valor-nombre="Precipitacion"
              valor-codigo="precipitacion"
            >
              <i class="fa-solid fa-umbrella"></i>
            </span>
            <h2
            style="font-size:2.2rem; font-family: 'Montserrat', sans-serif;" 
            class="text-center mb-2 fw-bold mt-4">Añade tus medidas</h2>
        </div>
        <div 
          id="seleccionadas"
          class="my-3 p-5"
          style="border: 2px grey dotted"
          ondragover="permitirDrop(event)"
          ondragleaver="salirDrop(event)"
        > 

          <p
            style="font-size:1.3rem; font-family: 'Montserrat', sans-serif;" 
            class="text-center mb-2 fw-ligth d-flex flex-column align-items-center justify-content-center gap-4"
          > 
            <i id="flecha" class="d-block" style="transform:scale(3)" data-lucide="arrow-down-circle"></i>
            <span class="mt-2">Arrastra las medidas a este cuadro</span>
          </p>
          <div 
            id="zonaDrop"
            ondrop="dejarIcono(event, this)"
            ondragover="permitirDrop(event)"
            class="d-flex justify-content-evenly align-items-center"
            style="font-size: 2.5rem;"
          ></div>
        </div>
        <div class="row px-2" style="color:white; ">
          ${btnCancelar}
          ${btnAceptar}
        </div>
      </div>
    `
  )
}

function moverIcono(event, elem) {
  event.dataTransfer.setData("text", elem.id);
}

function dejarIcono(event, elem) {
  const idIcono = event.dataTransfer.getData("text")
  $(`#${idIcono}`).appendTo(elem);
}

function permitirDrop(event) {
  event.preventDefault();
  document.getElementById('seleccionadas').style.backgroundColor = '#94d8fc67'
}

function salirDrop(event) {
  event.preventDefault();
  document.getElementById('seleccionadas').style.backgroundColor = '#cccccc67'
}

function filtrarMediciones(ciudad) {
  const iconosDrag = document.querySelectorAll('#zonaDrag span')
  const iconosDrop = document.querySelectorAll('#zonaDrop span')

  iconosDrag.forEach(icono => {
    document.getElementById(`${ciudad}-${icono.getAttribute('valor-nombre')}`).classList.add('d-none')
  })

  const nuevasMedidasMostradas = ['Humedad']
  const ciudadObj = ciudadesSeleccionadas.find(c => c.nombre == ciudad)

  iconosDrop.forEach(icono => {
    document.getElementById(`${ciudad}-${icono.getAttribute('valor-nombre')}`).classList.remove('d-none')
    nuevasMedidasMostradas.push(icono.getAttribute('valor-nombre'))
  })

  ciudadObj.medidasMostradas = nuevasMedidasMostradas

  borrarModalSeleccionMedidas()
}

function borrarModalSeleccionMedidas() {
  const padre = document.getElementById('contenedorCardsTiempo')
  const modal = document.getElementById('modalSeleccionMedidas')

  padre.removeChild(modal)
}
