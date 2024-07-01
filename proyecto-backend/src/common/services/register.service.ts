import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./db.service";
import userQueries from "src/usuario/queries/user.queries";
import * as bcrypt from 'bcrypt';


@Injectable()
export class RegisterService {
  salt: string = '$2a$08$W59jWcwio1TiLx4A8iRyTO'

  constructor(private dbService: DatabaseService) {}

  async generateHash(pw: string) {
    const hash = await bcrypt.hash(pw, this.salt);
    return hash;
  }

  async register(user: any): Promise<any> {
    const encriptedPassword = await this.generateHash(user.password);
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    await this.dbService.executeQuery(userQueries.registerUser, [
      user.email,
      encriptedPassword,
      1,
      2,
      0,
      currentDate,
      0
    ]);

    return user.email;
  }
}