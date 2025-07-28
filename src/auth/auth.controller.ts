import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './DTO/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body:User) :string {
    return 'User registered successfully with username: ' + body.username + " role: " + body.role;
  }
}
