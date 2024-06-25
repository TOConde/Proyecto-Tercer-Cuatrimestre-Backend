import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import commonQueries from "../queries/common.queries";
import { RowDataPacket } from "mysql2";

@Injectable()
export class PeliculasService {
    constructor(private dbService: DatabaseService) {}

    async getAll() {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
            commonQueries.selectAllMovies,
            []);
        return resultQuery;
    }
}