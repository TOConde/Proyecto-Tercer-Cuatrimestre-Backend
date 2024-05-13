import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './controllers/Test.controller';
import { TestService } from './services/test.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { LoginService } from './services/login.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ClaveUltraSecreta',
      signOptions: {expiresIn: '1h'},
    }),
  ],
  controllers: [AppController, TestController, LoginController],
  providers: [AppService, TestService, LoginService],
})
export class AppModule {}
