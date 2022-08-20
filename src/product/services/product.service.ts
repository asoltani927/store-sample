import { Product } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    // @InjectRepository(Product)
    // private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    // return this.productRepository.create({
    //   id: 
    //   ...createProductDto,
    // });
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    // return this.productRepository.findOne({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
