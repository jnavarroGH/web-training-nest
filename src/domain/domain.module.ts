import { Module } from '@nestjs/common';
import { PrismaModule } from '../infra/database/prisma/prisma.module';
import { ArticlesModule } from './article/articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
})
export class DomainModule {}
