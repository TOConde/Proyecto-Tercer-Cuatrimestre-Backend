import { Injectable } from '@nestjs/common';
import axiosInstance from 'src/axios/config';

const key: string = '1f83d029df4827541bd9d53d7380b7f0';

@Injectable()
export class ImageService {
  constructor() {}

  async upload(file: Express.Multer.File) {
    const formdata: FormData = new FormData();
    formdata.append('image', new Blob([Buffer.from(file.buffer)]));
    formdata.append('key', key);
    formdata.append('name', 'generico');
    const response = await axiosInstance.post('/upload', formdata);

    return response.data;
  }
}