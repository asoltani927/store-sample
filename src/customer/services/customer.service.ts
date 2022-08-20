import { Customer } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.insert({
      ...createCustomerDto,
    });
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: number) {
    return this.customerRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.save({
      id,
      ...updateCustomerDto,
    });
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
