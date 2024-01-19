const ModalAgregarGrafico = () => {

  const btnAceptar = Boton('Aceptar', '#0288d1', ``, 'col-6')
  const btnCancelar = Boton('Cancelar', '#AAA', `borrarModalSeleccionMedidas()`, 'col-6')

  return (
    `
      <div
        id="modalAgregarGrafico"
        class="position-fixed col-11 col-md-6 p-4"
        style="left:50%; top:50%; background-color: white; transform: translate(-50%, -50%); z-index: 30000; border-radius: 10px; box-shadow: 0px 0px 1px rgba(3, 7, 18, 0.02), 0px 0px 4px rgba(3, 7, 18, 0.03), 0px 0px 9px rgba(3, 7, 18, 0.05), 0px 0px 15px rgba(3, 7, 18, 0.06), 0px 0px 24px rgba(3, 7, 18, 0.08); "
      >
        <h2>Agregar Grafico</h2>
        <form>
          <div>
            <label>Municipio</label>
            <input >
        </form>
        <div class="row" style="color:white; ">
          ${btnCancelar}
          ${btnAceptar}
        </div>
      </div>
    `
  )
}