import {Controller, Delete, Get, Param} from '@nestjs/common';
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
        return await this.peliculasService.deleteMovie(Number(id));
    }
}