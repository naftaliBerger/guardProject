import { Injectable } from '@nestjs/common';

export interface User {
  username: string;
  password: string;
  role: string;
}


@Injectable()
export class UsersService {
    private users: User[] = [];
    createUser(user: User): string {

    const exists = this.users.find(u => u.username === user.username);
    if (exists) {
      return 'User already exists';

    }
        this.users.push(user);
        return `User ${user.username} created successfully with role ${user.role}`;
    }

}
