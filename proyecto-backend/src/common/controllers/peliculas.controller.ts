import {Controller, Get} from '@nestjs/common';
import { PeliculasService } from '../services/peliculas.service';

@Controller('/peliculas')
export class PeliculasController {
    constructor(private browsePeliculasService: PeliculasService) { }

    @Get('/all')
    async getAll() {
        return await this.browsePeliculasService.getAll();
    }
}