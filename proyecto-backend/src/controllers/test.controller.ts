import {
  Controller,
  Get  
} from '@nestjs/common';
import { TestService } from 'src/services/test.service';


@Controller()
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get('/test')
  getTest(): string {
    return this.testService.getTest();
  }
}