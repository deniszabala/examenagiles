export function validacionFormulario(datos){
    console.log("Estamos validando....")
    console.log(datos)

//Clase 14.12.2022
//Validemos 3 campos del formulario
//nombres-documento-registro medico
let etiquetaNombre=document.getElementById("nombre")
let etiquetaDocumento=document.getElementById("documento")


let nombresPaciente=datos.nombre
let documentoPaciente=datos.documento


//Agregar todos loscampos posibles para validar
//Ell formulario
if (nombresPaciente=="" && documentoPaciente==""){
    //Diseño de css y codigode boot
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.add("is-invalid")
    Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: '¡Debes diligenciar los datos requeridos!',
  })
   // alert("Ambos estan vacios...")
}else if(nombresPaciente=="" && documentoPaciente!="" ){
    etiquetaNombre.classList.add("is-invalid")
    etiquetaDocumento.classList.remove("is-invalid")
    //alert("Elnombre esta vacio")
}else if(nombresPaciente!="" && documentoPaciente==""){
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.add("is-invalid")
    
}else{
    alert("Nos vamos para la bd")
    etiquetaNombre.classList.remove("is-invalid")
    etiquetaDocumento.classList.remove("is-invalid")
}

}