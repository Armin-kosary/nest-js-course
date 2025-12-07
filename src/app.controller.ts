import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getname')
  getName(): string {
    return "Hello my name in Armin"
  }

  @Post('sayhello')
  sayHello(): string {
    return "hello"
  }

  @Post('setname')
  setName(): string {
    this.appService.setName("Reza")
    return this.appService.getName()
  }
}
