import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import userQueries from "src/usuario/queries/user.queries";
import { ResultSetHeader, RowDataPacket } from "mysql2";

@Injectable()
export class BrowsePeliculasService {
    constructor(private dbService: DatabaseService) {}

    async getAll() {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            userQueries.selectAllMovies,
            []);
        return resultQuery;
    }
}