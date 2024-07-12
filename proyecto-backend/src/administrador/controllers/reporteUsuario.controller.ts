import { Controller, Get } from '@nestjs/common';
import { ReporteUsuarioService } from '../services/reporteUsuario.service';

@Controller('/reporte')
export class ReporteUsuarioController {
  constructor(private reporteUsuarioService: ReporteUsuarioService) { }

  @Get('/usuarios')
  async getReportUser() {
    return await this.reporteUsuarioService.getReportUser();
  }
}
