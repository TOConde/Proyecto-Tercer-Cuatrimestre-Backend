import {Controller, Get} from '@nestjs/common';
import { BrowsePeliculasService } from '../services/browserPeliculas.service';

@Controller('/peliculas')
export class BrowsePeliculasController {
    constructor(private browsePeliculasService: BrowsePeliculasService) { }

    @Get('/recomendadas')
    async getAll() {
        return await this.browsePeliculasService.getAll();
    }
}