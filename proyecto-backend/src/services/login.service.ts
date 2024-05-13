import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

@Injectable()

export class LoginService {
    constructor(private jwtService: JwtService) { }

    validateUser(username: string, password: string): boolean {
        if (username === 'zula' && password === 'ultraSecretaJEJE') {
            return true
        }  
        return false
    }

    login(user: any) {
        const payload = { username: user.username }
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}