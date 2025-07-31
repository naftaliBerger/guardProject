import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.model';
//-------------------------------------------------------
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}
//--------------------------------------------------------
  async register(username: string, password: string, role: string): Promise<string> {
    const exists = await this.usersService.findByUsername(username);
    if (exists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.usersService.createUser({
      username,
      password: hashedPassword,
      role
    });

    return `User ${username} registered successfully with role ${role}`;
  }
//-----------------------------------------------------------
  async login(username: string, password: string): Promise<string> {
    const user = await this.usersService.findByUsername(username.toLowerCase());
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    const payload = { username: user.username, role: user.role };
    return this.jwtService.sign(payload);
  }
}
