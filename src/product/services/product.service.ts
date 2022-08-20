import { Product } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.insert({
      ...createProductDto,
    });
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id) {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.save({
      id,
      ...updateProductDto,
    });
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
