import { Module } from '@nestjs/common';
import { PrismaModule } from '../infra/database/prisma/prisma.module';
// import { ArticlesModule } from './articles/articles.module';
import { DomainModule } from '../domain/domain.module';
import { InterfaceModule } from '../interface/interface.module';
import { InfraModule } from '../infra/infra.module';

@Module({
  imports: [PrismaModule, DomainModule, InterfaceModule, InfraModule],
})
export class AppModule {}
