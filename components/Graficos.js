const Graficos = () => {

  const btnAgregarGrafico = Boton('Agregar', '#215AAC', 'mostrarModalAgregarGraficos()', 'col-3')
  

  return (
    `
      <div id="contenedorGraficos" class="row">
        <div class="col-12 d-flex justify-content-end align-items-center">
          ${btnAgregarGrafico}
        </div>
      </div>
    `
  )
}

function mostrarModalAgregarGraficos() {
  const modalAgregarGrafico = ModalAgregarGrafico()
  document.getElementById('contenedorGraficos').innerHTML += modalAgregarGrafico
}