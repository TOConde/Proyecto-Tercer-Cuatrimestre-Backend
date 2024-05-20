import { Injectable } from '@nestjs/common';
import { DatabaseService } from './db.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
    constructor (private dbService: DatabaseService, private jwtService: JwtService) {}

    validateUser(passwordDB: string, password: string) {
        //Aca tenemos que utilizar bcrypt para validar los tokens, mucho muy importante ... por ahora validamos dejamos asi.
        return passwordDB === password;
    }

    login(user: any) {
        //Utilizamos jwtService para que nos retorne el token en caso de que se haya validado el usuario.
        const payload = {email: user.email, role : user.role};
        
         return {
            accessToken: this.jwtService.sign(payload),
         }
    }
}
