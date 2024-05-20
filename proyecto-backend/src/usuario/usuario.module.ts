import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { DatabaseService } from 'src/common/services/db.service';

@Module({
    controllers: [],
    providers: [UsuarioService, DatabaseService]
})
export class UsuarioModule {}
