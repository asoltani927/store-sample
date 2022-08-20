import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Customer, Product } from '../entities';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [Product, Customer],
      migrations: [__dirname + '/../migrations/*.entity{.ts,.js}'],
      synchronize: true,
    };
  },
};

// @Injectable()
// export class DatabaseConfig {
//   constructor(private readonly configService: ConfigService) {}

//   static get(configService: ConfigService) {
//     return {
//       type: configService.get<string>('DATABASE_TYPE') ?? 'mysql',
//       host: configService.get<string>('DATABASE_HOST') ?? 'localhost',
//       port: configService.get<string>('DATABASE_PORT') ?? 3306,
//       username: configService.get<string>('DATABASE_USER') ?? 'root',
//       password: configService.get<string>('DATABASE_PASSWORD') ?? '',
//       database: configService.get<string>('DATABASE_NAME') ?? 'test',
//       entities: [],
//       synchronize: true,
//     };
//   }
// }
