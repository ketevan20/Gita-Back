import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./DTO/sign-up.dto";
import { SignInDto } from "./DTO/sign-in.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('sign-up')
    signUp(@Body() body:SignUpDto) {
        return this.authService.signUp(body)
    }

    @Post('sign-in') 
    singIn(@Body() body: SignInDto) {
        return this.authService.SingIn(body)
    }
}
