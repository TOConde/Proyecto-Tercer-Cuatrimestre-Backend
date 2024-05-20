import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/db.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.register({
      secret: 'ak151jq89d$#%&!$/()sdfasd%&#&48j12jknsb2342"#&#13d1"#!4asDad',
      signOptions: {expiresIn: '1h'},
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, DatabaseService, UsuarioService]
})
export class CommonModule {}
