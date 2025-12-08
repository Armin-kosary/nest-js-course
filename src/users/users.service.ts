import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: any[] = [
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
    
    getUserDetailById(id: number): {id: number, name: string} | null {
        let user = this.users.find(user => user.id === id)
        if (!user) {
            return null
        }
        return user
    }

    createNewUser(data: object) {
        if (data) {
            this.users.push(data)            
        }
        return this.users
    }

    editUserById(id: number, data: any) {
        let user = this.users.find(user => user.id === id)
        if (!user) {
            return null
        }
        user.name = data.name
        return user
    }


    deleteUserById(id: number) {
        let user = this.users.find(user => user.id === id)
        return user.name+" Deleted"
    }
}
