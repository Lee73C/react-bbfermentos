function agregarBoton (){
// seleccionar el div con id root
const rootDiv = document.getElementById('root');

// crear nuevo boton

const boton = document.createElement('button');

//agregar texto
boton.textContent ='Ha click aqui'

//agregar una clase para css

boton.classList.add('mi-boton')

//agregar un evento al boton click

boton.addEventListener('click')