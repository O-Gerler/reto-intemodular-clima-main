// dato proviene de Balizas.js
const CardTiempo = (dato) => {

  //Estos datos se deben extraer de la api y falta la imagen
  const {nombre, temp, humendad, temp_max, temp_min, viento, precipitaciones} = dato

  return (
    `
      <div 
        class="mt-2 position-relative col-11 col-sm-6 col-xl-4 pb-3" 
        style="border-radius: 40px; background: hsla(145, 83%, 74%, 1);
          background: linear-gradient(90deg, hsla(145, 83%, 74%, 1) 0%, hsla(204, 77%, 76%, 1) 100%);
          border: 2px solid white;"
        >
        <div>
          <h2 class="px-4 m-0" style="font-size: 6rem; font-weight: 900;font-family: 'Montserrat', sans-serif;">
            ${temp}º</h2>
          <h3 class="px-4" style="font-size: 2.5rem; font-weight: 700; margin-top: -2 0px;">${nombre}</h3>
        </div>
        <img class="position-absolute" style="height: 200px; left: 55%; top: -25%;z-index:3000" src="public/iconosTiempo/vecteezy_3d-weather-icon-night-with-rain_24825169.png" alt="">
        <div class="px-4 d-flex justify-content-start gap-3 flex-wrap">
          <p 
            class="d-flex justify-content-center align-items-center" 
            style="font-size: 2rem;"><i class="fa-solid fa-droplet"
          ></i><span> ${humendad}</span></p>
          <p 
            class="d-flex justify-content-center align-items-center" 
            style="font-size: 2rem;"
          ><i class="fa-solid fa-temperature-arrow-up"></i><span>${temp_max}</span></p>
          <p 
            class="d-flex justify-content-center align-items-center" 
            style="font-size: 2rem;"
          ><i class="fa-solid fa-temperature-arrow-down"></i><span>${temp_min}</span></p>
          <p 
            class="d-flex justify-content-center align-items-center" 
            style="font-size: 2rem;"
          ><i class="fa-solid fa-wind"></i><span>${viento}</span></p>
          <p 
            class="d-flex justify-content-center align-items-center" 
            style="font-size: 2rem;"
          ><i class="fa-solid fa-umbrella"></i><span>${precipitaciones}</span></p>
        </div>
      </div>
    `
  )
}