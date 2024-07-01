import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [CommonModule],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule {}
