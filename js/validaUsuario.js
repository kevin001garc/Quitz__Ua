
const btnInicia = document.querySelector("[data-inicia]");

const validar = ()=>{

    const usuario = "root";
    const password = "root1234";
    const nombre = document.querySelector("[data-usuario]");
    const contraseña = document.querySelector("[data-password]");

    if(usuario == nombre && contraseña == password){
       alert("inicia prueba")
    }
    btnInicia.addEventListener("click", validar);
}
