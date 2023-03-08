

const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const correo = document.querySelector('#correo')
const telefono = document.querySelector('#telefono')
const pais = document.querySelector('#pais')
const edad = document.querySelector('#edad')
const provincia = document.querySelector('#provincia')





async function generarUsuario() {
   try {
      const url = 'https://randomuser.me/api/'
      const respuesta = await fetch(url)
      const { results } = await respuesta.json()
      const datos = results[0]

      console.log(datos)
      foto.src = datos.picture.large
      nombre.textContent = datos.name.first
      apellido.textContent = datos.name.last
      correo.textContent = datos.email
      telefono.textContent = datos.phone
      pais.textContent = datos.location.country
      provincia.textContent = datos.location.state
    
      edad.textContent = datos.dob.age
   
   } catch (error) {
      console.log(error)
   }

}
document.addEventListener('DOMContentLoaded',generarUsuario)
info.style.display = "none";

   

function toggleInfo() {
   var info = document.getElementById("info");
   if (info.style.display === "none") {
     info.style.display = "block";
   } else {
     info.style.display = "none";
   }
 }
