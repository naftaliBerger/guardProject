import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

@Injectable()
export class AuthService {
    
}
