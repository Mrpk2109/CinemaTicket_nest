import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configService: ConfigService) {}

  @Get()
  getHello(): string {
    // return AppModule.forRoot;
    console.log(this.configService.get("db_port"))
    return "ddd"
  }
}
