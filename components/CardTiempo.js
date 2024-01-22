// ciudad proviene de Balizas.js
const CardTiempo = async (ciudad) => {

  //Estos datos se deben extraer de la api y falta la imagen
  const {
    temperatura_actual:temp, 
    temperaturas,
    humedad,
    viento,
    precipitacion,
    stateSky
  } = await traerInfoCiudad(ciudad)

  const {max:temp_max, min:temp_min} = temperaturas

  const dato = { temp, humedad, temp_max, temp_min, viento, precipitacion }

  let medidasHTML = ''

  //Comprobar las medidas seleccionadas en un objeto y en base a eso recorrerlo

  //Cambiar depende de que seleccione el usuario

  ciudad.medidasSeleccionadas.forEach(medida => {
    if (MEDIDAS[medida]) medidasHTML += Medida(MEDIDAS[medida], dato[medida], ciudad)
  })

  lucide.createIcons();

  return (
    `
      <div 
        class="mt-2 position-relative col-11 col-sm-6 col-xl-4 pb-3" 
        style="border-radius: 10px; background: #94d7fc; border: 5px solid white;color: #215AAC"
      >
        <div>
          <h2 class="px-4 m-0" style="font-size: 6rem; font-weight: 900;font-family: 'Montserrat', sans-serif;">
            ${temp}º</h2>
          <h3 class="px-4 mb-3" style="font-size: 2.5rem; font-weight: 400; font-family: 'Assistant', sans-serif; margin-top: -15px; color:#183053">${ciudad.nombre}</h3>
        </div>
        <img class="position-absolute" style="height: 200px; left: 55%; top: -25%;z-index:3000;filter: drop-shadow(0 2px 5px rgba(31,76,137, 0.7));" src="public/iconosTiempo/vecteezy_3d-weather-icon-night-with-rain_24825169.png" alt="">
        <div 
          class="px-4 d-flex justify-content-start gap-2 flex-wrap"
          style="cursor:pointer"  
          onclick="mostrarModalSeleccionMedidas('${ciudad.nombre}')"
        >
          ${medidasHTML}
        </div>
      </div>
    `
  )
}

function mostrarModalSeleccionMedidas(nombreCiudad) {
  const modalSeleccionMedidasHTML = ModalSeleccionMedidas(nombreCiudad)
  document.getElementById('contenedorCardsTiempo').innerHTML += modalSeleccionMedidasHTML
  lucide.createIcons()
}

async function traerInfoCiudad(ciudad) {
  const response = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${ciudad.codProvincia}/municipios/${ciudad.codMunicipio.slice(0, 5)}`)
  const data = await response.json()

  return data
}