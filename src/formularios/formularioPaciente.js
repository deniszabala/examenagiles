//Creamos una función que nos permita recibir los datos del formulario.
//en programación se optimiza el codigo creando funciones las cuales dejan crear una función grande  y empaquetar.
//La función se crea con la palabra function.
//Todas las funciones que programe deben estar escritas en infinitivo termin ar, er, ir.
//aqui capturare los datos
//export es para indicarle al que captura los datos que los exporte.
import{validacionFormulario} from './validacionFormularioPaciente.js'
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaTelefono,etiquetaCorreo,etiquetaRegimen,etiquetaIngreso,etiquetaCuota){

let nombresPaciente=etiquetaNombre.value
let documentoPaciente=etiquetaDocumento.value
let registroTelefono=etiquetaTelefono.value
let registroCorreo=etiquetaCorreo.value
let registroRegimen=etiquetaRegimen.value
let registroIngreso=etiquetaIngreso.value
let registroCuota=etiquetaCuota.value


console.log(nombresPaciente)
console.log(documentoPaciente)
console.log(registroTelefono)
console.log(registroCorreo)
console.log(registroRegimen)
console.log(registroIngreso)
console.log(registroCuota)


//debemos almacenar todos los valores del formulario
//en una sola variable
//Obejto=Almacenar varios datos en un solo espacio de memoria.

let datosFormularioPaciente={
    nombre:nombresPaciente,
    documento:documentoPaciente,
    telefono:registroTelefono,
    correo:registroCorreo,
    regimen:registroRegimen,
    ingreso:registroIngreso,
    cuota:registroCuota,
    
}
//Clase del 14.12.2022
//console.log(datosFormularioMedico)
validacionFormulario(datosFormularioPaciente)
}