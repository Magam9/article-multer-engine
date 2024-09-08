import { Module } from '@nestjs/common';

import { FilesController } from './files.controller.js';
import { FilesService } from './files.service.js';

@Module({
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
