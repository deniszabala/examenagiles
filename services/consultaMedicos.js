export async function consultarMedicos(){
    // consumiendo API (Programa hecho en el Bac que permite que como usuario traiga, lleve o modifique datos-informacion)
    // 1. Conocer la direccion del API
    // API O SERVICIO
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"
    // 2. Configurar a que voy al API
    //Configurando la request o peticion
    // leer: GET, insertar: POST, Editar: PUT
    let peticion={
        method:"GET",
        
    }
    //3. Consumir
    // Traer los datos del API
    //json:Formato que separa, organiza
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)

}