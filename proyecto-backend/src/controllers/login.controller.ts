/*
import {
    Controller,
    Get, 
    Post,
    Body, 
    HttpException,
    HttpStatus
  } from '@nestjs/common';
  import { LoginService } from 'src/services/login.service';
  
  
@Controller('/auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/login')
    async login(@Body() body: { username: string; password: string }) {
        const user = this.loginService.validateUser(body.username, body.password);
        if (!user) {
            throw new HttpException('NO AUTORIZADO', HttpStatus.UNAUTHORIZED);
        }
        return this.loginService.login(user)
    }
}
*/