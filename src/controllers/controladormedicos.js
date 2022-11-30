//importanciones
import { capturarDatos } from '../formularios/formularioMedicos.js'

//etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaregistroProfesional=document.getElementById("registroProfesional")
let etiquetaemail=document.getElementById("email")
let etiquetasede=document.getElementById("sede")
let etiquetahorarios=document.getElementById("horarios")
let etiquetadescripcion=document.getElementById("descripcion")
let etiquetafoto=document.getElementById("foto")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento, etiquetaEspecialidad, etiquetaregistroProfesional,etiquetaemail,etiquetasede, etiquetahorarios, etiquetadescripcion, etiquetafoto)
    
})