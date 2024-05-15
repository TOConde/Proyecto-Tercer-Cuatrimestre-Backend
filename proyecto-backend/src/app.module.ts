import { Module } from '@nestjs/common';
import { TestController } from './controllers/Test.controller';
import { TestService } from './services/test.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { AdministradorModule } from './administrador/administrador.module';
import { CommonModule } from './common/common.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ClaveUltraSecreta',
      signOptions: {expiresIn: '1h'},
    }),
    AdministradorModule,
    CommonModule,
    UsuarioModule,
  ],
  controllers: [TestController, LoginController],
  providers: [TestService, LoginService],
})
export class AppModule {}
