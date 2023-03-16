import { Module } from '@nestjs/common';
// import { ArticlesProvider } from '../../infra/repositories/article/articles.provider';
import { ArticlesController } from '../../interface/controller/article/articles.controller';
import { PrismaModule } from '../../infra/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ArticlesController],
  // providers: [ArticlesProvider],
})
export class ArticlesModule {}
