import {validarFormulario} from './validacionFormularioMedico.js'

//creamos una función que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaregistroProfesional, etiquetaemail, etiquetasede, etiquetahorarios, etiquetadescripcion, etiquetafoto){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidad=etiquetaEspecialidad.value
    let registroProfesional=etiquetaregistroProfesional.value
    let email=etiquetaemail.value
    let sede=etiquetasede.value
    let horarios=etiquetahorarios.value
    let descripcion=etiquetadescripcion.value
    let foto=etiquetafoto.value

    //Debemos almacenar todos los valores del formulario en una sola variable
    //Se debe crear un objeto, que es una variable que permite almacenar varios datos en un solo espacio de memoria

    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidad,
        registro:registroProfesional,
        correo:email,
        sede:sede,
        horario:horarios,
        descripcion:descripcion,
        foto:foto
    }
    console.log(datosFormularioMedico)

}