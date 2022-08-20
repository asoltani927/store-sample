import { Order } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.insert({
      ...createOrderDto,
    });
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.save({
      id,
      ...updateOrderDto,
    });
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
