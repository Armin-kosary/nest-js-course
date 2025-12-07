import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    sayHello(): string {
        return "hello world!"
    }
}
