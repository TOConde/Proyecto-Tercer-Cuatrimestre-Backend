import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import commonQueries from "../queries/common.queries";
import { RowDataPacket } from "mysql2";
import axios from "axios";

@Injectable()
export class PeliculasService {
    constructor(private dbService: DatabaseService) { }

    async getAll(): Promise<RowDataPacket[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectAllMovies,
            []);
        return resultQuery;
    }

    async getById(id: number): Promise<any> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectMoviesById,
            [id]
        );

        if (resultQuery.length === 0) {
            return null;
        }

        const pelicula: any = {
            peliculaID: resultQuery[0].peliculaID,
            titulo: resultQuery[0].titulo,
            sinopsis: resultQuery[0].sinopsis,
            fechaEstreno: resultQuery[0].fechaEstreno,
            duracion: resultQuery[0].duracion,
            urlVideo: resultQuery[0].urlVideo,
            url_image: resultQuery[0].url_image,
            url_image_delete: resultQuery[0].url_image_delete,
            display_url_image: resultQuery[0].display_url_image,
        };

        return pelicula
    }

    private async deleteImageFromImgbb(url_image_delete: string): Promise<void> { //no funciona :/
        try {
            console.log('url de la imagen:',url_image_delete) //creo que la url es la correcta
            const response = await axios.delete(url_image_delete);
            console.log(response);            
        } catch (error) {
            console.log('Error al eliminar la imagen en ImgBB:', error)
        }
    }

    async deleteMovie(id: number, url_image_delete: string): Promise<void> { //agregar una columna a base de datos para activo o inactivo y controlar la eliminacion asi(evitamos borrar la imagen) 
        console.log("eliminado pelicula")
        await this.deleteImageFromImgbb(url_image_delete); 

        /* await this.dbService.executeQuery( //borramos las dependecias de pelicula en pelicula_generos
            commonQueries.deletePeliculaGenero,
            [id]
        );

        await this.dbService.executeQuery(
            commonQueries.deleteMovie,
            [id]
        ); */
    }

    async editMovie (id: number, pelicula: any): Promise<void> {
        await this.dbService.executeQuery(
            commonQueries.editMovie,
            [
                pelicula.titulo,
                pelicula.sinopsis,
                pelicula.fechaEstreno,
                pelicula.duracion,
                pelicula.urlVideo,
                id
            ]
        )
    }
}