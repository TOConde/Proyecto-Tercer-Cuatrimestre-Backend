import {Body, Controller, Delete, Get, Param, Put} from '@nestjs/common';
import { PeliculasService } from '../services/peliculas.service';

@Controller('/peliculas')
export class PeliculasController {
    constructor(private peliculasService: PeliculasService) { }

    @Get('/all')
    async getAll() {
        return await this.peliculasService.getAll();
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: string) {
        const pelicula = await this.peliculasService.getById(Number(id));
        const url_image_delete = pelicula.url_image_delete;

        return await this.peliculasService.deleteMovie(Number(id), url_image_delete);
    }

    @Put(':id')
    async editMovie(@Param('id') id: string, @Body() pelicula: any) {
        return await this.peliculasService.editMovie(Number(id), pelicula)
    }
}