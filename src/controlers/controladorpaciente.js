//Importaciones (ojo lo que exporte en formularioMedico) entre corchestes pongo la función
import{capturarDatos} from '../formularios/formularioPaciente.js'



//Etiquetas que controlo:
// a cada elemento que quiero controlar le pongo un id y le creo una variable
//document es una palabra para relacionar el archivo html.
//getElementByid indica traiga un elemento del archivo html.. aqui le digo la etiqueta
let etiquetaNombre=document.getElementById("nombre")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaTelefono=document.getElementById("telefono")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaIngreso=document.getElementById("ingreso")
let etiquetaCuota=document.getElementById("cuota")


//detectar el evento de clic
//LLama todas las etiquetas
etiquetaBoton.addEventListener("click",function(evento){
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaTelefono,etiquetaCorreo,etiquetaRegimen,etiquetaIngreso,etiquetaCuota)
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