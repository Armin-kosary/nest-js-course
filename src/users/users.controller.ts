import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('detail')
    userDetail(): string {
        return "User Detail..."
    }
}
