import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, CustomerModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
