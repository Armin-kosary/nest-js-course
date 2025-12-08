import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    getUserDetailById(@Param('id') id: string): {id: number, name: string} | null {
        return this.userService.getUserDetailById(parseInt(id))
    }

    @Post('create')
    createNewUser(@Body() data: object) {
        return this.userService.createNewUser(data)
    }

    @Put('edit/:id')
    editUserById(@Param('id') id: string, @Body() data: object) {
        return this.userService.editUserById(parseInt(id), data)
    }

    @Delete('delete/:id')
    deleteUserById(@Param('id') id: string) {
        return this.userService.deleteUserById(parseInt(id))
    }
}
