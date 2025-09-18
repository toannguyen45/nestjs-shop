import { Body, Controller, Post, SerializeOptions } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterBodyDTO, RegisterResponseDTO } from './auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SerializeOptions({ type: RegisterResponseDTO })
  @Post('register')
  async register(@Body() body: RegisterBodyDTO) {
    const result = await this.authService.register(body)

    return result
  }
}
