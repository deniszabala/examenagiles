import {registrarMedico} from "../../services/registrarMedico.js"

export function validacionFormulario(datos){

    
    

//Clase 14.12.2022
//Validemos 3 campos del formulario
//nombres-documento-registro medico
let etiquetaNombre=document.getElementById("nombres")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaRegistro=document.getElementById("registro")

let nombresMedico=datos.nombre
let documentoMedico=datos.documento
let registroMedico=datos.registro

//Agregar todos loscampos posibles para validar
//Ell formulario
if (nombresMedico=="" && documentoMedico==""){
    //Diseño de css y codigode boot
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.add("is-invalid")
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: '¡Debes diligenciar los datos requeridos!',
  })
   // alert("Ambos estan vacios...")
}else if(nombresMedico=="" && documentoMedico!="" ){
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.remove("is-invalid")
    //alert("Elnombre esta vacio")
}else if(nombresMedico!="" && documentoMedico==""){
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.add("is-invalid")
    
}else{
    console.log("hollllaaa")
    registrarMedico(datos)
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.remove("is-invalid")
}

}