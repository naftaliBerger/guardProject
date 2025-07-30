import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {User} from '../users/user.model'


@Injectable()
export class AuthService {
  private users: User[] = []; 

  constructor(private jwtService: JwtService) {}

  async register(username: string, password: string, role: string){
    const exists = this.users.find(u => u.username === username);
    if (exists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    this.users.push({
        username, password: hashedPassword, role,
        id: 0,
        created_at: new Date()
    });

    return `User ${username} registered successfully with role ${role}`;
  }

  async login(username: string, password: string){
    const user = this.users.find(u => u.username === username);
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
