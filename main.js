// Donde carga el html de cada seccion
const paginaSinLog = document.getElementById("paginaSinLog");
const paginaConLog = document.getElementById("paginaConLog");
const loginRegister = document.getElementById("loginRegister");

let ciudadesSeleccionadas = JSON.parse(localStorage.getItem('ciudadesSeleccionadasJSON')) || []
let modalSeleccionMedidasHTML = ''
let access_token
let intervaloBalizas
let localizaciones
const graficos = []

let urlActual = (new URL(window.location.origin)).hostname;

console.log(urlActual)

cargarPaginaSinLogin()

function cargarPaginaSinLogin() {
  paginaSinLog.innerHTML += NavSinLog();
  paginaSinLog.innerHTML += PrincipalSinLog();
  paginaSinLog.innerHTML += PlanesSinLog();
  paginaSinLog.innerHTML += SobreNosotrosSinLog();
  paginaSinLog.innerHTML += ContactoSinLog();
  paginaSinLog.innerHTML += Footer();
}

function borrarPaginaSinLogin() {
  paginaSinLog.innerHTML = "";
}

function cargarLoginRegister() {
  loginRegister.innerHTML = Login();
}

function borrarLoginRegister() {
  loginRegister.innerHTML = "";
}

function limpiarPaginaConLog() {
  document.getElementById('tabs').innerHTML = 
  ` 
    <div id="mapa"></div>
    <div id="balizas"></div>
    <div id="graficos"></div>
    <div id="datos-usuario"></div>
  `
}

function borrarPaginaConLogin() {
  paginaConLog.innerHTML = ''
}

function cargarPaginaConLogin() {

  paginaConLog.innerHTML = Aside() + 
  `
    <section id="tabs" class="col-xl-10 col-md-9 p-0 p-md-2 mb-0">
      <div id="mapa"></div>
      <div id="balizas"></div>
      <div id="graficos"></div>
      <div id="datos-usuario"></div>
    </section>
  `

  // Luego hay que hacer esto fijandose en el localStorage si existe algun registro mostrar directamente las balizas si no el mapa
  if (ciudadesSeleccionadas.length > 0) navegarBalizas()
  else navegarMapa()
  // navegarGraficos()
}

// cargarPaginaConLogin()

// Esta funciona ira cuando el login sea valido, por ahora se queda aqui para pobrar cuando se terminen las pruebas quitar de aqui

// Mapa()

// Drag and Drop

