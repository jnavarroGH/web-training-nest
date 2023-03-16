import { Module } from '@nestjs/common';
import { ArticlesProvider } from './articles.provider';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ArticlesProvider],
  // exports: [ArticlesProvider],
})
export class ArticlesModule {}
