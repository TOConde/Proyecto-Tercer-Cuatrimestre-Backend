import { Injectable } from '@nestjs/common';
import { Pool, PoolConnection, createPool } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
    private pool: Pool;
    constructor () {
        this.pool = createPool({
            port: 3306,
            user: 'root',
            password: 'root', 
            database: 'flixoramadb',
            host: 'localhost',
            connectionLimit: 10
        });
    }

    executeQuery = async (sql: string, param: any[]) => {
        const connection: PoolConnection = await this.pool.getConnection();
        await connection.query(sql, param);
        this.pool.releaseConnection(connection);
    };
}
