import {
  Controller,
  UploadedFile,
  UseInterceptors,
  Post,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DoSpacesService } from './SpacesService/doSpaces.service';
import { DoSpacesServicerovider, UploadedMulterFileI } from './SpacesService';

// just a typical nestJs controller
@Controller('/api/v1/do')
export class CommonController {
  constructor(private readonly doSpacesService: DoSpacesService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('spaces')
  async uploadFile(@UploadedFile() file: UploadedMulterFileI) {
    const url = await this.doSpacesService.uploadFile(file);

    return {
      url,
    };
  }
}
