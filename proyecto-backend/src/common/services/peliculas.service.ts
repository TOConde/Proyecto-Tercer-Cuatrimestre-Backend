import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import commonQueries from "../queries/common.queries";
import { RowDataPacket } from "mysql2";

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

        return pelicula;
    }

    async searchByTitle(title: string): Promise<RowDataPacket[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectMoviesByTitulo,
            [title]
        );

        return resultQuery;
    }

    async getMovieByGenre(genre: string): Promise<RowDataPacket[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectMoviesByGenero,
            [genre]
        );

        return resultQuery;
    }

    async deleteMovie(id: number, url_image_delete: string): Promise<void> {
        await this.dbService.executeQuery(
            commonQueries.deleteMovie,
            [id]
        );
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

    async editMovieGenres (peliculaID: number, generos: number[]): Promise<void> {
        await this.dbService.executeQuery(
            commonQueries.deleteGeneroPelicula,
            [peliculaID, generos]
        )

        for (const generoID of generos) {
            const existeRelacion = await this.existeRelacionPeliculaGenero(peliculaID, generoID);
            if (!existeRelacion) {
                await this.dbService.executeQuery(
                    commonQueries.agregarGeneroPelicula,
                    [peliculaID, generoID]
                )
            }
        }
    }

    async existeRelacionPeliculaGenero(peliculaID: number, generoID: number): Promise<Boolean> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectRelacionPeliculaGenero,
            [peliculaID, generoID]
        );
        return resultQuery.length > 0;
    }
}