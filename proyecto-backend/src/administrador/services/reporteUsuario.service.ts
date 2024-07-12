import { Injectable } from "@nestjs/common";
import { DatabaseService } from '../../common/services/db.service'
import adminQueries from "../queries/admin.queries";
import { RowDataPacket } from "mysql2";

@Injectable()
export class ReporteUsuarioService {
  constructor(
    private readonly dbService: DatabaseService
  ) { }
  
  async getCantidadUsersActivos(): Promise<any> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      adminQueries.selectCantidadUsersActivos,
      []);
    return resultQuery[0].count;
  }

  async getPromedioEdad(): Promise<any> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      adminQueries.selectPromedioEdad,
      []);
    return resultQuery[0].avg;
  }

  async getNacionPopular(): Promise<any> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      adminQueries.selectNacionPopular,
      []);
    return resultQuery[0];
  }

  async getSuscripcionesMes(): Promise<any> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      adminQueries.selectSuscripcionesMes,
      []);
    return resultQuery;
  }

  async getCantidadSuscripciones(): Promise<any> {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      adminQueries.selectTipoSuscripcion,
      []);
    return resultQuery[0];
  }

  async getReportUser(): Promise<any> {
    const cantidadUsersActivos = await this.getCantidadUsersActivos();
    const promedioEdad = await this.getPromedioEdad();
    const paisPopular = await this.getNacionPopular();
    const suscripcionesMes = await this.getSuscripcionesMes();
    const cantidadSuscripciones = await this.getCantidadSuscripciones();
    
    return {
      cantidadUsersActivos,
      promedioEdad,
      paisPopular,
      suscripcionesMes,
      cantidadSuscripciones
    };
  }
}

