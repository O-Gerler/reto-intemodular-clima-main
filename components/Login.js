const alternarLoginRegister = () => {
  const fondoLogin = $('#fondo-login')
  const formRegister = $('#form-register')
  const formLogin = $('#form-login')
  fondoLogin.toggleClass('mover-login')
  setTimeout(() => {
    formRegister.toggleClass('d-none')
    formLogin.toggleClass('d-none')
  }, 500);
}

const iniciarSesion = e => {
  e.preventDefault()

  // Comprobaciones antes de mandar

  //Verificar que sea correcto el inicio de sesión

  // Mandar datos de el usuario
  
  borrarLoginRegister()
  borrarPaginaSinLogin()
}

const registrarse = e => {
  e.preventDefault()
  
  // Comprobaciones antes de mandar

  // Verificar que sea correcto el registro

  // Mandar datos de el usuario

  borrarLoginRegister()
  borrarPaginaSinLogin()
}

const Login = () => {


  return (
    `
      <section id="login" class="p-absolute container">
        <main style="height: 100%; position: relative;" class="row">
          <div id="fondo-login" class="col-12 col-lg-6"></div>
          <p style="position: absolute; z-index: 10000">
            <i 
              onclick="borrarLoginRegister()" 
              style="color: black" 
              class="fa-solid fa-x m-2 mt-4"
            ></i>
          </p>
          <div id="form-register" class="d-none d-flex d-lg-flex flex-column justify-content-center align-items-center col-lg-6">
            <form
              action=""
              class="col-12 d-flex flex-column justify-content-center align-items-center"
              onsubmit="registrarse(event)"
            >
              <h2 class="mb-3">Registro</h2>
              <div class="d-flex flex-column col-12 col-md-8 mt-1">
                <label class="form-label" for="">Nombre</label>
                <input class="form-control" type="text" name="" id="" />
              </div>
              <div class="d-flex flex-column col-12 col-md-8 mt-1">
                <label class="form-label" for="">Apellidos</label>
                <input class="form-control" type="text" name="" id="" />
              </div>
              <div class="d-flex flex-column col-12 col-md-8 mt-1">
                <label class="form-label" for="">Email</label>
                <input class="form-control" type="email" name="" id="" />
              </div>
              <div class="d-flex flex-column col-12 col-md-8 mt-1">
                <label class="form-label" for="">Contraseña</label>
                <input class="form-control" type="password" name="" id="" />
              </div>
              <div class="d-flex flex-column col-12 col-md-8 mt-1">
                <label class="form-label" for="">Repetir Contraseña</label>
                <input class="form-control" type="password" name="" id="" />
              </div>
              <div class="mt-3 col-12 col-md-8">
                <input
                  id="btn-iniciar-sesion"
                  class="btn"
                  type="submit"
                  value="Registrarse"
                />
              </div>
              <div class="mt-2 cursor-pointer" style="cursor: pointer">
                <p onclick="alternarLoginRegister()">¿Ya tienes cuenta? Inicia Sesión</p>
              </div>
            </form>
          </div>
          <form
            action=""
            id="form-login"
            class="col-12 col-lg-6 d-flex d-lg-flex flex-column justify-content-center align-items-center"
            onsubmit="iniciarSesion(event)"
          >
            <h2 class="mb-3">Iniciar Sesión</h2>
            <div class="d-flex flex-column col-12 col-md-8">
              <label class="form-label" for="">Email</label>
              <input class="form-control" type="email" name="" id="" />
            </div>
            <div class="d-flex flex-column col-12 col-md-8">
              <label class="form-label" for="">Contraseña</label>
              <input class="form-control" type="password" name="" id="" />
            </div>
            <div class="mt-3 col-12 col-md-8">
              <input
                id="btn-iniciar-sesion"
                class="btn"
                type="submit"
                value="Iniciar Sesión"
              />
            </div>
            <div class="mt-2 cursor-pointer" style="cursor: pointer">
              <p onclick="alternarLoginRegister()">¿No tienes cuenta? Crear cuenta</p>
            </div>
          </form>
        </main>
      </section>
    `
  )
}