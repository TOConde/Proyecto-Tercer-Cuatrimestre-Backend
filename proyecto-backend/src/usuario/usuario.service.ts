import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import userQueries from './queries/user.queries';
import { RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';


@Injectable()
export class UsuarioService {
    constructor(private dbService: DatabaseService) {}

    async buscarPorEmail(email: string) {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(userQueries.selectByEmail, [email]);
        if (resultQuery.length === 0) {
            throw new HttpException('El email no coincide con uno existente.', HttpStatus.NOT_FOUND);
        }
        return {
            email: resultQuery[0].email,
            password: resultQuery[0].password,
            role: resultQuery[0].codigo,
        };
    }
}
 