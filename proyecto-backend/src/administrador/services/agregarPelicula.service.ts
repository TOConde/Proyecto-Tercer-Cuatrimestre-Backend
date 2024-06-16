import { Injectable } from "@nestjs/common";
import { DatabaseService } from '../../common/services/db.service'
import adminQueries from "../queries/admin.queries";
import { ImageService } from "./image.service";



@Injectable()
export class AgregarPeliculaService {
  constructor(private dbService: DatabaseService, private imageService: ImageService) {}

  async agregarPelicula(pelicula: any): Promise<any> {

    const imagenPelicula = await this.imageService.upload(pelicula.img)

    await this.dbService.executeQuery(adminQueries.agregarPelicula, [
      pelicula.titulo,
      pelicula.sinopsis,
      imagenPelicula.url_image,
      imagenPelicula.url_image_delete,
      imagenPelicula.display_url_image
    ]);

    return pelicula.titulo;
  }
}