import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, UserCreationAttributes } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  // יצירת משתמש ושמירה במסד הנתונים
  async createUser(user: UserCreationAttributes): Promise<User> {
    const exists = await this.userModel.findOne({ where: { username: user.username } });
    if (exists) {
      throw new Error('User already exists');
    }

    return await this.userModel.create(user);
  }

  // חיפוש משתמש לפי שם משתמש
  async findByUsername(username: string): Promise<User | null> {
    return await this.userModel.findOne({ where: { username } });
  }
}
