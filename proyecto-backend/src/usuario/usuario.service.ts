import { Injectable } from '@nestjs/common';
import userQueries from './queries/user.queries';
import { RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';

@Injectable()
export class UsuarioService {
    constructor(private dbService: DatabaseService) {}

    async getAll() {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            userQueries.selectAll,
            [],
        );
        const usuarios = resultQuery.map((rs: RowDataPacket) => {
            return {
                id: rs['usuarioID'],
                email: rs['email'],
                activo: rs['activo'],
            };
        });
        return usuarios;
    }
}
 