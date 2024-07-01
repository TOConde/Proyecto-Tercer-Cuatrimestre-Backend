import { Body, Controller, Get, Param, Put, Req, UseGuards } from "@nestjs/common";
import { JwtMiddlewareGuard } from "src/common/middleware/auth-guard";
import { UsuarioService } from "./usuario.service";


@Controller('/usuarios')
@UseGuards(JwtMiddlewareGuard)
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) { }

  @Get('/info')
  async getInformacionUsuario(@Req() request) {
    return request.user;
  }

  @Get('/info/:id')
  async getUserById(@Param('id') id: string) {
    return await this.usuarioService.getUserById(Number(id));
  }

  @Get()
  async getAll() {
    // return await this.usuarioService.getAll();
  }

  @Put('/profile/:id')
  async editUserProfile(@Param('id') id: string, @Body() body: any) {
    return await this.usuarioService.editUserProfile(Number(id), body);
  }

  @Put('/subscription/:id')
  async editUserSubscription(@Param('id') id: string, @Body() body: any) {
    return await this.usuarioService.editUserSubscription(Number(id), body);
  }

  @Put('/notifications/:id')
  async editUserNotifications(@Param('id') id: string, @Body() body: any) {
    return await this.usuarioService.editUserNotifications(Number(id), body);
  }
}