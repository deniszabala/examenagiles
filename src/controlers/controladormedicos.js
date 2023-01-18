//Importaciones (ojo lo que exporte en formularioMedico) entre corchestes pongo la función
import{capturarDatos} from '../formularios/formularioMedico.js'



//Etiquetas que controlo:
// a cada elemento que quiero controlar le pongo un id y le creo una variable
//document es una palabra para relacionar el archivo html.
//getElementByid indica traiga un elemento del archivo html.. aqui le digo la etiqueta
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistro=document.getElementById("registro")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorario=document.getElementById("horario")
let etiquetaDescripcion=document.getElementById("descripcion")
let etiquetaFoto=document.getElementById("foto")

//detectar el evento de clic
//LLama todas las etiquetas
etiquetaBoton.addEventListener("click",function(evento){
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto)
    /*Swal.fire(
        'Exito!',
        'El especialista ha sido registrado!',
        'success'
      )*/

//Recibiendo los datos del formulario
/*let nombresMedico=etiquetaNombre.value
console.log(nombresMedico)

let documentoMedico=etiquetaDocumento.value
console.log(documentoMedico)*/
})