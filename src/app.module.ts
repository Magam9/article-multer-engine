import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

import { FilesModule } from './modules/files/files.module.js';

@Module({
  imports: [
    FilesModule,
    ServeStaticModule.forRoot({
      rootPath: join(new URL('..', import.meta.url).pathname, 'public'),
      serveRoot: '/',
    }),
  ],
})
export class AppModule {}
