//Creamos una función que nos permita recibir los datos del formulario.
//en programación se optimiza el codigo creando funciones las cuales dejan crear una función grande  y empaquetar.
//La función se crea con la palabra function.
//Todas las funciones que programe deben estar escritas en infinitivo termin ar, er, ir.
//aqui capturare los datos
//export es para indicarle al que captura los datos que los exporte.
import{validacionFormulario} from './validacionFormularioMedico.js'
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto){

let nombresMedico=etiquetaNombre.value
let documentoMedico=etiquetaDocumento.value
let especialidadMedico=etiquetaEspecialidad.value
let registroMedico=etiquetaRegistro.value
let registroCorreo=etiquetaCorreo.value
let registroSede=etiquetaSede.value
let registroHorario=etiquetaHorario.value
let registroDescripcion=etiquetaDescripcion.value
let registroFoto=etiquetaFoto.value



//debemos almacenar todos los valores del formulario
//en una sola variable
//Objeto=Almacenar varios datos en un solo espacio de memoria.

let datosFormularioMedico={
    nombres:nombresMedico,
    documento:documentoMedico,
    especialidad:especialidadMedico,
    fotografia:registroFoto,

    
}
//Clase del 14.12.2022
//console.log(datosFormularioMedico)
validacionFormulario(datosFormularioMedico)
}