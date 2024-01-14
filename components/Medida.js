// Esta clase viene de CardTiempo.js

const Medida = (dato, valor, ciudad) => {

  const {claseIcono, unidad, nombre} = dato

  return (
    `
      <div 
        id="${ciudad}-${nombre}"
        class="d-flex justify-content-center align-items-center gap-2" 
        style="font-size: 2rem;">
        <i class="fa-solid ${claseIcono}"></i>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span style="font-size: 1.5rem;"> ${valor}${unidad} </span>
          <span style="font-size: .8rem">${nombre}</span>
        </div>
      </div>
    `
  )
}