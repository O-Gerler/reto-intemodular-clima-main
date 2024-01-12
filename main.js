// Donde carga el html de cada seccion
const paginaSinLog = document.getElementById("paginaSinLog");
const paginaConLog = document.getElementById("paginaConLog");
const loginRegister = document.getElementById("loginRegister");


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
    <div id="datos-usuario"></div>
  `
}

function cargarPaginaConLogin() {

  paginaConLog.innerHTML = Aside() + 
  `
    <section id="tabs" class="col-xl-10 col-md-9 p-0 p-md-2">
      <div id="mapa"></div>
      <div id="balizas"></div>
      <div id="datos-usuario"></div>
    </section>
  `

  Mapa()
}

cargarPaginaConLogin()

// Esta funciona ira cuando el login sea valido, por ahora se queda aqui para pobrar cuando se terminen las pruebas quitar de aqui

// Mapa()

