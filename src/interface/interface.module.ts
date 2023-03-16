import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
// import { PrismaModule } from '../infra/database/prisma/prisma.module';

@Module({
  imports: [ControllerModule],
})
export class InterfaceModule {}
