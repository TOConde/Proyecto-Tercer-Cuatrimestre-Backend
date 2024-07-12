import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtMiddlewareGuard } from "src/common/middleware/auth-guard";
import { UsuarioService } from "./usuario.service";
import { FileInterceptor } from "@nestjs/platform-express";


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

  @Put('/image/:id')
  @UseInterceptors(FileInterceptor('img'))
  async editUserImg(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    if (!file) {
      throw new BadRequestException('Inserte una imagen');
    }

    try {
      await this.usuarioService.editUserImg(Number(id), file);
      return { message: `Su imagen se cambio con exito.` };
    } catch (error) {
      throw new BadRequestException('Error al cambiar de imagen de usuario.')
    }
  }

  @Put('/password/:id')
  async editUserPassword(@Param('id') id: string, @Body() body: any) {
    return await this.usuarioService.editUserPassword(Number(id), body);
  }

  @Post('/verification/:id')
  @HttpCode(200)
  async verificarPassword(@Param('id') id: string, @Body() body: any) {
    return await this.usuarioService.verificarPassword(Number(id), body);
  }
}

