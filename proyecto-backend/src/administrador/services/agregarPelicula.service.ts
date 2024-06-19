import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DatabaseService } from '../../common/services/db.service'
import adminQueries from "../queries/admin.queries";
import { ImageService } from "./image.service";
import { RowDataPacket } from "mysql2";

@Injectable()
export class AgregarPeliculaService {
  constructor(
    private readonly dbService: DatabaseService,
    private readonly imageService: ImageService
  ) {}

  async agregarPelicula(pelicula: any, generos: number[]): Promise<string> {
    if (!pelicula.titulo || !pelicula.sinopsis || !pelicula.img) {
      throw new BadRequestException('Falta el titulo, la sinopsis o la imagen de la Pelicula');
    }

    let imagenPelicula: any

    try {
      imagenPelicula = await this.imageService.upload(pelicula.img, pelicula.titulo);
    } catch (error) {
      throw new InternalServerErrorException('Error al cargar la imagen');
    }

    try {
      const result = await this.dbService.executeQuery(adminQueries.agregarPelicula, [
        pelicula.titulo,
        pelicula.sinopsis,
        pelicula.duracion,
        pelicula.fechaEstreno,
        imagenPelicula.data.url,
        imagenPelicula.data.delete_url,
        imagenPelicula.data.display_url,
      ]);

      const peliculaID = result.insertId;

      console.log(peliculaID);

      for (const generoID of generos) {
        await this.dbService.executeQuery(adminQueries.agregarGeneroPelicula, [
          peliculaID,
          generoID,
        ]);
      }

    } catch (error) {
      throw new InternalServerErrorException('Error al guardar pelicula en DataBase');
    }

    return pelicula.titulo;
  }

  async getGeneros() {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
        adminQueries.selectAllGeneros,
        []);
    return resultQuery;
  }
  
}

