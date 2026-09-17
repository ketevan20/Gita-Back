import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { LoggerModule } from "nestjs-pino";

@Module({
    imports: [
        LoggerModule.forRoot(),
        UsersModule, 
        ConfigModule.forRoot(), 
        JwtModule.register({
        global: true,
        secret: process.env.JWT_SECRET
    })],
    controllers: [AuthController],
    providers: [AuthService]
})

export class AuthModule { }
