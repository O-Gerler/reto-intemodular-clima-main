const Aside = () => {
  return (
    `
      <aside
        class="col-md-3 col-xl-2 d-none d-md-flex justify-content-between align-items-center flex-column"
      >
        <h2 style="font-family: 'Montserrat', sans-serif; color: white">
          EuskoClima
        </h2>
        <ul>
          <li
            style="font-size: 1.35rem; border-radius: 10px"
            class="mt-1 px-3 py-2 btn-mapa activo"
            onclick="navegarMapa()"
          >
            <i class="fa-solid fa-map-location-dot"></i>
            <span class="p-2">Mapa</span>
          </li>
          <li
            style="font-size: 1.35rem; border-radius: 10px"
            class="mt-1 px-3 py-2 btn-balizas"
            onclick="navegarBalizas()"
          >
            <i class="fa-solid fa-location-dot"></i>
            <span class="p-2">Balizas</span>
          </li>
          <li
            style="font-size: 1.35rem; border-radius: 10px"
            class="mt-1 px-3 py-2 btn-graficos"
            onclick="navegarGraficos()"
          >
            <i class="fa-solid fa-chart-line"></i>
            <span class="p-2">Graficos</span>
          </li>
          <li
            style="font-size: 1.35rem; border-radius: 10px"
            class="mt-1 px-3 py-2 btn-perfil"
            onclick="navegarPerfil()"
          >
            <i class="fa-solid fa-user"></i>
            <span class="p-2">Perfil</span>
          </li>
        </ul>
        <p
          class="w-100 text-center py-3"
          style="border-top: 1px solid white; cursor: pointer; color: white"
        ><i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión</p>
      </aside>
      <footer 
        class="d-block d-md-none position-absolute py-1 w-100" style="bottom: 0%;"
      >
        <ul class="d-flex justify-content-evenly" >
          <li
            style="font-size: 2rem; border-radius: 50%"
            class="mt-1 p-2 px-sm-4 py-sm-3 btn-mapa activo"
            onclick="navegarMapa()"
          >
            <i class="fa-solid fa-map-location-dot"></i>
          </li>
          <li
            style="font-size: 2rem; border-radius: 50%"
            class="mt-1 p-2 px-3 px-sm-4 py-sm-3 btn-balizas"
            onclick="navegarBalizas()"
          >
            <i class="fa-solid fa-location-dot"></i>
          </li>
          <li
            style="font-size: 2rem; border-radius: 50%"
            class="mt-1 p-2 px-3 px-sm-4 py-sm-3 btn-graficos"
            onclick="navegarGraficos()"
          >
            <i class="fa-solid fa-chart-line"></i>
          </li>
          <li
            style="font-size: 2rem; border-radius: 50%"
            class="mt-1 p-2 px-3 px-sm-4 py-sm-3 btn-perfil"
            onclick="navegarPerfil()"
          >
            <i class="fa-solid fa-user"></i>
          </li>
          <li
            style="font-size: 2rem; border-radius: 50%;"
            class="mt-1 p-2 px-sm-4 py-sm-3"
            onclick="navegarPerfil()"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
          </li>
        </ul>
      </footer>
    `
  )
}

const borrarClaseActivo = () => {
  const navItems = document.querySelectorAll('aside li')
  navItems.forEach(item => item.classList.remove('activo'))

  const footerItems = document.querySelectorAll('footer li')
  footerItems.forEach(item => item.classList.remove('activo'))
}

const navegarMapa = () => {
  limpiarPaginaConLog()
  borrarClaseActivo()
  const btnBalizas = document.querySelectorAll('.btn-mapa')
  btnBalizas.forEach( btn => btn.classList.add('activo') )
  Mapa()
}

const navegarBalizas = async () => {
  limpiarPaginaConLog()
  borrarClaseActivo()
  const btnBalizas = document.querySelectorAll('.btn-balizas')
  btnBalizas.forEach( btn => btn.classList.add('activo') )
  document.getElementById('balizas').innerHTML = await Balizas()
  lucide.createIcons()
}

const navegarGraficos = () => {
  limpiarPaginaConLog()
  borrarClaseActivo()
  const btnBalizas = document.querySelectorAll('.btn-graficos')
  btnBalizas.forEach( btn => btn.classList.add('activo') )
  document.getElementById('graficos').innerHTML = Graficos()
}

const navegarPerfil = () => {
  limpiarPaginaConLog()
  borrarClaseActivo()
  const btnBalizas = document.querySelectorAll('.btn-perfil')
  btnBalizas.forEach( btn => btn.classList.add('activo') )
  // Mapa()
}