import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService){}

    @Get('detail')
    userDetail(): string {
        return this.userService.sayHello()
    }

    @Get('list')
    usersList(): object {
        return this.userService.usersList()
    }
}
