import { 
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';

import { AgregarPeliculaService } from '../services/agregarPelicula.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/pelicula')
export class AgregarPeliculaController {
  constructor(private agregarPeliculaService: AgregarPeliculaService) { }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('img'))
  async agregarPelicula(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { titulo: string, sinopsis: string, duracion: number, fechaEstreno: Date}
  ): Promise<{ message: string }> {
    if (!file) {
      throw new BadRequestException('Inserte una imagen');
    }
    if (!body.titulo || !body.sinopsis) {
      throw new BadRequestException('Inserte un titulo y sinopsis');
    }

    const pelicula = {
      titulo: body.titulo,
      sinopsis: body.sinopsis,
      duracion: body.duracion,
      fechaEstreno: body.fechaEstreno,
      img: file,
    };

    try {
      const result = await this.agregarPeliculaService.agregarPelicula(pelicula);
      return { message: `${result} se ha agregado con éxito!` };
    } catch (error) {
      throw new BadRequestException('Error al agregar la pelicula')
    }
  }

  @Get('/generos')
    async getGeneros() {
        return await this.agregarPeliculaService.getGeneros();
    }
}