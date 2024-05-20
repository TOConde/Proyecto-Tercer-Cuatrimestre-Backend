import { Module } from '@nestjs/common';
import { AdministradorModule } from './administrador/administrador.module';
import { CommonModule } from './common/common.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ 
    AdministradorModule,
    CommonModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
