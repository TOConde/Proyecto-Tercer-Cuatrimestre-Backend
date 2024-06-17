import { Module } from '@nestjs/common';
import { ImageController } from './controllers/image.controller';
import { ImageService } from './services/image.service';
import { CommonModule } from 'src/common/common.module';
import { AgregarPeliculaService } from './services/agregarPelicula.service';
import { AgregarPeliculaController } from './controllers/agregarPelicula.controller';

@Module({
    imports: [CommonModule],
    controllers: [ImageController, AgregarPeliculaController],
    providers: [ImageService, AgregarPeliculaService]
})
export class AdministradorModule {}
