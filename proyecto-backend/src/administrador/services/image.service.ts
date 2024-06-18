import { Injectable } from '@nestjs/common';
import axiosInstance from 'src/axios/config';
import * as FormData from 'form-data';

const key: string = '1f83d029df4827541bd9d53d7380b7f0';

@Injectable()
export class ImageService {
  constructor() {}

  async upload(file: Express.Multer.File, tituloPelicula: string) {
    const formdata: FormData = new FormData();
    
    formdata.append('image', file.buffer, { filename: file.originalname });
    formdata.append('key', key);
    formdata.append('name', tituloPelicula);

    const response = await axiosInstance.post('/upload', formdata, {
      headers: formdata.getHeaders(),
    });

    return response.data;
  }
}