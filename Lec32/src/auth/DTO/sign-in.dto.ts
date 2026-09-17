import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class SignInDto {
    @ApiProperty({ example: 'example@gmail.com' })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string;

    @ApiProperty({ example: 'strongPass123', minLength: 6, maxLength: 20 })
    @IsNotEmpty()
    @IsString()
    @Length(6, 20)
    password!: string
}