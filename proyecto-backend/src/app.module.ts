import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './controllers/Test.controller';
import { TestService } from './services/test.service';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}
