const Balizas = () => {

  let cardsHTML = ''

  INFORMACION_CARD_TIEMPO.forEach(dato => {
    cardsHTML += CardTiempo(dato)
  })

  return (
    `
    <div class="w-100 d-flex justify-content-center justify-content-sm-start align-items-center flex-column flex-sm-row flex-wrap pt-4">
      ${cardsHTML}
    </div>
    `
  )
}