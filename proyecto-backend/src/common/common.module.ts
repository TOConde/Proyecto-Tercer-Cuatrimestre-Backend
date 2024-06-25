import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddlewareGuard } from './middleware/auth-guard';
import { RegisterController } from './controllers/register.controller';
import { RegisterService } from './services/register.service';
import { PeliculasController } from './controllers/peliculas.controller';
import { PeliculasService } from './services/peliculas.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ak151jq89d$#%&!$/()sdfasd%&#&48j12jknsb2342"#&#13d1"#!4asDad',
      signOptions: {expiresIn: '1h'},
    }),
  ],
  controllers: [LoginController, RegisterController, PeliculasController],
  providers: [LoginService, RegisterService, PeliculasService, DatabaseService, JwtMiddlewareGuard],
  exports: [DatabaseService, JwtMiddlewareGuard, JwtModule]
})
export class CommonModule {}
