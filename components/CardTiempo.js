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
    if (MEDIDAS[medida]) medidasHTML += Medida(MEDIDAS[medida], dato[medida], ciudad.nombre)
  })

  return (
    `
      <div 
        class="mt-2 position-relative col-11 col-sm-6 col-xl-4 pb-3" 
        style="border-radius: 40px; background: hsla(145, 83%, 74%, 1); background: linear-gradient(45deg, hsla(145, 83%, 74%, 1) 0%, hsla(204, 77%, 76%, 1) 100%); border: 5px solid white;"
        onclick="cambiarSeleccionMedidas()"
      >
        <div>
          <h2 class="px-4 m-0" style="font-size: 6rem; font-weight: 900;font-family: 'Montserrat', sans-serif;">
            ${temp}º</h2>
          <h3 class="px-4" style="font-size: 2.5rem; font-weight: 700; margin-top: -15px;">${ciudad.nombre}</h3>
        </div>
        <img class="position-absolute" style="height: 200px; left: 55%; top: -25%;z-index:3000" src="public/iconosTiempo/vecteezy_3d-weather-icon-night-with-rain_24825169.png" alt="">
        <div 
          class="px-4 d-flex justify-content-start gap-3 flex-wrap"
          style="cursor:pointer"  
        >
          ${medidasHTML}
        </div>
      </div>
    `
  )
}

async function traerInfoCiudad(ciudad) {
  const response = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${ciudad.codProvincia}/municipios/${ciudad.codMunicipio.slice(0, 5)}`)
  const data = await response.json()

  return data
}