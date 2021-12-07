import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      useId: 1,
      username: 'smith',
      password: '123456',
    },
    {
      useId: 2,
      username: 'john',
      password: '12345',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
