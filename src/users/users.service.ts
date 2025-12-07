import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: "Armin"
        },
        {
            id: 2,
            name: "Reza"
        },
        {
            id: 3,
            name: "Ali"
        },
    ]

    sayHello(): string {
        return "hello world!"
    }

    usersList(): object {
        return this.users
    }
    
    getUserDetailById(id: number): any {
        let user = this.users.find(user => user.id === id)
        return user
    }
}
