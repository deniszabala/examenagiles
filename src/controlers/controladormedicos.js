//Etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")

//detectar elevento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    /*Swal.fire(
        'Exito!',
        'El especialista ha sido registrado!',
        'success'
      )*/

//Recibiendo los datos del formulario
let nombresMedico=etiquetaNombre.value
console.log(nombresMedico)

let documentoMedico=etiquetaDocumento.value
console.log(documentoMedico)
})