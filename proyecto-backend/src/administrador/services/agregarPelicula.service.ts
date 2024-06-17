import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DatabaseService } from '../../common/services/db.service'
import adminQueries from "../queries/admin.queries";
import { ImageService } from "./image.service";



@Injectable()
export class AgregarPeliculaService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly imageService: ImageService
  ) {}

  async agregarPelicula(pelicula: any): Promise<string> {
    let imagenPelicula = await this.imageService.upload(pelicula.img)

    try {
      imagenPelicula = await this.imageService.upload(pelicula.img);
    } catch (error) {
      throw new InternalServerErrorException('Error uploading image');
    }

    try {
      await this.dbService.executeQuery(adminQueries.agregarPelicula, [
        pelicula.titulo,
        pelicula.sinopsis,
        imagenPelicula.data.url,
        imagenPelicula.data.delete_url,
        imagenPelicula.data.display_url,
      ]);
    } catch (error) {
      throw new InternalServerErrorException('Error al guardar pelicula en DataBase');
    }

    return pelicula.titulo;
  }
}