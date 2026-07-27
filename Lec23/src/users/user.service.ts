import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDTO } from "./DTO/user.dto";

@Injectable()
export class UserService {
    users = [
        {
            id: 1,
            name: "Keti",
            age: 21
        },
        {
            id: 2,
            name: "Mariami",
            age: 18
        },
        {
            id: 3,
            name: "Nika",
            age: 26
        },
        {
            id: 4,
            name: "Gio",
            age: 20
        },
        {
            id: 5,
            name: "Elene",
            age: 22
        },
    ]

    getAllUsers() {
        return this.users
    }

    getUserById(id: number) {
        let user = this.users.find((el) => el.id === Number(id))
        if (!user) throw new HttpException("not found", HttpStatus.NOT_FOUND)
        return user
    }

    createUser(body: UserDTO) {
        const lastId = this.users[this.users.length - 1]?.id || 0
        const newObj = {
            id: lastId + 1,
            name: body.name,
            age: body.age
        }
        this.users.push(newObj)
        return newObj
    }

    deleteUser(id: number) {
        const index = this.users.findIndex(el => el.id !== Number(id))
        if (index === -1) throw new HttpException("not found", HttpStatus.NOT_FOUND)
        const deleteUser = this.users.splice(index, 1)
        return deleteUser
    }

    updateUser(id: number, body: UserDTO) {
        const index = this.users.findIndex(el => el.id === Number(id))
        if(index === -1) return new HttpException("not found", HttpStatus.NOT_FOUND)
        this.users[index] = {
            ...this.users[index],
            name: body.name,
            age: body.age
        }
        return this.users[index]      
    }
}

