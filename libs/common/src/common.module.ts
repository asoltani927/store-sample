import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config';
import { CommonService } from './services/common.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [CommonService],
  exports: [CommonService, DatabaseConfig],
})
export class CommonModule {}
