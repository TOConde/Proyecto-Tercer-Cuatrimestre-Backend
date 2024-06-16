import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AgregarPeliculaService } from '../services/agregarPelicula.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/pelicula')
export class RegisterController {
  constructor(private agregarPeliculaService: AgregarPeliculaService) { }


  @Post('/upload')
  @UseInterceptors(FileInterceptor('img'))
  async agregarPelicula(
    @UploadedFile() file: Express.Multer.File, @Body() body: { titulo: string, sinopsis: string }) {
    const pelicula = {
      titulo: body.titulo,
      sinopsis: body.sinopsis,
      img: file
    };
    const result = await this.agregarPeliculaService.agregarPelicula(pelicula);
    return { message: `${result} se ha agregado con éxito!` };
  }
}