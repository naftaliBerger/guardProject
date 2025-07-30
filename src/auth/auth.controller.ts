import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { register } from './typse/register';
import {Login} from './typse/login';
import { from } from 'rxjs';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: register) {
    return await this.authService.register(body.username, body.password, body.role);
  }

  @Post('login')
  async login(@Body() body: Login) {
    const token = await this.authService.login(body.username, body.password);
    return { message: 'Login successful', token };
  }
}











// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('register')
//   register(@Body() body:register) :string {
//     return 'User registered successfully with username: ' + body.username + " role: " + body.role;
//   }

//   @Post('login')
//   login(@Body() body: Login): string {
//     return 'User logged in successfully with username: ' + body.username;
//   }
// }
