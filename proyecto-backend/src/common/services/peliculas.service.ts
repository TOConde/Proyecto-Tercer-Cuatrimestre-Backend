import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import commonQueries from "../queries/common.queries";
import { ResultSetHeader, RowDataPacket } from "mysql2";

@Injectable()
export class PeliculasService {
    constructor(private dbService: DatabaseService) { }

    async getAll() {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectAllMovies,
            []);
        return resultQuery;
    }

    async deleteMovie(id: number) {
        await this.dbService.executeQuery(
            commonQueries.deletePeliculaGenero,
            [id]);

        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
            commonQueries.deleteMovie,
            [id]);
        return resultQuery;
    }
}