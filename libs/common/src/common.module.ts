import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonService } from './services/common.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
