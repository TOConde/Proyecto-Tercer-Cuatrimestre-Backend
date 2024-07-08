import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { ImageService } from 'src/administrador/services/image.service';

@Module({
    imports: [CommonModule],
    controllers: [UsuarioController],
    providers: [UsuarioService, ImageService],
})
export class UsuarioModule {}
