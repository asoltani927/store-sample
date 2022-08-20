import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { Product } from './product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Customer)
  @JoinColumn()
  customer_id: Customer;

  @OneToOne((type) => Product)
  @JoinColumn()
  product_id: Product;

  @Column()
  status: number;
}
