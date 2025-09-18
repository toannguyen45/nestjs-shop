import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import envConfig from './shared/config'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('alooooo',envConfig.ACCESS_TOKEN_SECRET)
    return this.appService.getHello()
  }
}
