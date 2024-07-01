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

    async getUserById (id: number): Promise<RowDataPacket[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            userQueries.selectUserById,
            [id]);

            const usuario: any = {
                email: resultQuery[0].email,
                nombre: resultQuery[0].nombre,
                edad: resultQuery[0].edad,
                pais: resultQuery[0].pais,
                idioma: resultQuery[0].idioma,
                fechaDeSuscripcion: resultQuery[0].fechaDeSuscripcion,
                tipoDeSuscripcion: resultQuery[0].tipoDeSuscripcion,
                recibirCorreos: resultQuery[0].recibirCorreos,
                urlUserImage: resultQuery[0].url_userImage,
                urlUserBanner: resultQuery[0].url_userBanner
            };
        return usuario;
    }

    async editUserProfile (id: number, body: any): Promise<void> {
        await this.dbService.executeQuery(
            userQueries.editUserProfile,
            [
                body.nombre,
                body.edad,
                body.pais,
                id
            ]
        )
    }

    async editUserSubscription (id: number, body: { tipoDeSuscripcion: number }): Promise<void> {
        await this.dbService.executeQuery(
            userQueries.editUserSubscription,
            [
                body.tipoDeSuscripcion,
                id
            ]
        )
    }

    async editUserNotifications (id: number, body: { recibirCorreos: number}) : Promise<void> {
        await this.dbService.executeQuery(
            userQueries.editUserNotifications,
            [
                body.recibirCorreos,
                id
            ]
        )
    }
}
 