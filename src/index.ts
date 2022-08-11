import { PipelineSource } from "stream";
import { ICalificacionUsuarios } from "./ICalificacionUsuarios";
import { IComentario } from "./IComentario";
import { IEnlace } from "./IEnlace";
import { IEnlaceImagen } from "./IEnlaceImagen";
import { IEnlaceVideo } from "./IEnlaceVideo";
import { IPelicula } from "./IPelicula";
import { IPersona } from "./IPersona";
import { portadaPredeterminada } from "./ValoresPredeterminados";

class Pelicula implements IPelicula, ICalificacionUsuarios{
    id: number
    titulo: string
    año: number
    clasificacion: string = "Pendiente"
    duracion: string | undefined
    portada: IEnlaceImagen
    descripcion: string = ""
    videos: IEnlaceVideo[] = []
    capturas: IEnlaceImagen[] = []
    etiquetas: IEnlace[] = []
    director?: IPersona
    escritores?: IPersona[]
    estrellas?: IPersona[]
    comentarios: IComentario[] = []
    puntaje: number = 0
    
    constructor(titulo: string, año: number, portada: IEnlaceImagen = portadaPredeterminada, id: number = 0 ){
        this.titulo = titulo
        this.año = año
        this.portada = portada
        this.id = id
    }
    
    //fechaSalida?: Date | undefined;
    calificar(): number {
        return this.puntaje = this.puntaje + 1
    }
    agregarComentario(): boolean {
        throw new Error("Method not implemented.");
    }
    
}



let pelicula: IPelicula = new Pelicula("Bullet train", 2022)

let bdPeliculas: IPelicula[] = []

bdPeliculas.push(pelicula)
bdPeliculas.push(new Pelicula("Top gun", 2022, portadaPredeterminada, bdPeliculas.length + 1))
bdPeliculas.push(new Pelicula("Avatar", 2022, portadaPredeterminada, bdPeliculas.length + 1))
bdPeliculas.push(new Pelicula("Pantera negra", 2022, portadaPredeterminada, bdPeliculas.length + 1))

//C Create - Crear
bdPeliculas.push(new Pelicula("Forrest Gump", 1994, portadaPredeterminada, bdPeliculas.length + 1))


//R Read - Leer
//Leer todo
console.log("Leer todas las peliculas: ", bdPeliculas)
//Leer busqueda

//Pelicula buscada por id
const resultadoBusqueda = bdPeliculas.find(pelicula => pelicula.id === 0)
console.log("Buscar la pelicula con id 0", resultadoBusqueda)

//Todas las peliculas que fueron lanzadas en 2022
const resultadoPeliculas2022 = bdPeliculas.filter(pelicula => pelicula.año === 2022 )
console.log("Peliculas lanzadas en 2022", resultadoPeliculas2022)

//U Update - Actualizar
const peliculaActualizar = bdPeliculas.find(pelicula => pelicula.id === 3)
console.log("Pelicula con id: 3", peliculaActualizar)

if(peliculaActualizar){
    peliculaActualizar.etiquetas.push({href: "www.google.com?search=accion", texto: "Acción"})
    
}

console.log(bdPeliculas)

//D Delete - Borrar

bdPeliculas = bdPeliculas.filter(pelicula => pelicula.id !== 2)

console.log(bdPeliculas)