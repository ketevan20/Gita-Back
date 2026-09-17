import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { SignUpDto } from "./DTO/sign-up.dto";
import { SignInDto } from "./DTO/sign-in.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt"
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService, @InjectPinoLogger(AuthService.name) private readonly logger: PinoLogger,) { }

    async signUp(signUpDto: SignUpDto) {
        this.logger.info({ email: signUpDto.email }, "Sign-up attempt")
        const exsisitingUser = await this.userService.findOneByEmail(signUpDto.email)
        if(exsisitingUser) {
            this.logger.warn({ email: signUpDto.email }, "Sign-up failed: email already registered")
            throw new BadRequestException("User already exists")
        }
        const hashedPass = await bcrypt.hash(signUpDto.password, 10)
        await this.userService.create({ ...signUpDto, password: hashedPass })
        this.logger.info({ email: signUpDto.email }, "User created successfully")
        return "user created successfully"
    }

    async SingIn(signInDto: SignInDto) {
        this.logger.info({ email: signInDto.email }, "Sign-in attempt")

        const exsisitingUser = await this.userService.findOneByEmail(signInDto.email)
        if(!exsisitingUser) {
            this.logger.warn({ email: signInDto.email }, "Sign-in failed: user does not exist")
            throw new BadGatewayException("User does not exist")
        }

        const isEqualPass = await bcrypt.compare(signInDto.password,exsisitingUser.password)
        if(!isEqualPass) {
            this.logger.warn({ email: signInDto.email }, "Sign-in failed: invalid password")
            throw new BadGatewayException("invalid credentials")
        }
        const payLoad = {
            userId:exsisitingUser._id,
            role: exsisitingUser.role
        }

        this.logger.info({ userId: exsisitingUser._id }, "Sign-in successful")
        const accessToken = await this.jwtService.sign(payLoad,{expiresIn:"1hr"})
        return accessToken
    }
}