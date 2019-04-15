import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/status')
  getStatus() {
    return {
      message: 'Everything is fine, we\'re all fine here.  How are you?',
      at: new Date().toISOString(),
    };
  }

  @Get('/devStatus')
  getDevStatus() {
    return {
      message: 'Oh god its on fire',
      at: new Date().toISOString(),
    };
  }
}
