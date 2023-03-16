import { Module } from '@nestjs/common';
// import { PrismaModule } from '../../infra/database/prisma/prisma.module';
import { ArticlesController } from './article/articles.controller';
import { AppController } from './app/app.controller';

@Module({
  controllers: [ArticlesController, AppController],
})
export class ControllerModule {}
