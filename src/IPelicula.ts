import {IComentario} from './IComentario'
import { IEnlace } from './IEnlace'
import {IEnlaceImagen} from './IEnlaceImagen'
import {IEnlaceVideo} from './IEnlaceVideo'
import { IPersona } from './IPersona'

export interface IPelicula{
    //Propiedades
    titulo: string
    año: number
    clasificacion: string
    duracion: string | undefined
    portada: IEnlaceImagen
    descripcion: string
    videos: IEnlaceVideo[]
    capturas: IEnlaceImagen[]
    etiquetas: IEnlace[]
    director?: IPersona
    escritores?: IPersona[]
    estrellas?: IPersona[]
    comentarios: IComentario[]
    puntaje: number
    fechaSalida?: Date 
    //Funciones
    calificar(): number
    agregarComentario(): boolean
}