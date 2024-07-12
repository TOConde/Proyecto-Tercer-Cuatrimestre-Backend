import { Module } from '@nestjs/common';
import { ImageController } from './controllers/image.controller';
import { ImageService } from './services/image.service';
import { CommonModule } from 'src/common/common.module';
import { AgregarPeliculaService } from './services/agregarPelicula.service';
import { AgregarPeliculaController } from './controllers/agregarPelicula.controller';
import { ReporteUsuarioController } from './controllers/reporteUsuario.controller';
import { ReporteUsuarioService } from './services/reporteUsuario.service';

@Module({
    imports: [CommonModule],
    controllers: [ImageController, AgregarPeliculaController, ReporteUsuarioController],
    providers: [ImageService, AgregarPeliculaService, ReporteUsuarioService]
})
export class AdministradorModule {}
