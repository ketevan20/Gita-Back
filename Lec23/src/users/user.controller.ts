import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./DTO/user.dto";

@Controller()
export class UserController{
    constructor(private readonly userService:UserService){}

    @Get("/users")
    getAllUserInformation() {
        return this.userService.getAllUsers()
    }

    @Get("/users/:id")
    getUserById(@Param() params) {
        const id = params.id
        return this.userService.getUserById(id)
    }

    @Post("/users")
    addUser(@Body() body: UserDTO) {
        return this.userService.createUser(body)
    }

    @Delete("/users/:id")
    deleteUser(@Param() params) {
        const id = params.id
        return this.userService.deleteUser(id)
    }

    @Put("/users/:id")
    updateUser(@Param() params, @Body() body: UserDTO) {
        const id = params.id
        return this.userService.updateUser(id, body)
    }
}