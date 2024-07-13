import { Injectable, InternalServerErrorException } from '@nestjs/common';
import userQueries from './queries/user.queries';
import { RowDataPacket } from 'mysql2';
import * as bcrypt from 'bcrypt'
import { DatabaseService } from 'src/common/services/db.service';
import { ImageService } from 'src/administrador/services/image.service';

@Injectable()
export class UsuarioService {
    private readonly salt: string = '$2a$08$W59jWcwio1TiLx4A8iRyTO'
    constructor(
        private readonly dbService: DatabaseService,
        private readonly imageService: ImageService
    ) { }

    async generateHash(pw: string) {
        const hash = await bcrypt.hash(pw, this.salt);
        return hash;
    }

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

    async getUserById(id: number): Promise<RowDataPacket[]> {
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

    async getUserGeneros(id: number): Promise<RowDataPacket[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            userQueries.selectUserGeneros,
            [
                id
            ]
        );
        return resultQuery;
    }

    async editUserProfile(id: number, body: any): Promise<void> {
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

    async editUserSubscription(id: number, body: { tipoDeSuscripcion: number }): Promise<void> {
        await this.dbService.executeQuery(
            userQueries.editUserSubscription,
            [
                body.tipoDeSuscripcion,
                id
            ]
        )
    }

    async editUserNotifications(id: number, body: { recibirCorreos: number }): Promise<void> {
        await this.dbService.executeQuery(
            userQueries.editUserNotifications,
            [
                body.recibirCorreos,
                id
            ]
        );
    }

    async editUserPreferences(id: number, body: { idioma: string, generos: number[] }): Promise<boolean> {
        try {
            this.editUserIdioma(id, body.idioma);
            this.editUserGeneros(id, body.generos);
            return true
        } catch (e) {
            throw new InternalServerErrorException('Error al modificar preferencias')
        }
    }

    async editUserIdioma(id: number, idioma: string): Promise<void> {
        await this.dbService.executeQuery(
            userQueries.editUserIdioma,
            [
                idioma,
                id
            ]
        );
    }

    async editUserGeneros(id: number, generos: number[]): Promise<void> {

        if (generos.length === 0) {
            await this.dbService.executeQuery(
                userQueries.deleteAllGenerosUsuario,
                [
                    id
                ]
            );
        } else {
            await this.dbService.executeQuery(
                userQueries.deleteGenerosUsuario,
                [
                    id,
                    generos
                ]
            );

            for (const generoID of generos) {
                const existeRelacion = await this.existeRelacionUsuarioGenero(id, generoID);
                if (!existeRelacion) {
                    await this.dbService.executeQuery(
                        userQueries.agregarGeneroUsuario,
                        [
                            id, 
                            generoID
                        ]
                    )
                }
            };
        };
    }

    async existeRelacionUsuarioGenero(id: number, generoID: number): Promise<Boolean> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            userQueries.selectRelacionUsuarioGenero,
            [id, generoID]
        );
        return resultQuery.length > 0;
    }

    async editUserImg(id: number, file: Express.Multer.File): Promise<void> {
        try {
            const imgName = `perfil${id}`;
            const imagenUsuario = await this.imageService.upload(file, imgName);
            const url_userImage = imagenUsuario.data.url

            await this.dbService.executeQuery(
                userQueries.editUserImg,
                [
                    url_userImage,
                    id
                ]
            );
        } catch (error) {
            throw new InternalServerErrorException('Error al cargar la imagen');
        }
    }

    async editUserPassword(id: number, body: { password: string }): Promise<boolean> {
        const password = await this.generateHash(body.password);

        try {
            await this.dbService.executeQuery(
                userQueries.editUserPassword,
                [
                    password,
                    id
                ]
            );
            return true
        } catch (e) {
            throw new InternalServerErrorException('Error al cambiar la contraseña');
        }
    }

    async editUserEmail(id: number, body: { email: string }): Promise<boolean> {
        try {
            await this.dbService.executeQuery(
                userQueries.editUserEmail,
                [
                    body.email,
                    id
                ]
            );
            return true
        } catch (e) {
            throw new InternalServerErrorException('Error al cambiar el email');
        }
    }

    async verificarPassword(id: number, body: { password: string }): Promise<boolean> {

        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            userQueries.selectUserByIdPassword,
            [id],
        );
        const dbPassword = resultQuery[0].password;
        const isValidPassword = await bcrypt.compare(
            body.password,
            dbPassword
        );

        if (!isValidPassword) {
            return false;
        } else {
            return true
        }
    }
}
