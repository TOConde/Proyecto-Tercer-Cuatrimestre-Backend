import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UsuarioController } from './usuario.controller';

@Module({
    imports: [CommonModule],
    controllers: [UsuarioController],
    providers: [],
})
export class UsuarioModule {}
