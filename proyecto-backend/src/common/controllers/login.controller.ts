import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Controller('/login')
export class LoginController {
    constructor (private loginService: LoginService, private usuarioService: UsuarioService) {}

    @Post()

    async login(@Body() body: {email: string, password: string}) {
        const user: any = await this.usuarioService.buscarPorEmail(body.email);  
        const userIsValid = this.loginService.validateUser(user.password, body.password);

        if (!userIsValid) {
           throw new HttpException('No autorizado.', HttpStatus.UNAUTHORIZED);
        }
        const token = this.loginService.login(user);
        return {
            email: user.email, role: user.role, ...token
        }
    }
    

}
