import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'Ketevan Samukashvili' })
    @IsNotEmpty()
    @IsString()
    fullName!: string;

    @ApiProperty({ example: 'user@example.com' })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @ApiProperty({ example: 'strongPass123', minLength: 6, maxLength: 20 })
    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password!: string;
}
