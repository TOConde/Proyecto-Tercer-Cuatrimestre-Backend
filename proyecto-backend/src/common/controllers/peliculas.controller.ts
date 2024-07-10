import { Body, Controller, Delete, Get, Param, Put, Query } from '@nestjs/common';
import { PeliculasService } from '../services/peliculas.service';

@Controller('/peliculas')
export class PeliculasController {
    constructor(private peliculasService: PeliculasService) { }

    @Get('/all')
    async getAll() {
        return await this.peliculasService.getAll();
    }

    @Get('/:id')
    async getMovieById(@Param('id') id: string) {
        return await this.peliculasService.getById(Number(id));
    }

    @Get('/title/search')
    async searchByTitle(@Query('title') title: string) {
        return await this.peliculasService.searchByTitle(title);
    }

    @Get('/genre/search')
    async getMovieByGenre(@Query('genre') genre: string) {
        return await this.peliculasService.getMovieByGenre(genre);
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: string) {
        const pelicula = await this.peliculasService.getById(Number(id));
        const url_image_delete = pelicula.url_image_delete;

        return await this.peliculasService.deleteMovie(Number(id), url_image_delete);
    }

    @Put(':id')
    async editMovie(@Param('id') id: string, @Body() pelicula: any) {
        await this.peliculasService.editMovie(Number(id), pelicula);

        if (pelicula.generos && pelicula.generos.length > 0) {
            await this.peliculasService.editMovieGenres(Number(id), pelicula.generos);
        }
    }
}
