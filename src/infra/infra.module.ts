import { Module } from '@nestjs/common';
import { PrismaModule } from '../infra/database/prisma/prisma.module';
import { RepositoryModule } from './repositories/repository.module';

@Module({
  imports: [PrismaModule, RepositoryModule],
})
export class InfraModule {}
