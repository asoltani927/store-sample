import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig {
  constructor(private readonly configService: ConfigService) {}

  static get(configService: ConfigService) {
    return {
      type: configService.get<string>('DATABASE_TYPE') ?? 'mysql',
      host: configService.get<string>('DATABASE_HOST') ?? 'localhost',
      port: configService.get<string>('DATABASE_PORT') ?? 3306,
      username: configService.get<string>('DATABASE_USER') ?? 'root',
      password: configService.get<string>('DATABASE_PASSWORD') ?? '',
      database: configService.get<string>('DATABASE_NAME') ?? 'test',
      entities: [],
      synchronize: true,
    };
  }
}
