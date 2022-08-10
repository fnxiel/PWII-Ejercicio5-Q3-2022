import { IComentario } from "./IComentario";
import { IEnlace } from "./IEnlace";
import { IEnlaceImagen } from "./IEnlaceImagen";
import { IEnlaceVideo } from "./IEnlaceVideo";
import { IPelicula } from "./IPelicula";
import { IPersona } from "./IPersona";
import { portadaPredeterminada } from "./ValoresPredeterminados";

class Pelicula implements IPelicula{
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
    constructor(titulo: string, año: number, portada: IEnlaceImagen = portadaPredeterminada ){
        this.titulo = titulo
        this.año = año
        this.portada = portada
    }
    
    //fechaSalida?: Date | undefined;
    calificar(): number {
        throw new Error("Method not implemented.");
    }
    agregarComentario(): boolean {
        throw new Error("Method not implemented.");
    }
    
}

let pelicula: IPelicula = new Pelicula("Bullet train", 2022)

console.log(pelicula)