import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Worksheet } from 'exceljs';

import { CsvOrXlsxMulterEngine } from '../../shared/multer-engines/csv-xlsx/engine.js';
import { FilesService } from './files.service.js';

const MAX_FILE_SIZE_IN_MiB = 1000000000;

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseInterceptors(
    FileInterceptor('file', {
      storage: new CsvOrXlsxMulterEngine({
        maxFileSize: MAX_FILE_SIZE_IN_MiB,
        destKey: 'worksheet',
      }),
    }),
  )
  @Post()
  create(@UploadedFile() data: { worksheet: Worksheet }) {
    return this.filesService.format(data.worksheet);
  }
}
