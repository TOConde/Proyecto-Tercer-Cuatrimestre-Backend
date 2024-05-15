import { Module } from '@nestjs/common';
import { LoginController } from 'src/controllers/login.controller';
import { LoginService } from 'src/services/login.service';


@Module({
  controllers: [LoginController],
  providers: [LoginService]
})
export class CommonModule {}
