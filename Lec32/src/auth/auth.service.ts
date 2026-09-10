import { BadGatewayException, Injectable } from "@nestjs/common";
import { SignUpDto } from "./DTO/sign-up.dto";
import { SignInDto } from "./DTO/sign-in.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async signUp(signUpDto: SignUpDto) {
        const exsisitingUser = await this.userService.findOneByEmail(signUpDto.email)
        const hashedPass = await bcrypt.hash(signUpDto.password, 10)
        await this.userService.create({ ...signUpDto, password: hashedPass })
        return "user created successfully"
    }

    async SingIn(signInDto: SignInDto) {
        const exsisitingUser = await this.userService.findOneByEmail(signInDto.email)
        if(!exsisitingUser) throw new BadGatewayException("User does not exist")
        const isEqualPass = await bcrypt.compare(signInDto.password,exsisitingUser.password)
        if(!isEqualPass) throw new BadGatewayException("invalid credentials")
        const payLoad = {
            userId:exsisitingUser._id,
            role: exsisitingUser.role
        }
        const accessToken = await this.jwtService.sign(payLoad,{expiresIn:"1hr"})
        return accessToken
    }
}