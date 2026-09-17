import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./DTO/sign-up.dto";
import { SignInDto } from "./DTO/sign-in.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully' })
    @ApiResponse({ status: 400, description: 'Email already registered' })
    @Post('sign-up')
    signUp(@Body() body:SignUpDto) {
        return this.authService.signUp(body)
    }

    @ApiOperation({ summary: 'Log in an existing user' })
    @ApiResponse({ status: 200, description: 'Returns a JWT access token' })
    @ApiResponse({ status: 400, description: 'Invalid credentials' })
    @Post('sign-in') 
    singIn(@Body() body: SignInDto) {
        return this.authService.SingIn(body)
    }
}
